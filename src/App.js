import "./App.scss";
import { ContextApp } from "./context/ContextApp";
import { useContext } from "react";
import Games from "./views/games/Games";
import Users from "./views/Users/Users";
import GameDetail from "./views/gameDetail/GameDetail";
import AddGame from "./views/addGame/AddGame";
import PostAdmin from "./views/PostAdmin/PostAdmin";
import { Routes, Route } from "react-router-dom";
import Home from "./views/home/Home";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
        <NavBar />
        <main>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/users" element={<Users />} />
          <Route path="/posts" element={<PostAdmin/>} />
      </Routes>
        </main>
      {/* <Games />
      <Users />
      <AddGame />
      <PostAdmin/>
      <Home />
       */}
    </div>
  );
}

export default App;
