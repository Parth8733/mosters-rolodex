import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFeild: "",
    };
    console.log("CONSTRUCTOR");
  }
  componentDidMount() {
    console.log("COMPONENT DID MOUNT");
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log("resut", this.state);
          }
        )
      )
    );
  }
  onSearchChange = (event) => {
    const searchFeild = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchFeild };
    });
  };
  render() {
    console.log("RENDER");

    const { monsters, searchFeild } = this.state;
    const { onSearchChange } = this;
    const filteredMonster = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchFeild);
    });
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={onSearchChange}
        />
        {filteredMonster.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
