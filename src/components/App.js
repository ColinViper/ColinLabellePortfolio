import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import GlobalStyles from "./Globalstyles";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import About from "./About/About";
import Work from "./Work/Work";
import Contact from "./Contact/Contact";

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <ScrollToTop />
      <Switch>
          <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Switch>
    </Router>
  );
};

export default App;
