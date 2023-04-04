import { ChangeEvent, useEffect, useState, useCallback } from 'react';

import { getData } from './utils/fetchData';

import CardList from './components/card-list/CardList';
import SearchBox from './components/search-box/SearchBox';

import './App.css';

export type Monster = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState<Monster[]>([]);

  const updateSearchField = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchField(event.target.value.toLowerCase());
  };
  const fetchMonsters = useCallback(async () => {
    const data = await getData<Monster[]>(
      'https://jsonplaceholder.typicode.com/users'
    );
    setMonsters(data);
  }, []);

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  useEffect(() => {
    fetchMonsters();
  }, [fetchMonsters]);

  return (
    <div className="App">
      <h1 className="app-title">Cats Rolodex</h1>
      <SearchBox
        setSearchField={updateSearchField}
        className="search-box"
        placeholder="search monsters"
      />
      <CardList filteredMonsters={filteredMonsters} />
    </div>
  );
};

export default App;
