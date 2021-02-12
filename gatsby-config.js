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
        apiKey: 'ZGU3ZDUxYTYtZWY5NS00YWJiLTlhM2QtMmZjZmE2YWI0NjkyNjM3NDgzMjI1ODE0Njc1ODE5'
      }
    }
  ],
}
