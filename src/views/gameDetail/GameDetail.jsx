import React, { useContext } from "react";
import { ContextApp } from "../../context/ContextApp";

const GameDetail = ({
  title,
  img_card,
  genre_id,
  price,
  discount,
  xbox,
  pc,
  playstation,
}) => {
  const { genres } = useContext(ContextApp);
  const genreName = genres.filter((genre) => genre.id === genre_id);
  console.log(genreName);
  return (
    <section>
      <h1>Administrador de juegos</h1>
      <h4>Informacion de: {title}</h4>
      <article>
        <picture>
          <img
            src={`./images/products/${img_card}`}
            alt={title}
            style={{ width: "120px" }}
          />
        </picture>
        <div>
          <h2>{title}</h2>
          <h4>{genreName[0]?.title}</h4>
          <h3>{price}</h3>
          <h5>{discount}</h5>
          <p>{xbox === 1 && "Xbox"}</p>
          <p>{pc === 1 && "PC"}</p>
          <p>{playstation === 1 && "Play Station"}</p>
          <a href="">editar juego</a>
        </div>
      </article>
    </section>
  );
};

export default GameDetail;
