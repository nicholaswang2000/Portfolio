import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Memes from "./components/Memes";
import iOS from "./components/iOS";
import Javascript from "./components/javascript";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/ios" component={iOS} />
        <Route path="/javascript" component={Javascript} />
        <Route path="/other" component={Home} />
        <Route path="/memes" component={Memes} />
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
