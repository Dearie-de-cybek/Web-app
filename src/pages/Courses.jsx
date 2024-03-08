import { courses } from "../data/testsdata/courses";
import CoursesBoard from "../features/courses/CoursesBoard";

function Courses() {
  return (
    <div>
      <CoursesBoard courses={courses} />
    </div>
  );
}

export default Courses;
