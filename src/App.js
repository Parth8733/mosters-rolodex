import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

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
    const { monsters, searchFeild } = this.state;
    const { onSearchChange } = this;
    const filteredMonster = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchFeild);
    });
    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          className="monsert-search-box"
          placeholder="Search Monsters"
          onChangeHandler={onSearchChange}
        />
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;
