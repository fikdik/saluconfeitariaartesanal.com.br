const manifest = require("./content/settings/manifest.json")
const siteMetadata = require("./content/settings/siteMetadata.json")

module.exports = {
  siteMetadata,
  plugins: [
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        "~": `${__dirname}/src`,
        "content": `${__dirname}/content`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/img`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `content`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-svg-sprite`,
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              quality: 100,
              maxWidth: 1600,
            },
          },
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        ...manifest,
        display: `standalone`,
        icon: `${__dirname}/static/${manifest.icon}`,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#DD2727`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Lobster Two`,
            variants: [`400`, `700`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-CHANGEME",
        // Setting this parameter is optional
        anonymize: false,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
        enableIdentityWidget: true, // Netlify hosting
        publicPath: `_admin`,
        htmlTitle: `CMS Panel`,
        // htmlFavicon: `/icons/icon-48x48.png`,
        manualInit: true,
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/styles/index.css`],
      },
    },

    // `gatsby-plugin-offline`,
  ],
}
