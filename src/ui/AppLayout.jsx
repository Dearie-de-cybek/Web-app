import styled from "styled-components";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Search from "../components/Search";
import Date from "../components/Date";
import Notification from "../features/notifications/Notification";

const Main = styled.main`
  background-color: var(--color-pink-200);
  border-top-left-radius: var(--border-radius-xlg);
  border-bottom-left-radius: var(--border-radius-xlg);

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    appearance: none;
  }

  @media (max-width: 900px) {
    background-color: var(--color-pink-400);
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

const SearchBg = styled.div`
  @media (max-width: 900px) {
    background-color: var(--color-pink-200);
  }
`;

function AppLayout() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[auto,1fr,auto] grid-rows-1fr h-max md:h-screen">
      <Sidebar />
      <Main className="md:h-screen md:overflow-scroll md:py-8 md:px-8 lg:py-16 lg:pl-16">
        <div className="max-w-[120rem] m-auto flex flex-col md:gap-[3.2rem]">
          <SearchBg className="flex flex-col sm:flex-row sm:items-center gap-5">
            <span className="w-[90%] m-auto sm:m-0 sm:w-[35%] py-8 sm:py-0">
              <Search />
            </span>
            <div className="hidden sm:flex self-end ml-auto sm:self-center items-center gap-6">
              <Date />
              <Notification />
            </div>
          </SearchBg>
          <div className="m-auto w-full">
            <Outlet />
          </div>
        </div>
      </Main>
      <div id="courses-outline" className="h-full"></div>
    </div>
  );
}

export default AppLayout;
