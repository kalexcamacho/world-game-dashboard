import React, { useContext, useEffect, useState } from "react";
import "./GameDetail.scss";
import { ContextApp } from "../../context/ContextApp";
import { Link, useNavigate, useParams } from "react-router-dom";

const GameDetail = () => {
  const { games, genres, setPageLoaded } = useContext(ContextApp);
  const [game, setGame] = useState({})
  const genreName = genres.find((genre) => genre.id === game.genre_id);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if(params.id < games.length + 1) {
      setGame(games.find((i) => i.id == params.id))
    } else {
      navigate("/games")
    }
  },[])
 

  function deleteGame(e) {
    e.preventDefault();
    fetch(`http://localhost:3030/api/products/delete/${game.id}`, {
      method: "DELETE",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
    setPageLoaded(false);
    navigate("/games");
  }

  return (
    <section className="gameDetail">
      <h1>Administrador de juegos</h1>
      <h4>Informacion de: {game.title}</h4>
      <article className="gameDetailInfo">
        <img src={`../../../images/products/${game.img_card}`} alt={game.title} />
        <div>
          <h2>{game.title}</h2>
          <h4>{genreName?.title}</h4>
          <p className="txtGame">{game.description}</p>
          <h3>
            {game.price === 0 ? "Free to play" : `Precio: $${game.price?.toFixed(3)}`}
          </h3>
          <h5>
            {game.discount === 0
              ? "Sin descuento"
              : `Descuento: ${game.discount}% Precio final: ${(
                  game.price -
                  game.price * (game.discount / 100)
                ).toFixed(3)}`}
          </h5>
          {game.xbox === 1 && <p>Xbox</p>}
          {game.pc === 1 && <p>Pc</p>}
          {game.playstation === 1 && <p>PlayStation</p>}
          <button type="submmit" onClick={(e) => deleteGame(e)}>
            eliminar juego
          </button>
          <Link to={`/gameEdit/${game.id}`}>editar juego</Link>
        </div>
      </article>
    </section>
  );
};

export default GameDetail;
