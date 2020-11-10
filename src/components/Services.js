import React from "react"
import Title from "./Title"
import services from "../constants/services"

const Services = () => {
  return <section id="services" className="section">
    <Title title="Everything you need to support you in your efforts as a family caregiver" />
    <div className="underline"></div>
    <div className="section-center services-center">
      {services.map(service => {
        const { id, icon, title, text } = service;
        return (
          <article key={id} className="service">
            {icon}
            <h4>{title}</h4>
            <p>{text}</p>
          </article>
        )
      })}
    </div>
  </section>
}

export default Services;