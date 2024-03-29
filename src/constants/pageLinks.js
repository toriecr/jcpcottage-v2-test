import React from "react"
import { Link } from "gatsby"
const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  }, 
  {
    id: 2,
    text: "about",
    url: "/#about",
  },
  {
    id: 3,
    text: "amenities",
    url: "/#amenities",
  },
  {
    id: 4,
    text: "contact",
    url: "/#contact",
  }
]

const pageLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
});

export default ({ styleClass }) => {
  return (
    <ul className={`${styleClass ? styleClass : ""}`}>
      {pageLinks}
    </ul>
  )
}