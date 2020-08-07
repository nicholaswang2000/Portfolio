import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Memes from "./components/Memes";

function App() {
  return (
    <div>
      <Switch>
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
        <Route
          path="/4chainvisitgithub"
          component={() =>
            (window.location = "https://github.com/nicholaswang2000/4chain")
          }
        />
        <Route
          path="/pintosmoreinfo"
          component={() =>
            (window.location = "https://en.wikipedia.org/wiki/Pintos")
          }
        />
        <Route
          path="/data100github"
          component={() =>
            (window.location =
              "https://github.com/anitasxd/Data100FinalProject")
          }
        />
        <Route
          path="/huddlevisitgithub"
          component={() =>
            (window.location = "https://github.com/Miclin1024/Huddle")
          }
        />
        <Route
          path="/iclassgithub"
          component={() =>
            (window.location = "https://github.com/rbatra2000/iClass")
          }
        />
        <Route
          path="/iclassdemo"
          component={() =>
            (window.location = "https://www.youtube.com/watch?v=F64EUHZBgPw")
          }
        />
        <Route
          path="/shamegithub"
          component={() =>
            (window.location = "https://github.com/Olivia-li/hacknow")
          }
        />
        <Route
          path="/shamevisit"
          component={() =>
            (window.location = "https://devpost.com/software/the-shame-game")
          }
        />

        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
