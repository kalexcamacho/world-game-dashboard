import "./App.scss";
import { ContextApp } from "./context/ContextApp";
import { useContext } from "react";
import Games from "./views/games/Games";
import Users from "./views/Users/Users";
import GameDetail from "./views/gameDetail/GameDetail";
import AddGame from "./views/addGame/AddGame";
import PostAdmin from "./views/PostAdmin/PostAdmin";
//import Games from "./views/games/Games";
import Home from "./views/home/Home";

function App() {
  const { posts } = useContext(ContextApp);
  console.log(posts);
  return (
    <div className="App">
      <Games />
      <Users />
      {/* <GameDetail {...games[1]} /> */}
      <AddGame />
      <PostAdmin/>
      <Home />
      {/* <Games /> */}
    </div>
  );
}

export default App;
