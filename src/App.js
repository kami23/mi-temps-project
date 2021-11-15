import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";

import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Home />
    </Router>
  );
}

export default App;
