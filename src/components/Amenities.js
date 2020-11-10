import React from "react"
import Title from "./Title"
import amenities from "../constants/amenities"

const Amenities = () => {
  return <section id="amenities" className="section">
    <Title title="Facility Amenities" />
    <div className="underline"></div>
    <div className="section-center amenities-center">
      {amenities.map(amenity => {
        const { id, icon, title, text } = amenity;
        return (
          <article key={id} className="amenity">
            {icon}
            <h4>{title}</h4>
            <p>{text}</p>
          </article>
        )
      })}
    </div>
  </section>
}

export default Amenities;