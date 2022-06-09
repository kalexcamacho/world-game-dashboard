import logo from "./logo.svg";
import "./App.scss";
import { ContextApp } from "./context/ContextApp";
import { useContext } from "react";
import Games from "./views/games/Games";

function App() {
  const { games } = useContext(ContextApp);
  return (
    <div className="App">
      <Games />
    </div>
  );
}

export default App;
