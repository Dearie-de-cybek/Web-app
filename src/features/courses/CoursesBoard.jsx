import styled from "styled-components";
import FilterSearchDynamicComp from "../../ui/FilterSearchDynamicComp";
import CoursesCard from "./CourseCard";

const StyledCourses = styled.div`
  background-color: transparent;

  @media (max-width: 900px) {
    background-color: var(--color-white);
  }
`;

function CoursesBoard({ courses }) {
  return (
    <StyledCourses className="grid gap-8 p-[5%] md:p-0 md:gap-12">
      <FilterSearchDynamicComp
        filterField={"course"}
        options={[
          { value: "recently-accessed", label: "Recently Accessed" },
          { value: "in-progress", label: "In Progress" },
          { value: "completed", label: "Completed" },
          { value: "new-courses", label: "New Courses" },
          { value: "all-courses", label: "All Courses" },
        ]}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {courses.map((course) => (
          <CoursesCard course={course} key={course.id} />
        ))}
      </div>
    </StyledCourses>
  );
}

export default CoursesBoard;
