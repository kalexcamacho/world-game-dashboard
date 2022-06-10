import logo from "./logo.svg";
import "./App.scss";
import { ContextApp } from "./context/ContextApp";
import { useContext } from "react";
import Games from "./views/games/Games";
import Users from "./views/Users/Users";

function App() {
  const { games } = useContext(ContextApp);
  return (
    <div className="App">
      <Games />
      <Users />
    </div>
  );
}

export default App;
