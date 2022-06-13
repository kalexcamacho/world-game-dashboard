import "./App.scss";
import Games from "./views/games/Games";
import Users from "./views/Users/Users";
import PostAdmin from "./views/PostAdmin/PostAdmin";
import { Routes, Route } from "react-router-dom";
import Home from "./views/home/Home";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
        <NavBar />
        <main className="mainContainer">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/users" element={<Users />} />
          <Route path="/posts" element={<PostAdmin/>} />
      </Routes>
        </main>
    </div>
  );
}

export default App;
