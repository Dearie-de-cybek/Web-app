import styled from "styled-components";
import Text from "../Text";

const StyledVPCard = styled.div`
  flex-shrink: 0;
  width: 49.3rem;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-radius: var(--border-radius-xlg);
  background-color: var(--color-purple-15);
  transition: transform 0.3s linear;

  @media (max-width: 768px) {
    width: 25rem;
    height: 40rem;
  }
`;

const Img = styled.img`
  background-size: 100%;
`;

const StyledTexts = styled.div`
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

function ValuePrepCard({ value }) {
  return (
    <StyledVPCard>
      <Img src={value.img} alt={value.heading} />
      <StyledTexts>
        <Text size="medium">{value.heading}</Text>
        <Text size="regular">{value.text}</Text>
      </StyledTexts>
    </StyledVPCard>
  );
}

export default ValuePrepCard;
