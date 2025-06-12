import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Babygal from "./pages/Babygal";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Babygal/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
