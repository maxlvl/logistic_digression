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
        Hi, I'm <b>Max Van Lyl</b>. Software Engineer at <a href="http://www.freshbooks.com">FreshBooks</a> during the day, working on smaller projects during nights or early mornings. Noob at most things in life. This is where I talk about stuff.
      </p>
    </div>
  )
}

export default Bio
