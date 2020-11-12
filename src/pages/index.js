import React from "react"
import Layout from "../components/Layout"
import About from "../components/About"
import Services from "../components/Services"
import Amenities from "../components/Amenities"

import { Parallax } from "react-parallax"

const image1 =
  "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";

const parallaxStyles = {
  height: 500,
  padding: "5rem 0"
};



export default () => {
  return (
    <Layout>
      <About />
      <Services />
      <Parallax bgImage={image1} blur={{ min: -1, max: 3 }}>
      <div>
        <div style={parallaxStyles}>
          <h2>Where joy, caring, and passion come together.</h2>
        </div>
      </div>
    </Parallax>
      <Amenities />
    </Layout>
  )
}
