import "./App.css";
import GlobalStyle from "./component/styles/GlobalStyle";
import Home from "./pages/Home";
import About from "./pages/About";
// import Careers from "./pages/Careers";
// import Trips from "./pages/Trips";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about">
            <About />
          </Route>
          {/* <Route path="/">
            <Home />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
