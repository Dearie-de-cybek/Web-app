import styled from "styled-components";
import Logo from "../Logo";
import Text from "../Text";

const ImageBackground = styled.div`
  background-color: var(--color-pink-100);
`;

const FormContainer = styled.div`
  background-color: var(--color-white);

  @media (max-width: 640px) {
    background-color: var(--color-transparent);
  }
`;

function FormPage({ type, img, children }) {
  return (
    <div className="h-max md:h-screen grid grid-cols-auto md:grid-cols-2 items-center md:items-start">
      <ImageBackground className="grid p-10 md:p-20 h-[26rem] sm:h-full overflow-x-clip">
        <span>
          <Logo type={"light"} alt={"light"} />
        </span>
        <img
          className="justify-self-center translate-x-1/3 -translate-y-1/4 md:translate-x-0 md:translate-y-0"
          src={img}
          alt="biometrics logo"
        />
      </ImageBackground>
      <FormContainer className="p-10 md:p-20 grid md:justify-stretch gap-6 md:gap-12 w-full">
        <Text size="bold" className="z-10">
          {type}
        </Text>
        {children}
      </FormContainer>
    </div>
  );
}

export default FormPage;
