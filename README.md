# Michael Scott Boudreaux — custom site rebuild

Next.js rebuild of [michaelscottboudreaux.com](https://www.michaelscottboudreaux.com/) with scaffolding for **Shopify Storefront** (merch) and **Mailchimp** (newsletter).

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS
- Shopify Storefront GraphQL (`lib/shopify.ts`)
- Mailchimp subscribe API route (`app/api/newsletter/route.ts`)

See project docs: stack rationale in the Cursor project store `docs/stack-choice.md`.

## Local development

```bash
npm install
cp .env.example .env.local   # optional — app runs with mocks when unset
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Purpose |
|----------|---------|
| `SHOPIFY_STORE_DOMAIN` | Shopify store hostname (e.g. `msb-store.myshopify.com`) |
| `SHOPIFY_STOREFRONT_ACCESS_TOKEN` | Storefront API public token |
| `MAILCHIMP_API_KEY` | Mailchimp API key (`key-usXX` format) |
| `MAILCHIMP_AUDIENCE_ID` | Audience / list ID for subscribers |

Do **not** commit secrets. `.env.local` is gitignored.

## Integration behavior without credentials

- **Merch**: shows a styled preview product grid with placeholder items.
- **Cart**: header cart links to `#merch` until Shopify is configured, then opens the live store cart URL.
- **Newsletter**: form renders with a preview notice; API returns `503` until Mailchimp env vars are set.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Run production build |
| `npm run lint` | ESLint |

## Project status (iteration 1)

Homepage sections mirror the live Squarespace site: hero imagery, bio copy, Spotify embeds, shows/Bandsintown CTA, social footer, plus merch and newsletter scaffolding for the next integration pass.