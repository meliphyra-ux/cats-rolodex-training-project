import { Component } from "react";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  async fetchMonsters() {
    return await (
      await fetch("https://jsonplaceholder.typicode.com/users")
    ).json();
  }
  setSearchField = (e) => {
    this.setState(() => {
      return {
        searchField: e.target.value,
      };
    });
  };
  componentDidMount() {
    this.fetchMonsters().then((res) => {
      this.setState(() => {
        return {
          monsters: [...res],
        };
      });
    });
  }
  render() {
    const { monsters, searchField } = this.state;
    const { setSearchField } = this;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1 className="app-title">Cats Rolodex</h1>
        <SearchBox
          setSearchField={setSearchField}
          className="search-box"
          placeholder="search monsters"
        />
        <CardList filteredMonsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
