import data from "./data.json";
import * as CourseStyles from "../../styles/Courses.style";

export const Courses = () => {
  const courses = data.map((item) => {
    return (
      <CourseStyles.Item
        $titleGridArea={item.title}
        key={item.id}
        aria-label={`Course-${item.id}`}
      >
        <CourseStyles.Image
          src={item.image}
          alt=""
          role="presentation"
          width="56"
          height="56"
        ></CourseStyles.Image>
        <CourseStyles.CourseInformation>
          <CourseStyles.CourseTitle>{item.title}</CourseStyles.CourseTitle>
          <CourseStyles.CourseDescription>
            {item.description}
          </CourseStyles.CourseDescription>
        </CourseStyles.CourseInformation>
        <CourseStyles.GetStartedLink href="#course-list-section">
          Get Started
        </CourseStyles.GetStartedLink>
      </CourseStyles.Item>
    );
  });

  return (
    <CourseStyles.CourseListSection id="course-list-section">
      <CourseStyles.Heading>
        Check out our most popular courses!
      </CourseStyles.Heading>
      {courses}
    </CourseStyles.CourseListSection>
  );
};
