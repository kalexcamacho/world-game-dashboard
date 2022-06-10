import React, { useContext, useState } from "react";
import { ContextApp } from "../../context/ContextApp";
import CardGame from "../../components/cardGame/CardGame";


const Games = () => {

  const { games, genres, filterList, setFilterList } = useContext(ContextApp);

  const filterHandler = (e) => {
    let updateList = games
        .filter(value => {
            return e.target.value === 'todos'
                ? value
                : value.genre_id == e.target.value
        })
    setFilterList(updateList)
  }
  return (
    <section>
      <h1>Administrador de juegos</h1>
      <a href="">+ agregar juego nuevo</a>
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
      <div>
        <h5>Mostrando {filterList.length} resultados</h5>
        {filterList.map((game) => {
          return <CardGame key={game.id} {...game} />;
        })}
      </div>
    </section>
  );
};

export default Games;
