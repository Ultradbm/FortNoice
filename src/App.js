/** @format */

import "./App.css";
import Nav from "./Nav";
import About from "./About";
import Shop from "./Shop";
import ItemDetail from "./ItemDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={ItemDetail} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1 className="page-title">Welcome</h1>
    <p className="lead">Check out the Shop!</p>
  </div>
);

export default App;
