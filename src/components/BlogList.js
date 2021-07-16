import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import BlogEntry from "./BlogEntry"

export default function BlogList() {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "MMMM D, YYYY")
            }
            excerpt
          }
        }
      }
    }
  `)

  return (
    <div>
      {data.allMarkdownRemark.edges.map(entry => (
        <BlogEntry
          key={entry.node.id}
          title={entry.node.frontmatter.title}
          date={entry.node.frontmatter.date}
          excerpt={entry.node.excerpt}
        />
      ))}
    </div>
  )
}
