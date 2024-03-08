import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

const Container = styled.form`
  font-weight: 500;
  color: var(--color-ash-700);
`;

const Input = styled.input`
  color: inherit;
  background-color: var(--color-pink-100);
  border-radius: var(--border-radius-md);

  &::-webkit-input-placeholder {
    color: var(--color-ash-500);
  }
`;

function Search() {
  const { register, handleSubmit } = useForm();
  const [searchParams, setSearchParams] = useSearchParams();

  function onSubmitQuery(data) {
    const formerQuery = searchParams.get(Object.keys(data)[0]);
    if (formerQuery && formerQuery === data.search) return;

    searchParams.set(Object.keys(data)[0], data.search);
    setSearchParams(searchParams);
    console.log(data);
  }

  return (
    <Container className="relative" onSubmit={handleSubmit(onSubmitQuery)}>
      <span className="absolute top-2/4 left-8 -translate-y-1/2 text-3xl sm:text-4xl">
        <HiOutlineMagnifyingGlass />
      </span>
      <Input
        className="px-20 py-4 sm:px-24 sm:py-6 w-full"
        type="text"
        id="search"
        placeholder="Search"
        {...register("search")}
      />
    </Container>
  );
}

export default Search;
