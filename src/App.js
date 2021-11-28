import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import FormEmployer from "./pages/FormEmployer/FormEmployer";
function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/signup" exact element={<SignUp />} />
        <Route path="/FormEmployer" exact element={<FormEmployer />} />
      </Routes>
    </Router>
  );
}

export default App;
