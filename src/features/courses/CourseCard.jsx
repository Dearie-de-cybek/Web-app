import styled from "styled-components";
import StarRating from "../../components/StarRating";
import Tracker from "../../components/Tracker";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Card = styled.div`
  background-color: var(--color-white);
  border-radius: var(--border-radius-tiny);

  @media (max-width: 640px) {
    box-shadow: 0px 1.5px 1px 0px var(--color-ash-300);
  }
`;

const Title = styled.span`
  font-size: 1.6rem;
  font-weight: 600;
  align-self: flex-start;
  cursor: pointer;
  color: var(--color-ash-800);

  &:hover {
    text-decoration: underline;
  }
`;

const Tutor = styled.span`
  font-weight: 500;
  font-size: 1.3rem;
  color: var(--color-ash-600);
`;

const Label = styled.span`
  font-size: 1rem;
  font-weight: 600;
  align-self: flex-end;
  color: var(--color-ash-600);
`;

function CoursesCard({ course }) {
  const navigate = useNavigate();
  const [rating, setRating] = useState();

  useEffect(() => {
    course.rating = rating;
  }, [course, rating]);

  return (
    <Card className="w-full h-auto sm:w-[25rem] xl:w-[36rem] overflow-hidden">
      <span>
        <img
          className="w-full h-[18.8rem] xl:h-[20.8rem] object-cover"
          src={course.img}
          alt={course.alt}
        />
      </span>
      <div className="flex flex-col gap-2 p-4 sm:gap-4">
        <Title onClick={() => navigate(`/courses/${course.id}`)}>
          {course.title}
        </Title>
        <Tutor>{course.tutor}</Tutor>
        <Tracker currtrack={course.completionRate}>
          <div className="flex flex-col gap-2">
            <Tracker.Bar />
            <span className="text-[1.2rem] font-semibold">
              <Tracker.Progress />
            </span>
          </div>
        </Tracker>
        <div className="self-end flex flex-col">
          <StarRating size={15} onSetRating={setRating}>
            <StarRating.Stars />
          </StarRating>
          <Label>your rating</Label>
        </div>
      </div>
    </Card>
  );
}

export default CoursesCard;
