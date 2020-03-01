/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */


require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
 

  plugins:[
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },

    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.app/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        
        //accessToken:"",
        downloadLocal: true,
      },
    },
    `gatsby-plugin-react-helmet`,
  'gatsby-plugin-styled-components',
  'gatsby-plugin-sass',
  'gatsby-background-image',
 'gatsby-plugin-sharp',
 'gatsby-transformer-sharp',
 'gatsby-plugin-transition-link',
 `gatsby-plugin-playground`

]

}
