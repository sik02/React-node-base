import React, { useState } from "react";
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


function Navber() {
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

    return (
        <>
            {CheckLogin()}
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>ABC</NavLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
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