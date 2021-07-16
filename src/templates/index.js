import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import * as styles from "./index.module.css"

export default function IndexPage({ data }) {
  return (
    <Layout>
      <div id={styles.main}>
        <h1>{data.markdownRemark.frontmatter.tagline}</h1>
        <div id={styles.tiles}>
          <img src={data.markdownRemark.frontmatter.image1} />
          <img src={data.markdownRemark.frontmatter.image2} />
          <img src={data.markdownRemark.frontmatter.image3} />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    markdownRemark(fileAbsolutePath: { regex: "/index.md/" }) {
      frontmatter {
        tagline
        image1
        image2
        image3
      }
    }
  }
`
