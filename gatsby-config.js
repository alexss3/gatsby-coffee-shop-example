module.exports = {
  siteMetadata: {
    title: "The Coffee Blog",
  },

  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: "src/blog",
      },
    },
  ],
}
