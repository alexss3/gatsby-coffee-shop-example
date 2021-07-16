import React from "react"
import { graphql, Link } from "gatsby"

import BlogEntry from "../components/BlogEntry"
import Layout from "../components/Layout"

import * as styles from "./blog-list.module.css"

export default function BlogListTemplate({ data, pageContext }) {
  const isFirstPage = pageContext.currentPage === 1
  const isLastPage = pageContext.currentPage === pageContext.numPages
  const previousPage =
    pageContext.currentPage - 1 === 1
      ? "/blog"
      : `/blog/${pageContext.currentPage - 1}`
  const nextPage = `/blog/${pageContext.currentPage + 1}`

  return (
    <Layout>
      <div id={styles.hero}>
        <h1>The Coffee Blog</h1>
      </div>
      <main className={styles.blogList}>
        {data.allMarkdownRemark.edges.map(entry => (
          <BlogEntry
            key={entry.node.id}
            slug={entry.node.fields.slug}
            title={entry.node.frontmatter.title}
            date={entry.node.frontmatter.date}
            excerpt={entry.node.excerpt}
          />
        ))}
      </main>
      <div id={styles.pageLinks}>
        {!isFirstPage && <Link to={previousPage}>&lt;&lt; Previous Page</Link>}
        {!isLastPage && <Link to={nextPage}>Next Page &gt;&gt;</Link>}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM D, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
