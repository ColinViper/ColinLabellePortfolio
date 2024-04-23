import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNavBar = styled.nav`
  background: white;
  box-sizing: border-box;
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  top: 0;
  align-items: center;
  padding: 0 2rem;
  z-index: 999;

  @media screen and (max-width: 1000px) {
    padding: 1rem 0;
  }

  @media screen and (max-width: 600px) {
    padding: 0.5rem 0;
  }
`;

const NavigationLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 0 4rem;

  @media screen and (max-width: 1000px) {
    font-size: 1rem;
    margin: 0 2rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 0.5rem;
    margin: 0 1rem;
  }

  &:hover {
    color: #5cb9f0;
  }
`;

const Name = styled.h2`
  font-weight: bold;
  font-size: 2rem;

  @media screen and (max-width: 1000px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 0.5rem;
  }
`;

const Navbar = () => {
  return (
    <StyledNavBar id="navbar">
      <Name>Colin Labelle</Name>
      <div>
        <NavigationLink style={{marginLeft: "0"}} to="/">Home</NavigationLink>
        <NavigationLink to="/about">About</NavigationLink>
        <NavigationLink to="/work">Work</NavigationLink>
        <NavigationLink style={{marginRight: "0"}} to="/contact">Contact</NavigationLink>
      </div>
    </StyledNavBar>
  );
};

export default Navbar;
