import styled from "styled-components";

const Line = styled.span`
  display: inline-block;
  width: 100%;
  padding: 0;
  margin: 0;
  transform-origin: center;
  background-color: var(--color-ash-300);
  height: ${(props) => `${props.height}px` || "2px"};
  transform: ${(props) => `scaleX(${props.scale})` || "scaleX(1)"};
`;

export default Line;
