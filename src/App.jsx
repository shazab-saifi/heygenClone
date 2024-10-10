import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Pricing from "./pages/Pricing"
import Signup from "./pages/Signup"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </Router>
  )
}

export default App
