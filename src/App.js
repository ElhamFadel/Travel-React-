import "./App.css";
import GlobalStyle from "./component/styles/GlobalStyle";
import Home from "./pages/Home";
import About from "./pages/About";
import Trips from "./pages/Trips";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/trips" component={Trips}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/careers" component={Careers}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
