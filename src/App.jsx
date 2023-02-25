import { BrowserRouter, Route, Routes } from "react-router-dom"
import Course from "./pages/Course"
import Courses from "./pages/Courses"

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/courses" element={<Courses/>}/>
          <Route path="/courses/course" element={<Course/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
