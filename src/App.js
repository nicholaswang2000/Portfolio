import React from "react";
import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} />
      <Route path="/ios" component={Home} />
      <Route path="/javascript" component={Home} />
      <Route path="/other" component={Home} />
      <Route path="/fun" component={Home} />
    </BrowserRouter>
  );
}

export default App;
