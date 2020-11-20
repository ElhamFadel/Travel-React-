import "./App.css";
import GlobalStyle from "./component/styles/GlobalStyle";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          {/* <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route> */}
        </Switch>
      </Router>
      <span class="lnr lnr-mustache"></span>
    </div>
  );
}

export default App;
