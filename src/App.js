import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "../src/pages/index";
import SignIn from "../src/pages/signIn";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        {/* <Route path="/signIn" component={SignIn} exact /> */}
      </Switch>
      <Home />
    </Router>
  );
}

export default App;
