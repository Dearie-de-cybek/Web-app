import { Link } from "react-router-dom";
import styled from "styled-components";

const ForgotPassword = styled(Link)`
  &:link {
    font-size: 1.4rem;
    color: var(--color-ash-500);
    text-decoration: none;
    margin-top: 0.5rem;
    transition: color 0.2s ease;

    &:hover {
      color: var(--color-ash-800);
    }

    @media (max-width: 640px) {
      font-size: 1.2rem;
    }
  }

  &:visited {
    color: var(--color-ash-300);
  }
`;

export default ForgotPassword;
