import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNavBar = styled.nav`
  background: white;
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  position: sticky;
  top: 0;
  align-items: center;
  padding: 2rem 0;
  padding-left: 20rem;
  gap: 10rem;
  z-index: 999;
`;

const NavigationLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 0 5rem;

  &:hover {
    color: #5cb9f0;
  }
`;

const Name = styled.span`
  color: black;
  font-weight: bold;
  font-size: 2rem;
`;

const Navbar = () => {
  return (
    <StyledNavBar>
      <Name>Colin Labelle</Name>
      <div>
        <NavigationLink to="/">Home</NavigationLink>
        <NavigationLink to="/about">About</NavigationLink>
        <NavigationLink to="/work">Work</NavigationLink>
        <NavigationLink to="/contact">Contact</NavigationLink>
      </div>
    </StyledNavBar>
  );
};

export default Navbar;
