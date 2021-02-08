module.exports = {
  siteMetadata: {
    title: `Design+Code 3`,
    description: `Complete courses about the best tools and design systems. Prototype and build apps with React and Swift.`,
    author: `@kojopatrick`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `zwtmg0zjbrzi`,
        // Learn about environment variables: https://gatsby.app/env-vars
        accessToken: 'I0hRXgO2NbfDB-AhxbUkm8uU5HssEykOE0q_tY-WPIY',
        downloadLocal: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
