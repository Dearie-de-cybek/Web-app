import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { useSetParams } from "../hooks/useSetParams";
import { useEffect } from "react";

const StyledSelect = styled.select`
  font-size: 1.4rem;
  font-weight: 500;
  padding: 0.8rem 1.2rem;
  border: 1px solid
    ${(props) =>
      props.type === "white"
        ? "var(--color-white)"
        : "var(--color-purple-200)"};
  color: var(--color-purple-200);
  border-radius: var(--border-radius-sm);
  background-color: var(--color-transparent);
  transition: all var(--general-timing) ease;
`;

function Select({ options, value, onChange, filterField, ...props }) {
  const [searchParams] = useSearchParams();
  const { handleParams } = useSetParams();

  const currentFilter =
    filterField &&
    (searchParams.get(filterField) ||
      localStorage.getItem(filterField) ||
      options.at(1).value);

  useEffect(() => {
    if (filterField) handleParams(filterField, currentFilter);
  }, []);

  function handleChange(e) {
    const value = e.target.value;
    localStorage.setItem(filterField, value);
    handleParams(filterField, value);
  }

  return (
    <StyledSelect
      value={value}
      onChange={filterField ? handleChange : onChange}
      {...props}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
}

export default Select;
