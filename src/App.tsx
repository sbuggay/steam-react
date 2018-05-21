import * as React from "react";
import "./App.css";
import GameList from "./components/GameList";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <GameList/>
      </div>
    );
  }
}

export default App;
