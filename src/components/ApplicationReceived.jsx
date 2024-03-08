import Text from "./Text";

import confettiImg from "../assets/imgs/confetti.png";
import styled from "styled-components";
import Logo from "./Logo";

const StyledApplication = styled.div`
  background-color: var(--color-pink-100);

  .voux {
    font-weight: 600;
    color: var(--color-purple-200);
  }
`;

function ApplicationReceived() {
  return (
    <StyledApplication className="h-screen flex justify-center items-center">
      <div className="absolute left-12 top-12">
        <Logo type={"light"} />
      </div>
      <div className="text-center flex flex-col justify-center items-center gap-4 md:w-[60%]">
        <img src={confettiImg} alt="confetti" />
        <Text size="bold">Application Received</Text>
        <Text size="regular" className="md:w-[70%]">
          Thanks for applying to{" "}
          <span className="voux">Voux Business School</span>. Your Application
          will be reviewed and a mail 📩 will be sent to you.
        </Text>
      </div>
    </StyledApplication>
  );
}

export default ApplicationReceived;
