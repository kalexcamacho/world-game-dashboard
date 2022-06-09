import logo from "./logo.svg";
import "./App.scss";
import { ContextApp } from "./context/ContextApp";
import { useContext } from "react";

function App() {
  const { games } = useContext(ContextApp);
  return (
    <div className="App">
      {games.map((game, i) => {
        return <p key={i}>{game.title}</p>;
      })}
    </div>
  );
}

export default App;
