import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar/Index";
function App() {
  return (
    <Router>
      <NavBar />
    </Router>
  );
}

export default App;
