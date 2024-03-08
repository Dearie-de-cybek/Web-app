import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  HiOutlineAcademicCap,
  // HiOutlineArrowPathRoundedSquare,
  // HiOutlineUserGroup,
  HiOutlineBookOpen,
  HiOutlineChatBubbleLeftEllipsis,
  HiOutlineArrowRightOnRectangle,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  // HiOutlineUsers,
} from "react-icons/hi2";
import Line from "../components/Line";

const NavContainer = styled.nav`
  @media (max-width: 640px) {
    display: flex;
    align-items: center;
    padding: 1rem 0.5rem;
    margin-top: 8rem;
    gap: 0.5rem;
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 640px) {
    overflow-x: scroll;
    flex-direction: row;
    gap: 0.5rem;
  }
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-ash-700);
    font-size: 1.6rem;
    font-weight: 600;
    padding: 1rem 2.2rem;
    transition: all 0.3s;
    white-space: nowrap;

    @media (max-width: 640px) {
      font-size: 1.4rem;
      padding: 0.8rem 1.6rem;
      gap: 0.8rem;
    }
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-purple-200);
    background-color: var(--color-pink-100);
    border-radius: var(--border-radius-sm);

    @media (max-width: 640px) {
      text-decoration: underline;
      text-underline-offset: 10px;
      background-color: transparent;
    }
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-ash-700);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-purple-200);
  }
`;

const Icons = styled.span`
  @media (max-width: 640px) {
    display: none;
  }
`;

function MainNav() {
  return (
    <NavContainer>
      <NavList>
        <li>
          <StyledNavLink to="/dashboard">
            <Icons>
              <HiOutlineHome />
            </Icons>
            <span>Home</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/courses">
            <Icons>
              <HiOutlineBookOpen />
            </Icons>
            Courses
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/chats">
            <Icons>
              <HiOutlineChatBubbleLeftEllipsis />
            </Icons>
            Chat
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/research">
            <Icons>
              <HiOutlineAcademicCap />
            </Icons>
            Research
          </StyledNavLink>
        </li>
        {/* COMING SOON... */}
        {/* <li>
          <StyledNavLink to="/group">
            <HiOutlineUserGroup />
            Group
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/collaborations">
            <HiOutlineUsers />
            Collaborations
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/livesessions">
            <HiOutlineArrowPathRoundedSquare />
            Live Sessions
          </StyledNavLink>
        </li> */}
        {/* ABOVE ☝️ REDACTED FOR MVP */}

        <li>
          <span className="hidden sm:block">
            <Line height={0.5} scale="1.32" />
          </span>
        </li>

        <li>
          <StyledNavLink to="/settings">
            <Icons>
              <HiOutlineCog6Tooth />
            </Icons>
            Settings
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/">
            <Icons>
              <HiOutlineArrowRightOnRectangle />
            </Icons>
            Log out
          </StyledNavLink>
        </li>
      </NavList>
    </NavContainer>
  );
}

export default MainNav;
