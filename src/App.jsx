// import StudentOld from "./components/StudentOld";
import Student from "./pages/Student";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./pages/User"

function App() {

  return (
    // <div>
    //   {/* <StudentOld /> */}
    //   {/* <Student /> */}
    //   <User/>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/login" element={<User />} />
        <Route path="/home" element={<Student />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
