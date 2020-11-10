import React from "react"
import Image from "./Image"
import Title from "./Title"
// import { Link } from "gatsby"

const About = () => {
  return <section className="about">
    <div className="section-center about-center">
      <article className="about-info">
        <Title title="Who We Are" />
        <p>JCP Cottage is a residential, non-medical care facility for the elderly. We bridge the gap between independent living and skilled nursing care. We also provide an environment in which residents can flourish in a small, protected community. While under our constant care and supervision, residents will enjoy a comfortable and healthy life.</p>
      </article>
      <Image imgsrc="about.jpg" className="about-img"/>
    </div>
  </section>
}

export default About;