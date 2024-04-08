import React, { useState, useEffect } from 'react';
import './HeroSection.css';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const navigate = useNavigate();
  const [role, setRole] = useState("Haseeb");

  const animationSteps = role.length;

  useEffect(() => {
    const roles = ["Full Stack Dev.", "UI/UX Designer", "Haseeb"];
    let roleIndex = 0;

    const intervalId = setInterval(() => {
      setRole(roles[roleIndex]);
      roleIndex = (roleIndex + 1) % roles.length;
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className='hero_section_div_main'>
      <div className="hero_section_info_div">
        <div className="i_am_uppper_div">
          Hi, I am
        </div>
        <div className="role_change_div" style={{ '--animation-steps': animationSteps }}>
          <p>
            {role}
          </p>
        </div>
        <div className="addtional_hero_section_div">
            Full-stack software developer create end-to-end solutions, from front-end interfaces to back-end server logics, mastering both client and server domains.
        </div>
        <div className="explore_link_hero_section">
            <button onClick={() => navigate('/about')}>
                Explore Now 
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16" style={{marginLeft: "1rem"}}>
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>
            </button>
        </div>
      </div>
      <div className="outer_most_image_div">
        <div className="image_div_custom">
          <div className="inner_image_div"></div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
