import React, { useContext, useState } from "react";
import { ContextApp } from "../../context/ContextApp";
import { useNavigate } from "react-router";
import "./AddGame.scss";

const AddGame = () => {
  const { genres, apiCall, setApiCall } = useContext(ContextApp);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newDiscount, setNewDiscount] = useState("");
  const [newGenre, setNewGenre] = useState("");
  const [newAge, setNewAge] = useState("");
  const [newXbox, setNewXbox] = useState("");
  const [newPc, setNewPc] = useState("");
  const [newPlay, setNewPlay] = useState("");

  const navigate = useNavigate();

  function addGame(e) {
    e.preventDefault();
    fetch(`http://localhost:3030/api/products/create`, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: newTitle,
        description: newDescription,
        price: newPrice,
        discount: newDiscount,
        genre: newGenre,
        ratingAge: newAge,
        xbox: newXbox,
        pc: newPc,
        play: newPlay,
      }),
    });
    setApiCall(apiCall + 1);
    navigate("/games")
  }

  return (
    <section className="formGame">
      <h1>Administrador de juegos</h1>
      <h4>Agregando juego nuevo</h4>
      <div className="formContainer">
        <form>
          <label htmlFor="nombre">
            Nombre:
            <input
              type="text"
              id="nombre"
              onChange={(e) => setNewTitle(e.target.value)}
              required
            />
          </label>
          <label htmlFor="descripcion">
            Descripcion:
            <textarea
              id="descripcion"
              onChange={(e) => setNewDescription(e.target.value)}
            ></textarea>
          </label>
          <label htmlFor="precio">
            Precio:
            <input
              type="text"
              id="precio"
              onChange={(e) => setNewPrice(e.target.value)}
              required
            />
          </label>
          <label htmlFor="descuento">
            Descuento:
            <input
              type="number"
              id="descuento"
              onChange={(e) => setNewDiscount(e.target.value)}
              required
            />
          </label>
          <label htmlFor="img">
            Imagen:
            <input type="file" id="img" accept="image/*" className="imgFile" />
          </label>
          <label>
            Genero:
            <select
              name="genre"
              onChange={(e) => setNewGenre(e.target.value)}
              required
            >
              <option value="todos">Todos los generos</option>
              {genres.map((genre) => {
                return (
                  <option value={genre.id} key={genre.id}>
                    {genre.title}
                  </option>
                );
              })}
            </select>
          </label>
          <label htmlFor="edad">
            Edad:
            <input
              type="number"
              id="edad"
              onChange={(e) => setNewAge(e.target.value)}
              required
            />
          </label>

          <div className="platformsContainer">
            <div className="platform">
              Xbox:
              <label htmlFor="siXbox">
                <input
                  type="radio"
                  name="xbox"
                  id="siXbox"
                  value="1"
                  onChange={(e) => setNewXbox(e.target.value)}
                />
                Si
              </label>
              <label htmlFor="noXbox">
                <input
                  type="radio"
                  name="xbox"
                  id="noXbox"
                  value="0"
                  onChange={(e) => setNewXbox(e.target.value)}
                  required
                />
                No
              </label>
            </div>
            <div className="platform">
              Pc:
              <label htmlFor="siPc">
                <input
                  type="radio"
                  name="pc"
                  id="siPc"
                  value="1"
                  onChange={(e) => setNewPc(e.target.value)}
                />
                Si
              </label>
              <label htmlFor="noPc">
                <input
                  type="radio"
                  name="pc"
                  id="noPc"
                  value="0"
                  onChange={(e) => setNewPc(e.target.value)}
                  required
                />
                No
              </label>
            </div>
            <div className="platform">
              PlayStation:
              <label htmlFor="siPlay">
                <input
                  type="radio"
                  name="play"
                  id="siPlay"
                  value="1"
                  onChange={(e) => setNewPlay(e.target.value)}
                />
                Si
              </label>
              <label htmlFor="noPlay">
                <input
                  type="radio"
                  name="play"
                  id="noPlay"
                  value="0"
                  onChange={(e) => setNewPlay(e.target.value)}
                  required
                />
                No
              </label>
            </div>
          </div>
          <button type="submmit" onClick={(e) => addGame(e)}>
            + agregar juego nuevo
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddGame;
