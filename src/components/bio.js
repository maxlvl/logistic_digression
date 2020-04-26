/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import { rhythm } from "../utils/typography"

const Bio = () => {
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <p>
        Hi, I'm <b>Max Van Lyl</b>. Software Developer at <a href="http://www.freshbooks.com">FreshBooks</a> during the day. Dad in the evenings. Building stuff at night or early mornings. 
        I mostly work with Python and Javascript.
      </p>
    </div>
  )
}

export default Bio
