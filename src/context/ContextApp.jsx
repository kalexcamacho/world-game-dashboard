import React, { createContext, useEffect, useState } from "react";

export const ContextApp = createContext([]);
export const ContextAppProvider = (props) => {
  const [games, setGames] = useState([]);
  const [users, setUsers] = useState([]);

  async function fetchGames() {
    const res = await fetch("http://localhost:3000/api/products", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      }
    });
    const data = await res.json();
    setGames(data);
  }

  function fetchUsers() {
    fetch("http://localhost:3000/api/users", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      }
    })
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchGames();
    fetchUsers();
  }, []);
  
  return (
    <ContextApp.Provider value={{ games, users }}>
      {props.children}
    </ContextApp.Provider>
  );
};