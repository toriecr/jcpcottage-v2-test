import React from "react"
import Image from "./components/Image"
import Title from "./components/Title"
import { Link } from "gatsby"

const About = () => {
  return <section>
    <div>
      <article>
        <Title title="Who We Are" />
        <p>JCP Cottage is a residential, non-medical care facility for the elderly. We bridge the gap between independent living and skilled nursing care. We also provide an environment in which residents can flourish in a small, protected community. While under our constant care and supervision, residents will enjoy a comfortable and healthy life.</p>
      </article>
      <Image imgsrc="yourimage.jpg" />
    </div>
  </section>
}

export default About;