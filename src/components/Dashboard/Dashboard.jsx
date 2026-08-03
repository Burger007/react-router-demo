import { Link } from "react-router-dom"; // New import
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Emoji Critic — All About Emojis</h1>
      <p>
        The #1 Destination for Emoji Reviews on the World Wide Web Since 2020!
      </p>
      {/* Add a Link tag that links to our /reviews route. */}
      <Link to="/reviews">Click here to see my latest reviews!</Link>
    </div>
  );
}

export default Dashboard;
