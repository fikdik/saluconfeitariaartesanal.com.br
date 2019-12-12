module.exports = {
  siteMetadata: {
    title: "Salu",
    siteUrl: "https://saluconfeitariaartezanal.com.br",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "images",
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
        enableIdentityWidget: true, // Netlify hosting
        publicPath: "_admin",
        htmlTitle: "CMS Panel",
        // htmlFavicon: '/img/favico.ico',
        manualInit: true,
      },
    },
    "gatsby-plugin-offline",
  ],
}
