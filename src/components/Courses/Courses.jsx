import data from "./data.json";

export const Courses = () => {
  const courses = data.map((item) => {
    return (
      <li key={item.id} aria-label={`Course-${item.id}`}>
        <img src={item.image} alt="" role="presentation"></img>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <a href="#course-list-section">Get started</a>
      </li>
    );
  });

  return (
    <section>
      <h2>Check out our most popular courses!</h2>
      <ul>{courses}</ul>
    </section>
  );
};
