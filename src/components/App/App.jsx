import Header from "../Header/Header";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Reviews from "../Reviews/Reviews";
import AboutMe from "../AboutMe/AboutMe";
import AboutUs from "../AboutUs/AboutUs";
import Contact from "../AboutMe/Contact";
import Hobbies from "../AboutMe/Hobbies";
import MyStory from "../AboutMe/MyStory";
import SiteHistory from "../AboutUs/SiteHistory";
import SiteMission from "../AboutUs/SiteMission";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/about-me" element={<AboutMe />}>
          <Route path="contact" element={<Contact />} />
          <Route path="hobbies" element={<Hobbies />} />
          <Route path="my-story" element={<MyStory />} />
        </Route>
        <Route path="/about-us" element={<AboutUs />}>
          <Route path="history" element={<SiteHistory />} />
          <Route path="mission" element={<SiteMission />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
