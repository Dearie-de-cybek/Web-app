import styled from "styled-components";
import { HiOutlineBell } from "react-icons/hi2";
import { useState } from "react";
import NotificationBoard from "./NotificationBoard";

const StyledNotification = styled.div`
  .bell > svg {
    color: var(--color-purple-200);
  }
`;

const Dot = styled.span`
  background-color: var(--color-red-900);
`;

function Notification({ notification = [] }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <StyledNotification
      className="relative"
      onMouseEnter={() => setIsClicked(true)}
      onMouseLeave={() => setIsClicked(false)}
    >
      <div>
        <Dot
          className="inline-block w-[0.8rem] h-[0.8rem] rounded-[50%] absolute right-[20%]"
          notification={notification.length}
        />
        <span className="bell text-[2.5rem] font-bold">
          <HiOutlineBell />
        </span>
      </div>
      <NotificationBoard isClicked={isClicked} onClick={setIsClicked} />
    </StyledNotification>
  );
}

export default Notification;
