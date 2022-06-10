import logo from "./logo.svg";
import "./App.scss";
import { ContextApp } from "./context/ContextApp";
import { useContext } from "react";
import Users from "./views/Users/Users";

function App() {
  const { games } = useContext(ContextApp);
  return (
    <div className="App">
      <Users />
    </div>
  );
}

export default App;
