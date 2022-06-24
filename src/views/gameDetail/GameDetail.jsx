import React, { useContext } from "react";
import "./GameDetail.scss";
import { ContextApp } from "../../context/ContextApp";
import { Link, useNavigate, useParams } from "react-router-dom";

const GameDetail = () => {
  const { games, genres, setPageLoaded } = useContext(ContextApp);
  const params = useParams();

  const game = games.find((i) => i.id == params.id);
  const {
    id,
    title,
    img_card,
    description,
    genre_id,
    price,
    discount,
    xbox,
    pc,
    playstation,
  } = game;
  const genreName = genres.find((genre) => genre.id === genre_id);

  const navigate = useNavigate();

  function deleteGame(e) {
    e.preventDefault();
    fetch(`http://localhost:3030/api/products/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
    setPageLoaded(false)
    navigate("/games");
  }

  return (
    <section className="gameDetail">
      <h1>Administrador de juegos</h1>
      <h4>Informacion de: {title}</h4>
      <article className="gameDetailInfo">
        <img src={`../../../images/products/${img_card}`} alt={title} />
        <div>
          <h2>{title}</h2>
          <h4>{genreName?.title}</h4>
          <p className="txtGame">{description}</p>
          <h3>
            {price === 0 ? "Free to play" : `Precio: $${price.toFixed(3)}`}
          </h3>
          <h5>
            {discount === 0
              ? "Sin descuento"
              : `Descuento: ${discount}% Precio final: ${(
                  price -
                  price * (discount / 100)
                ).toFixed(3)}`}
          </h5>
          {xbox === 1 && <p>Xbox</p>}
          {pc === 1 && <p>Pc</p>}
          {playstation === 1 && <p>PlayStation</p>}
          <button type="submmit" onClick={(e) => deleteGame(e)}>
            eliminar juego
          </button>
          <Link to={`/gameEdit/${id}`}>editar juego</Link>
        </div>
      </article>
    </section>
  );
};

export default GameDetail;
