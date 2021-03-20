module.exports = {
  siteMetadata: {
    title: "HOGE.University",
    author: "Sserra",
    description: "Learning resources for HOGE",
    keywords: `HOGE`,
    imageUrl: "",
    twitter: "https://twitter.com/amanhimself",
    github: `https://github.com/amandeepmittal`,
    medium: "https://medium.com/@amanhimself",
    gatsby: "https://www.gatsbyjs.org/",
    bulma: "https://bulma.io/",
    siteUrl: `https://www.hoge.finance`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Makefolio",
        short_name: "Makefolio",
        start_url: "/",
        background_color: "#2980b9",
        theme_color: "#2980b9",
        display: "standalone",
        icon: "src/images/gatsby-icon.png",
        orientation: "portrait",
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },

    "gatsby-transformer-remark",
    "gatsby-transformer-json",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `json`,
        path: `${__dirname}/src/data`,
      },
    },

    // Side menu built dinamically from markdown pages in faq folder
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages-faq`,
        path: `${__dirname}/src/markdown-pages/faq`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-remark-responsive-iframe",
  ],
};
