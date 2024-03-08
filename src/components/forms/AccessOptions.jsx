import { Link } from "react-router-dom";
import styled from "styled-components";

const Access = styled.div`
  color: var(--color-gray-50);
`;

const StyledLink = styled(Link)`
  &:link {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--color-purple-200);
    text-decoration: none;
    transition: color 0.2s ease;
  }

  &:visited {
    color: var(--color-purple-300);
  }

  &:hover {
    color: var(--color-purple-400);
  }
`;

function AccessOptions({ type }) {
  if (type === "login")
    return (
      <Access className="flex items-center justify-center gap-2">
        <span className="mr-1">Don&apos;t have an account?</span>
        <StyledLink to={"/signup"}>Sign Up</StyledLink>
      </Access>
    );

  if (type === "signup")
    return (
      <Access className="flex items-center justify-center gap-2">
        <span className="mr-1">Already have an account?</span>
        <StyledLink to={"/login"}>Log in</StyledLink>
      </Access>
    );
}

export default AccessOptions;
