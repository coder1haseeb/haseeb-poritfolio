import React from 'react'
import "./Intro.css"
import { FaStackOverflow } from "react-icons/fa";

import StackImage from '../../../Assets/stackimage.png'

const Intro = () => {
  return (
    <div className="intro_section_about_page_main_div">
        <div className="left_side_text_about_intro">
            <div className="heading_about_me_intro">
                Full Stack Software Developer.
            </div>
            <div className="intro_text_div_about_page">
            Hello there! I am a passionate web developer with hands-on experience in crafting dynamic and responsive user interfaces using the power of <span className='cahnge_text_color_intro'>ReactJS, HTML, CSS, and JavaScript</span>. My journey in the world of web development extends to the robust and elegant backend framework, <span className='cahnge_text_color_intro'>Ruby on Rails</span>. With a keen eye for design and a love for clean, efficient code, I enjoy turning ideas into reality and creating seamless digital experiences. My goal is to contribute to innovative projects that not only meet the needs of users but also leave a lasting impression. Let's build something extraordinary together!
            </div>
        </div>
        <div className="right_side_image_div_about_intro">
          <FaStackOverflow />            
        </div>
    </div>
  )
}

export default Intro