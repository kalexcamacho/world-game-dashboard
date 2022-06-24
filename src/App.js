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
  const { pageLoaded } = useContext(ContextApp);
  return (
    <div className="App">
      <NavBar />
      <main className="mainContainer">
        {pageLoaded ? (
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/games" element={<Games />} />
            <Route path="/users" element={<Users />} />
            <Route path="/posts" element={<PostAdmin />} />
            <Route path="/addGame" element={<AddGame />} />
            <Route path="/gameDetail/:id" element={<GameDetail />} />
            <Route path="/gameEdit/:id" element={<EditGame />} />
          </Routes>
        ) : (
          "cargando ..."
        )}
      </main>
    </div>
  );
}

export default App;
