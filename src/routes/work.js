export async function get() {
  return {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: [
      {
        "title": "The Ethnobotanical Assembly",
        "blurb": "is an online ethnobotany journal based in London, UK.",
        "url": "https://tea-assembly.com",
        "emoji": "🌿",
        "scope": "Design + Development",
        "tools": "Next.js / Strapi / PostgreSQL / GraphQL / DigitalOcean",
      },
      {
        "title": "Drugs and Me",
        "blurb": "is a drug policy and awareness non-profit from London, UK.",
        "url": "https://drugsand.me",
        "emoji": "💊",
        "scope": "Design + Development",
        "tools": "Next.js / Strapi / PostgreSQL / GraphQL / AWS",
      },
      {
        "title": "Elite Athletes",
        "blurb": "is youth basketball academy in Antwerp, Belgium.",
        "url": "https://eliteathletes.be",
        "emoji": "🏀",
        "scope": "Design + Development",
        "tools": "Wordress / PHP / Stripe API"
      },
      {
        "title": "Mimansa",
        "blurb": "is a visualiser living in Goa, India.",
        "url": "https://mimansahay.in",
        "emoji": "🖼",
        "scope": "Development",
        "tools": "Next.js / Strapi / PostgreSQL / GraphQL / DigitalOcean",
      },
      {
        "title": "Authentic Leaders",
        "blurb": "is cultivating the next generation of LGBTIQ leaders.",
        "url": "https://authenticleaders.co",
        "emoji": "🏳️‍🌈",
        "scope": "Design + Development",
        "tools": "Squarespace / Node.js / MongoDB"
      }
    ],
  };
}