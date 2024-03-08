import { useState } from "react";
import { Link } from "react-scroll";
import { Link as NavLink } from "react-router-dom";
import styled from "styled-components";
import { HiBars3, HiXMark } from "react-icons/hi2";
import Button from "../components/buttons/Button";
import Logo from "../components/Logo";

const NavContainer = styled.nav`
  width: 100%;
  height: 8rem;
  padding: 3rem 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-purple-600);
  gap: 10rem;
  position: fixed;
  z-index: 100;

  & svg {
    font-size: 4rem;
    fill: var(--color-purple-200);
    display: none;
  }

  @media (max-width: 768px) {
    & svg {
      display: inline-block;
    }
  }
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10rem;
  transition: opacity 0.5s ease, transform 0.5s ease, gap 0.5s ease,
    padding 0.5s ease;

  @media (max-width: 768px) {
    position: absolute;
    top: 8rem;
    left: 0;
    width: 100vw;
    height: auto;
    overflow: hidden;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    box-shadow: var(--shadow-sm);
    background-color: var(--color-purple-600);
    opacity: ${(props) => (props.menu === "true" ? "1" : "0")};
    transform: translateX(
      ${(props) => (props.menu === "true" ? "0" : "-100%")}
    );
  }
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledLink = styled(Link)`
  cursor: pointer;
  transform: translateX(50%);
  display: inline-block;
  padding: 0.5rem;
  text-decoration: none;
  color: var(--color-white);
  transition: all 0.15s linear;

  @media (max-width: 768px) {
    transform: translateX(0);
  }

  &::before {
    content: "";
    position: absolute;
    bottom: -5%;
    left: 50%;
    transform: translateX(-50%);
    width: 70%;
    height: 1px;
    background-color: transparent;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  &:hover,
  &:hover::before,
  &:active::before {
    color: var(--color-purple-200);
  }

  &:hover::before,
  &:active::before {
    background-color: var(--color-purple-200);
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpen = () => setIsMenuOpen(true);
  const handleClose = () => setIsMenuOpen(false);

  return (
    <NavContainer>
      <Logo />
      {!isMenuOpen ? (
        <HiBars3 onClick={handleOpen} />
      ) : (
        <HiXMark onClick={handleClose} />
      )}

      <MenuContainer menu={`${isMenuOpen}`}>
        <NavList>
          <li>
            <StyledLink
              to="home"
              smooth={true}
              duration={500}
              onClick={handleClose}
            >
              Home
            </StyledLink>
          </li>
          <li>
            <StyledLink
              offset={-50}
              to="programs"
              smooth={true}
              duration={500}
              onClick={handleClose}
            >
              Programs
            </StyledLink>
          </li>
          <li>
            <StyledLink
              to="research"
              smooth={true}
              duration={500}
              onClick={handleClose}
            >
              Research
            </StyledLink>
          </li>
        </NavList>
        <Buttons>
          <Button variation="light" size="medium">
            Apply
          </Button>
          <NavLink to="">
            <Button variation="primary" size="medium">
              Log in
            </Button>
          </NavLink>
        </Buttons>
      </MenuContainer>
    </NavContainer>
  );
}

export default Navigation;
