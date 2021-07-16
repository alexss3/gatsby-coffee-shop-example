import React from "react"
import * as styles from "./BlogEntry.module.css"

export default function BlogEntry({ title, date, excerpt }) {
  return (
    <article className={styles.blog}>
      <h2>{title}</h2>
      <h3>{date}</h3>
      <p>{excerpt}</p>
    </article>
  )
}
