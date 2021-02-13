/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-snipcartv3',
      options: {
        apiKey: 'ZmZlZTJkY2QtYmUxNy00YjE4LWI2ZDgtYmIxYjdlZDBmZGJlNjM3MzgyMDQwODE5NjYyNDQz'
      }
    }
  ],
}
