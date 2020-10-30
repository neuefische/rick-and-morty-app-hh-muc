import { useEffect, useState } from "react";
import Character from "./Character";
import getCharacters from "./services/getCharacters";

function App() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    getCharacters()
    .then(data => setCharacters(data.results))
    .catch(error => console.log(error))
  }, [])

  return (
    <div className="App">
      {characters.map(({id, name, image}) =>
      <Character key={id} name={name} imgUrl={image} />)}
    </div>
  );
}

export default App;
