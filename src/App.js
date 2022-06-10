import "./App.scss";
import { ContextApp } from "./context/ContextApp";
import { useContext } from "react";
import PostAdmin from "./views/PostAdmin/PostAdmin";

function App() {
  const { posts } = useContext(ContextApp);
  console.log(posts);
  return (
    <div className="App">
      <PostAdmin/>
    </div>
  );
}

export default App;
