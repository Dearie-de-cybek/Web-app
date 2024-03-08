//  remember-me.js

import styled from "styled-components";

const Remember = styled.span`
  font-size: 1.4rem;
  color: var(--color-ash-500);

  @media (max-width: 640px) {
    font-size: 1.2rem;
  }
`;

function RememberMe({ register, checked }) {
  return (
    <div className="flex items-center gap-2 mt-2">
      <input
        type="checkbox"
        id="remember-me"
        checked={checked}
        {...register("remember_me")}
      />
      <Remember>Remember me</Remember>
    </div>
  );
}

export default RememberMe;
