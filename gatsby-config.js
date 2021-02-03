module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`, {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Aleo`,
              variants: [`400`, `700`],
              usePreload: true,
            },
            {
              family: `Montserrat`,
              variants: [`400`, `700`],
              usePreload: true,
            }, 
          ]
        }
      }
    }
  ]
}