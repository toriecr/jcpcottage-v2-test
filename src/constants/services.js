import React from "react"
import { RiHandHeartFill } from "react-icons/ri"
import { GiCctvCamera } from "react-icons/gi"
import { FaBed } from "react-icons/fa"

export default [
  {
    id: 1, 
    icon: <RiHandHeartFill className="service-icon" />,
    title: "6 Private Bedrooms",
    text: "A caregiver is always on site 24/7.",
    classN: "service service-large",
    img: "bedroom.jpg"
  },
  {
    id: 2,
    icon: <GiCctvCamera className="service-icon" />,
    title: "Secured Facility",
    text: "This facility uses surveillance cameras to protect the safety of residents.",
    classN: "service service-small-1",
    img: "livingroom.jpg"
  },
  {
    id: 3,
    icon: <FaBed className="service-icon" />,
    title: "24/7 Onsite Care",
    text: "There are 6 private bedrooms to ensure the privacy and comfort of our residents.",
    classN: "service service-small-2",
    img: "backyard.jpg",
    classN2: "float-bottom"
  }
]