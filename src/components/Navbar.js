import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styled from "styled-components";
import LogoSrc from "../assets/logo.png";
import { Container } from "../globalStyles";
import { FaMagento } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons/lib";

const Nav = styled.div`
  background-color: black;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

const NavBarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  ${Container}
`;

const Logo = styled.img`
  width: 170px;
  height: 60px;
`;

const SecondaryButton = styled.button`
  background: transparent;
  border: 2px solid #e94a47;
  color: #e94a47;
  padding: 0.5em 2em;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 20px;
`;
const PrimaryButton = styled.button`
  background: #e94a47;
  border: 2px solid #e94a47;
  color: white;
  padding: 0.5em 2em;
  margin-left: auto;
  font-size: 20px;
`;

const NavLogo = styled(Link)`
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  color: black;
`;

const NavIcon = styled(FaMagento)`
  margin-right: 0.5rem;
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid #4b59f7;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <IconContext.Provider value={{ color: "black" }}>
        <Nav>
          <NavBarContainer>
            <NavLogo to="/">
              <NavIcon />
              Mi-temps
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick}>
              <NavItem>
                <NavLink to="/">Home</NavLink>
              </NavItem>
            </NavMenu>
          </NavBarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
