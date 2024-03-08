import styled from "styled-components";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";

import Carousel from "../components/Carousel";
import Text from "../components/Text";
import { values } from "../data/values";
import ValuePrepCard from "../components/cards/ValuePrepCard";

const ValuePrep = styled.div`
  margin: 15rem 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 7rem;

  @media (max-width: 768px) {
    gap: 3rem;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: 2rem;
  gap: 5rem;
  width: 100%;
  margin-inline: auto;
  position: relative;

  @media (max-width: 768px) {
    gap: 2rem;
    overflow: hidden;
  }
`;

const StyledElements = styled.div`
  max-width: 100%;
  height: 75vh;
  display: flex;
  margin: 0 auto;
  overflow-x: auto;
  align-items: center;
  padding-inline: 2rem;
  perspective: 1000px;

  gap: 4rem;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    height: 47rem;
    gap: 3.5rem;
  }
`;

const StyledDots = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Button = styled.div`
  font-size: 4rem;
  width: 3.5rem;
  height: 8rem;
  display: grid;
  place-content: center;
  color: var(--color-purple-30);
  background-color: var(--color-ash-300);

  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;

  transition: color 0.3s ease, background-color 0.3s ease;

  &:hover {
    color: var(--color-purple-200);
    background-color: var(--color-ash-500);
  }

  @media (max-width: 640px) {
    font-size: 2rem;
    width: 2.5rem;
    height: 5rem;
  }
`;

function ValuePreposition() {
  return (
    <ValuePrep id="research">
      <Text size="bolder">Value Proposition</Text>

      <Column>
        <Carousel elements={values}>
          <Button className="right-8">
            <Carousel.NextElement icon={<HiOutlineChevronRight />} />
          </Button>

          <StyledElements>
            <Carousel.Elements card={ValuePrepCard} />
          </StyledElements>

          <StyledDots>
            <Carousel.Buttons />
          </StyledDots>

          <Button>
            <Carousel.PrevElement icon={<HiOutlineChevronLeft />} />
          </Button>
        </Carousel>
      </Column>
    </ValuePrep>
  );
}

export default ValuePreposition;
