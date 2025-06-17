import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Babygal from "./pages/Babygal";
import Services from "./pages/Services";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Babygal/>}/>
          <Route path="/services" element={<Services/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
