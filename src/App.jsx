import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Babygal from "./pages/Babygal";
import Courses from "./pages/Courses";
import Services from "./pages/Services";
import Events from "./pages/Events";
import Organizations from "./pages/Organizations";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Aboutus from "./pages/Aboutus";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Babygal />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/services" element={<Services />} />
          <Route path="/events" element={<Events />} />
          <Route path="/organizations" element={<Organizations />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/aboutus" element={<Aboutus/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App
