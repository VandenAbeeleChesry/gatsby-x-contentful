/**
 * @type {import('gatsby').GatsbyConfig}
*/

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});


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
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN
      },
    },
  ],
}
