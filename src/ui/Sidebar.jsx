import styled from "styled-components";
import MainNav from "./MainNav.jsx";
import Logo from "../components/Logo.jsx";

const StyledSidebar = styled.aside`
  background-color: var(--color-white);
`;

const LogoContainer = styled.div`
  @media (max-width: 640px) {
    background-color: var(--color-pink-200);
  }
`;

function Sidebar() {
  return (
    <StyledSidebar className="overflow-hidden p-0 md:px-[2.4rem] md:py-[3.2rem] row-span-full flex flex-col gap-32">
      <LogoContainer className="absolute sm:static p-8 sm:p-0 w-full">
        <Logo type={"light"} />
      </LogoContainer>

      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
