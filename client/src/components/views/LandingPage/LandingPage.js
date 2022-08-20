import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Auth from '../../../hoc/auth';
import { useDispatch } from 'react-redux';
import { logout } from "../../../_actions/user_action";
import styled from 'styled-components';
import SideBar from '../SideBar/SideBar';

import HeroSection from '../HeroSection/HeroSection';
import InfoSection from '../InfoSection/InfoSection';
import Services from '../Sevices/Services';
import Footer from '../Footer/Footer';
import { homeObjOne, homeObjTwo, homeObjThree } from '../InfoSection/Data';

function LandingPage() {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const logOut = () => {
  //   dispatch(logout()).then((res) => {
  //     if (res.payload.isAuth === false) {
  //       alert("이미 로그아웃 상태입니다.!");
  //     } else {
  //       alert("로그아웃 성공");
  //       navigate("/");
  //     }
  //   });
  // };

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      <Services />
      <InfoSection {...homeObjThree}/>
      <Footer />
    </>
    
    // <div>
    //   LandingPage
    //   <button onClick={logOut}>로그아웃</button>
    // </div>
  );
}

export default LandingPage
