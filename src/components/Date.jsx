import styled from "styled-components";
import { getCurrentDate } from "../utils/helper";

const StyledDate = styled.div`
  color: var(--color-ash-700);
`;

function Date() {
  const { day, dayOfWeek, month, year } = getCurrentDate();

  return (
    <StyledDate className="sm:font-semibold text-xl lg:text-2xl">
      <span>{day} </span>
      <span>{month} </span>
      <span>{year}, </span>
      <span>{dayOfWeek}</span>
    </StyledDate>
  );
}

export default Date;
