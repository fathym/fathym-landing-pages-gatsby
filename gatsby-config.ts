import path from "path";
import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
{
  resolve: "@plasmicapp/loader-gatsby",
  options: {
    projects: [
      {
        id: "rrfXaG8ahgK7qX5VCrS6uM",
        token: "i4IxqIzRjUrYU8O0h972WtOt0u6F1r3WwMZHztaX10sdYnHvKswmBm0bPJddXVHCdJnnwuu7hSB62BvujlA",
      },
    ], // An array of project ids.
    preview: false,
    defaultPlasmicPage: path.resolve("./src/templates/defaultPlasmicPage.tsx"),
  },
},
{
  resolve: "gatsby-plugin-react-helmet",
}
]
}

export default config
