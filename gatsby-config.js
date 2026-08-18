const path = require(`path`)

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          // Bootstrap 5.3 and this project's stylesheets still use @import and
          // other legacy Sass syntax that Dart Sass 1.80+ warns about on every build.
          // `legacy-js-api` fires because gatsby-plugin-sass still ships sass-loader 10,
          // which has no modern-API option — nothing to fix on our side.
          silenceDeprecations: [
            `import`,
            `legacy-js-api`,
            `if-function`,
            `global-builtin`,
            `color-functions`,
          ],
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`, {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
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
