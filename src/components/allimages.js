import * as React from "react"
import Layout from "./layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import './allimages.css'

const Images = () => {

  const data = useStaticQuery(graphql`query MyQuery {
  allFile(
    filter: {extension: {regex: "/(jpg)|(png)|(jpeg)/"}, name: {nin: ["background", "background2"]}}
  ) {
    edges {
      node {
        id
        base
        childImageSharp {
          gatsbyImageData(width: 600, height: 600, layout: CONSTRAINED)
        }
      }
    }
  }
}
`)

return (
  <div className="image-container">
    <h1>View our Destionations</h1>
    <div className="image-grid">
      {data.allFile.edges.map((image, key) => (
        <GatsbyImage
          image={image.node.childImageSharp.gatsbyImageData}
          key={key}
          className="image-item"
          alt={image.node.base.split('.')[0]} />
      ))}
    </div>
  </div>
);
}

export default Images