/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Gatsby x Contentful`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `m6oq7eep1tab`, 
        accessToken: `BEvBk-LPwC6XnQw9-hoTimRREuOY0F35sIgQRWPAH4k`, 
      },
    },
  ],
}
