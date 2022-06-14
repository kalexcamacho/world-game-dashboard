import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { ContextApp } from "./context/ContextApp";
import NavBar from "./components/NavBar/NavBar";
import Games from "./views/games/Games";
import Users from "./views/Users/Users";
import PostAdmin from "./views/PostAdmin/PostAdmin";
import Home from "./views/home/Home";
import AddGame from "./views/addGame/AddGame";
import GameDetail from "./views/gameDetail/GameDetail";
import EditGame from "./views/editGame/EditGame";

function App() {
  const { games } = useContext(ContextApp);
  return (
    <div className="App">
      <NavBar />
      <main className="mainContainer">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/users" element={<Users />} />
          <Route path="/posts" element={<PostAdmin />} />
          <Route path="/addGame" element={<AddGame />} />
          {games.map((game) => {
            return (
              <Route
                path={`/gameDetail/${game.id}`}
                key={game.id}
                element={<GameDetail {...game} />}
              />
            );
          })}
          {games.map((game) => {
            return (
              <Route
                path={`/gameEdit/${game.id}`}
                key={game.id}
                element={<EditGame {...game} />}
              />
            );
          })}
        </Routes>
      </main>
    </div>
  );
}

export default App;
