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
        <Route
          path="/wargamevisitsite"
          component={() =>
            (window.location = "https://stormy-tor-76901.herokuapp.com/")
          }
        />
        <Route
          path="/wargamevisitgithub"
          component={() =>
            (window.location = "https://github.com/nicholaswang2000/wareact")
          }
        />
        <Route
          path="/communavisitsite"
          component={() =>
            (window.location =
              "https://chrome.google.com/webstore/detail/communa/ncjnflmnkajjclhboakfkjombmaighdi?hl=en")
          }
        />
        <Route
          path="/communavisitgithub"
          component={() =>
            (window.location = "https://github.com/nicholaswang2000/Communa")
          }
        />
        <Route
          path="/spongebobifyvisitsite"
          component={() =>
            (window.location =
              "https://chrome.google.com/webstore/detail/spongebobify/kjdlnkopbcdbnjcgipilmabafdoofiof?hl=en")
          }
        />
        <Route
          path="/spongebobifyvisitgithub"
          component={() =>
            (window.location =
              "https://github.com/nicholaswang2000/Spongebobify")
          }
        />
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
