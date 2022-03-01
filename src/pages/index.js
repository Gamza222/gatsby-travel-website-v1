import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/HeroSection"
import Images from "../components/allimages"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroSection />
    <Images />
  </Layout>
)

export default IndexPage
