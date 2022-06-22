import React, { createContext, useEffect, useState } from "react";

export const ContextApp = createContext([]);
export const ContextAppProvider = (props) => {
  const [apiCall, setApiCall] = useState(0);
  const [games, setGames] = useState([]);
  const [users, setUsers] = useState([]);
  const [genres, setGenres] = useState([]);
  const [posts, setPosts] = useState([]);
  const [library, setLibrary] = useState([]);

  async function fetchGames() {
    const res = await fetch("http://localhost:3030/api/products", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setGames(data);
  }

  function fetchUsers() {
    fetch("http://localhost:3030/api/users", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }
  async function fetchGenres() {
    const res = await fetch("http://localhost:3030/api/products/genres", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setGenres(data);
  }

  async function fetchPosts() {
    const res = await fetch("http://localhost:3030/api/community", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setPosts(data);
  }
  async function fetchLibrary() {
    const res = await fetch("http://localhost:3030/api/users/library", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setLibrary(data);
  }

  useEffect(() => {
    fetchGames();
    fetchUsers();
    fetchGenres();
    fetchPosts();
    fetchLibrary();
  }, [apiCall]);

  return (
    <ContextApp.Provider
      value={{
        games,
        users,
        posts,
        genres,
        library,
        apiCall,
        setApiCall,
      }}
    >
      {props.children}
    </ContextApp.Provider>
  );
};
