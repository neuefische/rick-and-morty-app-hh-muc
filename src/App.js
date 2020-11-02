import { useEffect, useState } from "react";
import Character from "./Character";
import SearchForm from "./SearchForm";
import getCharacters from "./services/getCharacters";

function App() {
  const [characters, setCharacters] = useState([]);

  function fetchCharacters(query) {
    getCharacters(query)
      .then((data) => setCharacters(data.results))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getCharacters()
      .then((data) => setCharacters(data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <SearchForm onSendForm={fetchCharacters} />
      {characters?.map(({ id, name, image }) => (
        <Character key={id} name={name} imgUrl={image} />
      ))}
    </div>
  );
}

export default App;
