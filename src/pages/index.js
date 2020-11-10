import React from "react"
import Layout from "../components/Layout"
import About from "../components/About"
import Services from "../components/Services"
import Amenities from "../components/Amenities"

export default () => {
  return (
    <Layout>
      <About />
      <Services />
      <Amenities />
    </Layout>
  )
}
