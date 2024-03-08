import { createContext, useContext, useState } from "react";
import styled from "styled-components";

const CarouselContext = createContext();

const SttyledElement = styled.div`
  transition: transform var(--carousel-timing) linear;

  &.active {
    transform: scale(1.1);
  }
`;

const Button = styled.button`
  width: 100%;
  height: 100%;
  appearance: none;
  border: none;
  outline: none;
  color: inherit;
  background-color: transparent;
`;

const Span = styled.span`
  width: ${(props) => (props.size ? `${props.size}rem` : "1rem")};
  height: ${(props) => (props.size ? `${props.size}rem` : "1rem")};
  border-radius: 50%;
  background-color: var(--color-off-white);
  transition: background-color var(--carousel-timing) ease,
    height var(--carousel-timing) ease, width var(--carousel-timing) ease;

  &.active {
    width: ${(props) => (props.size ? `${props.size - 0.4}rem` : ".8rem")};
    height: ${(props) => (props.size ? `${props.size - 0.4}rem` : ".8rem")};
    background-color: var(--color-purple-200);
  }
`;

function Carousel({ elements, children }) {
  const [active, setActive] = useState(1);
  const [position, setPosition] = useState(1);

  function goToElement(index) {
    setPosition(index);
    setActive(index);
  }

  return (
    <CarouselContext.Provider
      value={{
        elements,
        active,
        setActive,
        position,
        goToElement,
      }}
    >
      {children}
    </CarouselContext.Provider>
  );
}

function Elements({ card: Card }) {
  const { elements, active, position, goToElement } =
    useContext(CarouselContext);

  return elements.map((element, index) => (
    <SttyledElement
      key={index}
      index={index}
      active={active}
      className={active === index ? "active" : ""}
      style={{
        order: (index + position - active + elements.length) % elements.length,
      }}
      onClick={() => goToElement(index)}
    >
      <Card value={element} />
    </SttyledElement>
  ));
}

function NextElement({ icon: Icon }) {
  const { setActive, elements } = useContext(CarouselContext);

  function next() {
    setActive((active) => (active + 1) % elements.length);
  }

  return <Button onClick={next}>{Icon}</Button>;
}

function PrevElement({ icon: Icon }) {
  const { setActive, elements } = useContext(CarouselContext);

  function prev() {
    setActive((active) => (active === 0 ? elements.length - 1 : active - 1));
  }

  return <Button onClick={prev}>{Icon}</Button>;
}

function Buttons({ size }) {
  const { elements, active, setActive } = useContext(CarouselContext);

  return (
    <>
      {Array.from({ length: elements.length }, (_, index) => (
        <Span
          className={active === index ? "active" : ""}
          size={size}
          key={index}
          onClick={() => setActive(index)}
        />
      ))}
    </>
  );
}

Carousel.Elements = Elements;
Carousel.Buttons = Buttons;
Carousel.NextElement = NextElement;
Carousel.PrevElement = PrevElement;

export default Carousel;
