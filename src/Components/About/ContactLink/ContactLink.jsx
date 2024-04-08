import React from 'react'
import "./ContactLink.css"

import {FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin,} from 'react-icons/fa'

const ContactLink = () => {

  const socialDataLinks = [
    {
      id : 1,
      name : "Whatsapp",
      link : "link goes here"
    },
    {
      id : 2,
      name : "FaceBook",
      link : "link goes here"
    },
    {
      id : 3,
      name : "Instagram",
      link : "link goes here"
    },
    {
      id : 4,
      name : "LinkedIn",
      link : "link goes here"
    },
    {
      id : 5,
      name : "Upwork",
      link : "link goes here"
    },
  ]

  return (
    <div className="contact_link_main_div">
      <div className="inner_div_contact_link_">
        {
          socialDataLinks.map(socialLink =>{
            return(
              <div className="single_main_social_div">
                {socialLink.name}
                {socialLink.link}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ContactLink