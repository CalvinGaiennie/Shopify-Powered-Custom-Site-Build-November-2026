import { getShopifyConfig } from "@/lib/env";

export type MerchProduct = {
  id: string;
  title: string;
  price: string;
  imageUrl: string | null;
  url: string;
};

const MOCK_PRODUCTS: MerchProduct[] = [
  {
    id: "mock-tee",
    title: "MSB Logo Tee",
    price: "$28.00",
    imageUrl: null,
    url: "#merch",
  },
  {
    id: "mock-hat",
    title: "Bayou Tour Hat",
    price: "$32.00",
    imageUrl: null,
    url: "#merch",
  },
  {
    id: "mock-vinyl",
    title: "Acadiana Vinyl (Preview)",
    price: "$24.00",
    imageUrl: null,
    url: "#merch",
  },
];

const PRODUCTS_QUERY = `
  query FeaturedProducts($first: Int!) {
    products(first: $first, sortKey: BEST_SELLING) {
      edges {
        node {
          id
          title
          handle
          featuredImage {
            url
          }
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`;

type ShopifyProductsResponse = {
  data?: {
    products?: {
      edges: Array<{
        node: {
          id: string;
          title: string;
          handle: string;
          featuredImage: { url: string } | null;
          priceRange: {
            minVariantPrice: { amount: string; currencyCode: string };
          };
        };
      }>;
    };
  };
};

export async function getMerchProducts(limit = 3): Promise<{
  products: MerchProduct[];
  source: "shopify" | "mock";
}> {
  const { storeDomain, storefrontToken, isConfigured } = getShopifyConfig();

  if (!isConfigured) {
    return { products: MOCK_PRODUCTS.slice(0, limit), source: "mock" };
  }

  const endpoint = `https://${storeDomain}/api/2024-10/graphql.json`;

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": storefrontToken!,
      },
      body: JSON.stringify({
        query: PRODUCTS_QUERY,
        variables: { first: limit },
      }),
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      return { products: MOCK_PRODUCTS.slice(0, limit), source: "mock" };
    }

    const json = (await response.json()) as ShopifyProductsResponse;
    const edges = json.data?.products?.edges ?? [];

    if (edges.length === 0) {
      return { products: MOCK_PRODUCTS.slice(0, limit), source: "mock" };
    }

    const products: MerchProduct[] = edges.map(({ node }) => {
      const { amount, currencyCode } = node.priceRange.minVariantPrice;
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: currencyCode,
      }).format(Number(amount));

      return {
        id: node.id,
        title: node.title,
        price: formatted,
        imageUrl: node.featuredImage?.url ?? null,
        url: `https://${storeDomain}/products/${node.handle}`,
      };
    });

    return { products, source: "shopify" };
  } catch {
    return { products: MOCK_PRODUCTS.slice(0, limit), source: "mock" };
  }
}

export function getShopifyCartUrl(): string | null {
  const { storeDomain, isConfigured } = getShopifyConfig();
  if (!isConfigured) return null;
  return `https://${storeDomain}/cart`;
}