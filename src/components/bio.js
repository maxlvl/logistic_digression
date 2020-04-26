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
        Hi, I'm <b>Max Van Lyl</b>. Software Developer at <a href="http://www.freshbooks.com">FreshBooks</a> during the day, dad in the evenings, building stuff in at night into the early morning. I mostly work with Python and Javascript.
      </p>
    </div>
  )
}

export default Bio
