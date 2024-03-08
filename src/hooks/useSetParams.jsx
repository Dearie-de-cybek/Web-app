import { useSearchParams } from "react-router-dom";

export function useSetParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleParams(field, value) {
    searchParams.set(field, value);
    if (searchParams.get("page")) searchParams.set("page", 1);
    setSearchParams(searchParams);
  }

  return { handleParams };
}
