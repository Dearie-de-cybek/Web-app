import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";
import { useSetParams } from "../hooks/useSetParams";

const FilterButton = styled.button`
  color: var(--color-ash-800);
  border: 1px solid var(--color-ash-300);

  ${(props) =>
    props.active &&
    css`
      color: var(--color-off-white);
      background-color: var(--color-purple-300);
    `}

  font-size: 1.6rem;
  font-weight: 500;
  border-radius: var(--border-radius-tiny);
  padding: 0.44rem 0.8rem;
  transition: all var(--filter-timing);

  &:hover:not(:disabled) {
    background-color: var(--color-purple-300);
    color: var(--color-off-white);
  }

  @media (max-width: 640px) {
    padding: 0.44rem 0.6rem;
    font-size: 1.4rem;
  }
`;

function Filter({ filterField, options }) {
  const [searchParams] = useSearchParams();
  const currentFilter =
    searchParams.get(filterField) ||
    localStorage.getItem(filterField) ||
    options.at(1).value;
  const { handleParams } = useSetParams();

  useEffect(() => {
    handleParams(filterField, currentFilter);
  }, []);

  function handleClick(value) {
    localStorage.setItem(filterField, value);
    handleParams(filterField, value);
  }

  return (
    <div className="flex gap-2 sm:gap-4 flex-wrap">
      {options.map((option) => (
        <FilterButton
          key={option.value}
          onClick={() => handleClick(option.value)}
          active={option.value === currentFilter}
          disabled={option.value === currentFilter}
        >
          {option.label}
        </FilterButton>
      ))}
    </div>
  );
}

export default Filter;
