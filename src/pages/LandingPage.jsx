import styled from "styled-components";

import { services } from "../data/services";

import Hero from "../ui/Hero";
import OurServices from "../ui/OurServices";
import ValuePreposition from "../ui/ValuePreposition";
import Footer from "../ui/Footer";

const StyledLandingPage = styled.div`
  color: var(--color-white);
  background-color: var(--color-purple-500);
`;

function LandingPage() {
  return (
    <StyledLandingPage>
      <Hero />
      <OurServices services={services} />
      <ValuePreposition />
      <Footer />
    </StyledLandingPage>
  );
}

export default LandingPage;
