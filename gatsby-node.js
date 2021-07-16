const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")
const { create } = require("domain")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              contentKey
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  const blogEntries = result.data.allMarkdownRemark.edges.filter(
    ({ node }) => node.frontmatter.contentKey === "blog"
  )
  blogEntries.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve("./src/templates/blog.js"),
      context: {
        slug: node.fields.slug,
      },
    })
  })

  const postsPerPage = 2
  const numPages = Math.ceil(blogEntries.length / postsPerPage)

  for (let i = 0; i < numPages; i++) {
    createPage({
      path: i === 0 ? "/blog" : `/blog/${i + 1}`,
      component: path.resolve("./src/templates/blog-list.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  }
}
