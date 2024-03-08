import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import vouxPurpleLogo from "../assets/logos/voux-purple-logo.svg";
import vouxLightLogo from "../assets/logos/voux-light-logo.svg";

// Dynamic and resuable logo component
const StyledLogo = styled.img`
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  ${(props) =>
    props.type === "purple" &&
    css`
      content: url(${vouxPurpleLogo});
    `}

  /* this will take white logo component later on */
  ${(props) =>
    props.type === "light" &&
    css`
      content: url(${vouxLightLogo});
    `}

     /* this will take dark logo component later on */
  ${(props) =>
    props.type === "dark" &&
    css`
      content: url(${vouxPurpleLogo});
    `}

    ${(props) => (props.alt = props.type)}
`;

function Logo({ type, alt }) {
  return (
    <Link to="/">
      <StyledLogo type={type} alt={alt} className=" w-48 sm:w-max" />
    </Link>
  );
}

// set default props on the logo component
Logo.defaultProps = {
  alt: "purple",
  type: "purple",
};

export default Logo;
