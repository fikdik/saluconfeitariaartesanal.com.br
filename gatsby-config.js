const analytics = require("./content/settings/analytics.json")
const manifest = require("./content/settings/manifest.json")
const siteMetadata = require("./content/settings/siteMetadata.json")
const googleFonts = require("./content/theme/google_fonts.json")
const colors = require("./content/theme/pallete.json")

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        "~": `${__dirname}/src`,
        content: `${__dirname}/content`,
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
        path: `${__dirname}/src/pages`,
        name: `pages`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-svg-sprite`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: "uploads",
            },
          },
          {
            resolve: `gatsby-remark-images`,
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
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: siteMetadata.siteUrl,
        stripQueryString: true,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `${colors["brand-3"][3]}`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: Object.keys(googleFonts).map(k => googleFonts[k]),
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: analytics.trackingId,
        // Setting this parameter is optional
        anonymize: false,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
      },
    },
    {
      resolve: `gatsby-plugin-amp`,
      options: {
        analytics: {
          type: "gtag",
          dataCredentials: "include",
          config: {
            vars: {
              gtag_id: analytics.trackingId,
              config: {
                [analytics.trackingId]: {
                  page_location: "{{pathname}}",
                },
              },
            },
          },
        },
        canonicalBaseUrl: siteMetadata.siteUrl,
        components: ["amp-form"],
        excludedPaths: ["/404*", "/"],
        pathIdentifier: "/amp/",
        relAmpHtmlPattern: "{{canonicalBaseUrl}}{{pathname}}{{pathIdentifier}}",
        useAmpClientIdApi: true,
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

    `gatsby-plugin-offline`,
  ],
}
