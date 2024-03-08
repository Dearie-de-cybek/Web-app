import styled from "styled-components";

// centers sections
export const CenterSection = styled.div`
  margin: 0 auto;
  width: ${({ width }) => (width ? `${width}%` : "90%")};
`;
