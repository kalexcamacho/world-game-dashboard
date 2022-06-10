import "./App.scss";
import { ContextApp } from "./context/ContextApp";
import { useContext } from "react";
//import Games from "./views/games/Games";
import Home from "./views/home/Home";

function App() {
  const { games } = useContext(ContextApp);
  return (
    <div className="App">
      <Home />
      {/* <Games /> */}
    </div>
  );
}

export default App;
