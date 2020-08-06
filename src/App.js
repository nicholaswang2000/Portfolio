import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Memes from "./components/Memes";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/ios" component={Home} />
        <Route path="/javascript" component={Home} />
        <Route path="/other" component={Home} />
        <Route path="/memes" component={Memes} />
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
