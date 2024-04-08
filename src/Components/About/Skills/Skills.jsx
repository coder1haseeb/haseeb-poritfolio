import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import './Skills.css';

import { EffectCube, Pagination } from 'swiper/modules';
import { HiCubeTransparent } from "react-icons/hi";
import {IoLogoHtml5} from 'react-icons/io'
import {FaCss3Alt} from 'react-icons/fa'
import {TbBrandJavascript} from 'react-icons/tb'
import {BiLogoReact} from 'react-icons/bi'
import {DiRuby} from 'react-icons/di'
import {SiRubyonrails , SiMysql} from 'react-icons/si'

export default function Skills() {
  return (
    <div className='skills_main_div_page'>
      <div className="lower_skills_info_div">
        <div className='left_side_skills_data'>
          <div className="top_area_of_skills_heading">
            Skills
          </div>
          <div style={{textAlign : "justify"}}>
            With a strong foundation in web development, I specialize in crafting visually appealing and interactive user interfaces. My expertise extends to building efficient and responsive front-end experiences. On the server side, I excel in creating robust and scalable solutions. Complementing these skills, I am adept at seamless data management and retrieval. My commitment is to deliver high-quality and innovative web solutions.          
          </div>
          <div className="skills_points_section_about_page">
            <p>
              <span><HiCubeTransparent /></span>Proficient in HTML, CSS, and JavaScript
            </p>
            <p>
              <span><HiCubeTransparent /></span>Experienced in React JS for front-end development
            </p>
            <p>
              <span><HiCubeTransparent /></span>Skilled in Ruby on Rails for server-side solutions
            </p>
            <p>
              <span><HiCubeTransparent /></span>Adept at MySQL for database management
            </p>
          </div>
        </div>
        <div className="right_side_skills_cube_slides">
          <Swiper
            effect={'cube'}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            pagination={true}
            modules={[EffectCube, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className='sinlge_clas_for_swiper'>
              <div className="text_for_slide_">
                HTML 5
              </div>
              <div className="logo_for_single_slide_div">
              <IoLogoHtml5 className='logo_for_single_slide'/>
              </div>
            </SwiperSlide>
            <SwiperSlide className='sinlge_clas_for_swiper'>
              <div className="text_for_slide_">
                CSS 3
              </div>
              <div className='logo_for_single_slide_div'>
                <FaCss3Alt className='logo_for_single_slide'/>
              </div>
            </SwiperSlide>
            <SwiperSlide className='sinlge_clas_for_swiper'>
              <div className="text_for_slide_">
                Java Script
              </div>
              <div className='logo_for_single_slide_div'>
                <TbBrandJavascript className='logo_for_single_slide'/>
              </div>
            </SwiperSlide>
            <SwiperSlide className='sinlge_clas_for_swiper'>
              <div className="text_for_slide_">
                React JS
              </div>
              <div className='logo_for_single_slide_div'>
                <BiLogoReact className='logo_for_single_slide'/>
              </div>
            </SwiperSlide>
            <SwiperSlide className='sinlge_clas_for_swiper'>
              <div className="text_for_slide_">
                Ruby
              </div>
              <div className='logo_for_single_slide_div'>
                <DiRuby className='logo_for_single_slide'/>
              </div>
            </SwiperSlide>
            <SwiperSlide className='sinlge_clas_for_swiper'>
              <div className="text_for_slide_">
                Ruby on Rails
              </div>
              <div className='logo_for_single_slide_div'>
                <SiRubyonrails className='logo_for_single_slide'/>
              </div>
            </SwiperSlide>
            <SwiperSlide className='sinlge_clas_for_swiper'>
              <div className="text_for_slide_">
                My SQL
              </div>
              <div className='logo_for_single_slide_div'>
                <SiMysql className='logo_for_single_slide'/>
              </div>
            </SwiperSlide>
            </Swiper>
        </div>
      </div>
    </div>
  );
}