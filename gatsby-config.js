module.exports = {
  siteMetadata: {
    title: `Kuvert-Ukraine`,
    description: `Envelope factory «Kuvert-Ukraine» currently is the most stable national manufacturer of envelopes. We produce all kinds of envelopes, paper bags and banderole packages.`,
    author: `Kuvert-Ukraine`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: "UA-165058114-1", // leave empty if you want to disable the tracker
          cookieName: "gatsby-gdpr-analytics", // default
          anonymize: true, // default
          allowAdFeatures: false, // default
        },
        googleTagManager: {
          trackingId: "", // leave empty if you want to disable the tracker
          cookieName: "gatsby-gdpr-analytics", // default
          dataLayerName: "dataLayer", // default
        },
        facebookPixel: {
          pixelId: "1728679630723815", // leave empty if you want to disable the tracker
          cookieName: "gatsby-gdpr-analytics", // default
        },
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ["production", "development"],
      },
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: "uk",
        useLangKeyLayout: false,
        prefixDefault: false,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-react-leaflet",
      options: {
        linkStyles: true, // (default: true) Enable/disable loading stylesheets via CDN
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
