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
        apiKey: 'S_OTRlMzQ2ZmMtMjY1Mi00MDcxLWFkYWUtZGY1M2Y2YmEwNzRkNjM3NDg3OTg0NDk4MjgxMzYw'
      }
    }
  ],
}
