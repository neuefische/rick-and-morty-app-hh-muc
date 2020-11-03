import { useEffect, useState } from "react";
import Character from "./Character";
import getCharacters from "./services/getCharacters";
import { Switch, Route, Link } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters()
      .then((data) => setCharacters(data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route path="/characters">
          <Link to="/">Home</Link>
          {characters.map(({ id, name, image }) => (
            <Character key={id} name={name} imgUrl={image} />
          ))}
        </Route>
        <Route path="/">
          <h1>Welcome</h1>
          <Link to="/characters">Characters</Link>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
