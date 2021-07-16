import React from "react"
import MenuTemplate from "../templates/menu"

export default function MenuPreview({ entry }) {
  const menu = entry.getIn(["data"]).toJS()

  const data = {
    markdownRemark: {
      frontmatter: {
        ...menu,
      },
    },
  }

  return <MenuTemplate data={data} />
}
