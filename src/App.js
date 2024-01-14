import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        { name: "Linda", id: "mon1" },
        { name: "Edit", id: "mon2" },
        { name: "Judit", id: "mon3" },
        { name: "Krisztina", id: "mon4" },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return <div key={monster.id}>{monster.name}</div>;
        })}
      </div>
    );
  }
}

export default App;
