import logo from "./logo.svg";
import "./App.scss";
import { ContextApp } from "./context/ContextApp";
import { useContext } from "react";
import Games from "./views/games/Games";
import Users from "./views/Users/Users";
import GameDetail from "./views/gameDetail/GameDetail";
import AddGame from "./views/addGame/AddGame";

function App() {
  const { games } = useContext(ContextApp);
  return (
    <div className="App">
      <Games />
      <Users />
      {/* <GameDetail {...games[1]} /> */}
      <AddGame />
    </div>
  );
}

export default App;
