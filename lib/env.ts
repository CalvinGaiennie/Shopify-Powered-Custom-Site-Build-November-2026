export function getShopifyConfig() {
  const storeDomain = process.env.SHOPIFY_STORE_DOMAIN;
  const storefrontToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

  return {
    storeDomain,
    storefrontToken,
    isConfigured: Boolean(storeDomain && storefrontToken),
  };
}

export function getMailchimpConfig() {
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
  const serverPrefix = apiKey?.split("-")[1];

  return {
    apiKey,
    audienceId,
    serverPrefix,
    isConfigured: Boolean(apiKey && audienceId && serverPrefix),
  };
}