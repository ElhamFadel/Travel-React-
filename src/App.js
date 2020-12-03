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
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/about" render={() => <About />} />
          <Route exact path="/trips" render={() => <Trips />} />
          <Route exact path="/contact" render={() => <Contact />} />
          <Route exact path="/careers" render={() => <Careers />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
