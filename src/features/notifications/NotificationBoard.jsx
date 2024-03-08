import { HiOutlineXMark } from "react-icons/hi2";
import styled from "styled-components";

const Board = styled.div`
  background-image: linear-gradient(
    to bottom,
    var(--color-white) 60%,
    var(--color-pink-400)
  );
  border-radius: var(--border-radius-sm);
`;

const Head = styled.div`
  border-bottom: 0.5px solid var(--color-ash-200);
  transition: color var(--general-timing) ease;

  & > svg:hover {
    color: var(--color-purple-200);
  }
`;

const Body = styled.ul`
  color: var(--color-ash-800);
  & > li {
    & span:first-child {
      color: var(--color-ash-900);
    }

    &:not(:last-child) {
      border-bottom: 1px solid var(--color-ash-100);
    }

    &:hover {
      background-color: var(--color-pink-200);
    }
  }
`;

const ListItem = styled.li`
  /* background-color: ${({ read }) =>
    read ? "" : "var(--color-pink-400)"}; */
`;

const notifications = [
  {
    title: "New Course Release",
    description: "Learn React from scratch",
    date: "2021-09-15",
  },
  {
    title: "New Course Release",
    description: "Learn React from scratch",
    date: "2021-09-15",
  },
];

function NotificationBoard({ onClick, isClicked }) {
  return (
    <Board
      className={`${
        isClicked ? "block" : "hidden"
      } absolute right-0 pt-2 md:w-[35rem]`}
    >
      <Head className="flex justify-between items-center px-4 py-2">
        <div className=" font-medium text-[1.3rem]">Notification</div>
        <HiOutlineXMark onClick={() => onClick(false)} />
      </Head>
      <Body className="grid">
        {notifications.map((notification, index) => (
          <ListItem key={index} className="text-base md:px-4 md:py-2">
            <span className="flex flex-col md:gap-1 font-medium text-lg">
              {notification.title}
            </span>
            <span className="text-base">{notification.description}</span>
          </ListItem>
        ))}
      </Body>
    </Board>
  );
}

export default NotificationBoard;
