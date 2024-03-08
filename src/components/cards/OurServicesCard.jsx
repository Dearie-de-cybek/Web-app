import styled from "styled-components";
import Text from "../Text";
import { useInView } from "react-intersection-observer";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem;
  gap: 3rem;
  border: var(--border-sm);
  box-shadow: var(--card-purple-rubber-shadow);
  background: var(--card-purple-rubber-bg);
  border-radius: var(--border-radius-2xlg);
  filter: blur(0.5px);
  backdrop-filter: blur(1.2rem);
  transition: all 0.8s ease-in-out;

  @media (max-width: 768px) {
    border-radius: var(--border-radius-xlg);
    padding: 2rem;
    gap: 1.5rem;
    /* box-shadow: var(--shadow-sm); */
    transform: translate(
      ${(props) => (props.view === "true" ? "0, 0" : props.position)}
    );
  }
`;

function OurServicesCard({ heading, text, mobilePosition }) {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  return (
    <StyledCard ref={ref} position={mobilePosition} view={`${inView}`}>
      <Text size="bold">{heading}</Text>
      <Text size="semiMedium">{text}</Text>
    </StyledCard>
  );
}

export default OurServicesCard;
