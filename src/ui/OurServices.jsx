import styled from "styled-components";
import OurServicesCard from "../components/cards/OurServicesCard";
import { CenterSection } from "../components/CenterSection";
import Text from "../components/Text";

const ServicesContainer = styled.section`
  margin: 10rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  gap: 6rem;

  @media (max-width: 768px) {
    margin: 6rem 0;
    gap: 5rem;
  }
`;

const StyledServices = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
  gap: 5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    gap: 3rem;
  }
`;

function OurServices({ services }) {
  return (
    <ServicesContainer id="programs">
      <Text size="bolder">Our Service</Text>
      <CenterSection>
        <StyledServices>
          {services.map((service) => (
            <OurServicesCard
              key={service.id}
              text={service.text}
              heading={service.heading}
              mobilePosition={service.mobilePosition}
            />
          ))}
        </StyledServices>
      </CenterSection>
    </ServicesContainer>
  );
}

export default OurServices;
