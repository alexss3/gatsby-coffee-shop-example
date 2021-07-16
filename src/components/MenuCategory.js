import React from "react"
import * as styles from "./MenuCategory.module.css"

export default function MenuCategory({ category }) {
  return (
    <div className={styles.category}>
      <h2>{category.name}</h2>
      <ul>
        {category.items &&
          category.items.map(item => (
            <li key={item.name}>
              <div className={styles.name}>{item.name}</div>
              <div className={styles.price}>{item.price}</div>
            </li>
          ))}
      </ul>
    </div>
  )
}
