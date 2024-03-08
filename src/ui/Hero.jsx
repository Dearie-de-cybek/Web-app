import styled from "styled-components";
import Navigation from "./Navigation";
import Button from "../components/buttons/Button";
import Text from "../components/Text";
import { CenterSection } from "../components/CenterSection";
import { useEffect, useState } from "react";

const StyledHeader = styled.header`
  height: 80rem;
  min-height: 90vh;
  overflow-x: hidden;
  background: linear-gradient(
    125deg,
    var(--color-purple-600) 55%,
    var(--color-purple-500) 90%
  );
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
  align-items: center;
  padding-top: 15rem;
  gap: 10rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(50%, 1fr));
    gap: 3rem;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;
`;

const Rings = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    align-self: flex-end;
  }
`;

const Circle = styled.div`
  grid-column: 2 / -1;

  width: 23.2rem;
  height: 23.2rem;
  border-radius: 50%;
  background: var(--circle-bg);
  box-shadow: var(--circle-shadow);
  display: ${(props) => (props.type === "mobile" ? "none" : "")};
  animation: ${(props) => props.animate && props.animate}
    var(--animation-2-linear);

  @media (max-width: 768px) {
    display: ${(props) => (props.type === "mobile" ? "block" : "none")};
    width: 8.8rem;
    height: 8.8rem;
    grid-column: 1 / 2;
    animation: ${(props) => props.animate} var(--animation-2-linear);
  }
`;

const Donut = styled.div`
  width: 23.2rem;
  height: 23.2rem;
  border-radius: 50%;
  position: relative;
  background: var(--circle-bg);
  box-shadow: var(--circle-shadow);
  animation: ${(props) => props.animate && props.animate}
    var(--animation-2-linear);

  @media (max-width: 768px) {
    width: 12rem;
    height: 12rem;
    grid-column: 2 / -1;
    transform: translateX(60%);
    animation: ${(props) => props.animate} var(--animation-2-linear);
  }

  &::before {
    content: "";
    width: 9.26rem;
    height: 9.26rem;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--circle-bg-sm);
    box-shadow: var(--circle-shadow-sm);

    @media (max-width: 768px) {
      width: 4.8rem;
      height: 4.8rem;
      background: var(--color-purple-500);
      box-shadow: none;
    }
  }
`;

function Hero() {
  const [isJiggling, setIsJiggling] = useState(false);

  const jiggle = isJiggling ? "jiggle" : "";
  const reverseJiggle = isJiggling ? "reverseJiggle" : "";

  useEffect(() => {
    setIsJiggling(true);

    const timeoutId = setTimeout(() => {
      setIsJiggling(() => false);
    }, 2010);

    // cleanup function
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <StyledHeader id="home">
      <Navigation />
      <CenterSection>
        <Row>
          <Circle type="mobile" animate={jiggle} />
          <Column>
            <Text size="boldest">Your Blockchain Encyclopedia</Text>
            <Text size="medium">
              Welcome to Voux, the ultimate destination for acquiring the vital
              knowledge in web3 and blockchain technology
            </Text>
            <Button size="larger">Explore Voux</Button>
          </Column>
          <Column>
            <Rings
              onMouseEnter={() => setIsJiggling(true)}
              onMouseLeave={() => setIsJiggling(false)}
            >
              <Circle animate={jiggle} />
              <Donut animate={reverseJiggle} />
            </Rings>
          </Column>
        </Row>
      </CenterSection>
    </StyledHeader>
  );
}

export default Hero;
