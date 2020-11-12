import React from "react"
import Title from "./Title"
import services from "../constants/services"
import Image from "./Image"

// const Services = () => {
//   return <section id="services" className="section">
//     <Title title="JCP Cottage provides care in an intimate family setting." />
//     <div className="underline"></div>
//     <div className="section-center services-center">
//       {services.map(service => {
//         const { id, icon, title, text } = service;
//         return (
//           <article key={id} className="service">
//             {icon}
//             <h4>{title}</h4>
//             <p>{text}</p>
//           </article>
//         )
//       })}
//     </div>
//   </section>
// }

const Services = () => {
  return <section id="services" className="section">
    <Title title="JCP Cottage provides care in an intimate family setting." />
    <div className="underline"></div>
    {/* Containing div: */}
    <div className="section-center services-center"> 
     {services.map(service => {
       const { id, icon, title, text, classN, img, classN2 } = service;
       return (
         <article key={id} className={classN}>
           <Image imgsrc={img} className={classN2} />
           {/* {icon} */}
           {/* <h4 className="bottom">{title}</h4> */}
           {/* <p>{text}</p> */}
         </article>
       )
     })}
    </div>
  </section>
}

export default Services;