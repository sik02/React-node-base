import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { logout, auth } from "../../../_actions/user_action";
import { FaBars } from "react-icons/fa"
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavItem,
    NavMenu,
    NavLinks,
    NavBtn,
    NavBtnLink,
} from "./NavBarElement";
import { IconContext} from 'react-icons/lib';

import { animateScroll as scroll } from 'react-scroll';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: low;
  justify-content: center;
  align-items: center;
  height: 81px;
  background-color: skyblue;
`

const HeaderLogo = styled.button`
  display: flex;
  justify-content: flex-start;
  color: black;
  background-color: transparent;
  border: none;
  font-size: 30px;
  margin: 15px 5px;
  margin-left: 50px;
  cursor: pointer;
  text-shadow: 1px 1px 1px #000;
`
const CenterContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`

const NavButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  background-color: transparent;
  border: none;
  width: 80px;
  height: 50px;
  font-size: 17px;
  font-weight : 700;
  margin-left: 15px;
  cursor: pointer;
`

const RightContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: auto;
  margin-right: 50px;
`


const Navber = ({ toggle }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [Login, setLogin] = useState(true);
    const onLogoClick = () => {
        navigate('/')
    }
    const onLoginClick = () => {
        navigate('/login')
    }
    const onRegisterClick = () => {
        navigate('/register')
    }

    const onLogoutClick = () => {
        dispatch(logout()).then((res) => {
            if (res.payload.isAuth === false) {
                alert("이미 로그아웃 상태입니다.!");
            } else {
                alert("로그아웃 성공");
                navigate("/");
            }
        });
    }

    const CheckLogin = () => {
        dispatch(auth()).then((res) => {
            if (res.payload.isAuth === false) {
                setLogin(false);
            } else {
                setLogin(true);
            }
        })
    }

    const [scrollNav, setScrollNav] = useState(false);
    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    },[]);

    return (
        <>
            {CheckLogin()}
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to='/' onClick={toggleHome}>Logo</NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks 
                                    to="about" 
                                    smooth={true} 
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                >About</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks 
                                    to="discover"
                                    smooth={true} 
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                >Discover</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks 
                                    to="services"
                                    smooth={true} 
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                >Services</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks 
                                    to="signup"
                                    smooth={true} 
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                >Sign up</NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink to="/login">Sign In</NavBtnLink>
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
            {/* <HeaderContainer>
                <HeaderLogo onClick={onLogoClick}>
                    Logo
                </HeaderLogo>
                <CenterContainer>
                    <NavButton>Nav</NavButton>
                    <NavButton>Nav</NavButton>
                </CenterContainer>
                <RightContainer>
                    {
                        Login
                        ?
                        <NavButton onClick={onLogoutClick}>Logout</NavButton>
                        :
                        <>
                            <NavButton onClick={onLoginClick}>Login</NavButton>
                            <NavButton onClick={onRegisterClick}>Register</NavButton>
                        </>
                    }
                </RightContainer>
            </HeaderContainer> */}
        </>

    )

}

export default Navber