import React, { createContext, useEffect, useState } from "react";

export const ContextApp = createContext([]);
export const ContextAppProvider = (props) => {
  const [games, setGames] = useState([]);
  const [users, setUsers] = useState([]);
  const [genres, setGenres] = useState([]);
  const [filterList, setFilterList] = useState([])

  async function fetchGames() {
    const res = await fetch("http://localhost:3030/api/products", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setGames(data);
    setFilterList(data)
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

  useEffect(() => {
    fetchGames();
    fetchUsers();
    fetchGenres();
  }, []);

  return (
    <ContextApp.Provider value={{ games, users, genres, filterList, setFilterList }}>
      {props.children}
    </ContextApp.Provider>
  );
};
