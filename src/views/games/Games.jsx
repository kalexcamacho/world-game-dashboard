import React, { useContext } from "react";
import { ContextApp } from "../../context/ContextApp";
const Games = () => {
  const { games, genres } = useContext(ContextApp);
    console.log(genres);
  return (
    <section>
      <h1>Administrador de juegos</h1>
      <a href="">+ agregar juego nuevo</a>
      <select name="genre"></select>
    </section>
  );
};

export default Games;
