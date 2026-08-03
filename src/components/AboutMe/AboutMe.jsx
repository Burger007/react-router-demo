import "./AboutMe.css"; // New import
import { Outlet, Link } from "react-router-dom"; // New import

function AboutMe() {
  // Add the classNames shown below so the styles are applied.
  // Add the links as shown as shown below.
  return (
    <div className="about">
      <ul className="links">
        <li>
          <Link to="my-story">My Story</Link>
        </li>
        <li>
          <Link to="hobbies">Hobbies</Link>
        </li>
        <li>
          <Link to="contact">My Contact Info</Link>
        </li>
      </ul>
      <p>&apos;m a simple p erson. I see Emojis, I write reviews.</p>
      <Outlet />
    </div>
  );
}

export default AboutMe;
