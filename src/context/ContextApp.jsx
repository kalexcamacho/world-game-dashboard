import React, { createContext, useEffect, useState } from "react";

export const ContextApp = createContext([]);
export const ContextAppProvider = (props) => {
  const [games, setGames] = useState([]);
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  async function fetchGames() {
    const res = await fetch("http://localhost:3030/api/products", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      }
    });
    const data = await res.json();
    setGames(data);
  }

  function fetchUsers() {
    fetch("http://localhost:3030/api/users", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      }
    })
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.log(err))
  }

  async function fetchPosts() {
    const res = await fetch("http://localhost:3030/api/community", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      }
    });
    const data = await res.json();
    setPosts(data);
  }

  useEffect(() => {
    fetchGames();
    fetchUsers();
    fetchPosts();
  }, []);
  
  return (
    <ContextApp.Provider value={{ games, users, posts }}>
      {props.children}
    </ContextApp.Provider>
  );
};