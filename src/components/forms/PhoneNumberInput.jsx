import styled from "styled-components";
import countries from "../../data/testsdata/countries";
import Input from "./Input";

// Here is a reference snippet of code from vbs-frontend\src\components\forms\PhoneNumberInput.jsx:

const StyledSelect = styled.select`
  outline: none;
  color: var(--color-ash-500);
  padding: 1.2rem;
  background-color: var(--color-white);
  border: 1px solid var(--color-ash-300);
  border-radius: var(--border-radius-sm);

  @media (max-width: 640px) {
    padding: 0.8rem;
  }
`;

function PhoneNumberInput({ register }) {
  return (
    <div className="flex gap-4 w-full">
      <StyledSelect {...register("countryCode")} className="w-1/2 sm:w-1/4 ">
        {countries.map((country, index) => {
          return (
            <option
              key={`${country.country}-${index}`}
              value={country?.mobileCode}
              role="img"
              aria-label="flag"
            >
              {country?.emoji} +{country?.mobileCode}
            </option>
          );
        })}
      </StyledSelect>
      <Input
        type="number"
        id="phoneNumber"
        placeholder="8155391120"
        {...register("phoneNumber", {
          required: "This field is required",
          validate: (value) =>
            value.toString().length === 10 || "Invalid number",
        })}
        className="w-3/4"
      />
    </div>
  );
}

export default PhoneNumberInput;
