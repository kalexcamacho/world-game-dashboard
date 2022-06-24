import React, { useContext, useState, useEffect } from "react";
import "./Games.scss";
import { Link } from "react-router-dom";
import { ContextApp } from "../../context/ContextApp";
import CardGame from "../../components/cardGame/CardGame";

const Games = () => {
  const { games, genres } = useContext(ContextApp);
  const [filterList, setFilterList] = useState([]);
  useEffect(() => {
    setFilterList(games)
  },[games])

  const filterHandler = (e) => {
    let updateList = games.filter((value) => {
      return e.target.value === "todos"
        ? value
        : value.genre_id === Number(e.target.value);
    });
    setFilterList(updateList);
  };

  return (
    <section className="games">
      <h1>Administrador de juegos</h1>
      <div className="filter">
        <Link to="/addGame">+ agregar juego nuevo</Link>
        <select name="genre" onChange={filterHandler}>
          <option value="todos">Todos los generos</option>
          {genres.map((genre) => {
            return (
              <option value={genre.id} key={genre.id}>
                {genre.title}
              </option>
            );
          })}
        </select>
      </div>
      <h5>Mostrando {filterList.length} resultados</h5>
      <div className="listContainer">
        {filterList.map((game) => {
          return (
            <Link key={game.id} to={`/gameDetail/${game.id}`}>
              <CardGame {...game} />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Games;
