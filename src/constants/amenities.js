import React from "react"
import { FaUtensils, FaBroom, FaWalking, FaAirFreshener, FaCut, FaUserNurse, FaCarSide, FaToilet } from "react-icons/fa"

export default [
  {
    id: 1, 
    icon: <FaUtensils className="amenities-icon" />,
    title: "Meals",
    text: "Three delicious and balanced meals a day, with dietary needs considered."
  },
  {
    id: 2,
    icon: <FaBroom className="amenities-icon" />,
    title: "Housekeeping",
    text: "Daily housekeeping and cleaning."
  },
  {
    id: 3,
    icon: <FaWalking className="amenities-icon" />,
    title: "Exercise",
    text: "Daily physical fitness activities and planned event coordination."
  },
  {
    id: 4, 
    icon: <FaAirFreshener className="amenities-icon" />,
    title: "Aromatherapy",
    text: "Aromatherapy is included throughout the facility to help promote mental alertness."
  },
  {
    id: 5, 
    icon: <FaCut className="amenities-icon" />,
    title: "Beautician Appointments",
    text: "Coordinated beautician appointments, which include haircuts, manicures, and pedicures."
  },
  {
    id: 6,
    icon: <FaUserNurse className="amenities-icon" />,
    title: "24/7 Onsite Staff",
    text: "Trained onsite staff 24 hours a day, 7 days a week."
  },
  {
    id: 7,
    icon: <FaCarSide className="amenities-icon" />,
    title: "Transportation",
    text: "Coordinated transportation for attending medical appointments"
  },
  {
    id: 8,
    icon: <FaToilet className="amenities-icon" />,
    title: "Customized Bathrooms",
    text: "Bathrooms designed for senior needs."
  }
]