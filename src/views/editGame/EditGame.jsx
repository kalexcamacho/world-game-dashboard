import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { ContextApp } from "../../context/ContextApp";
import "../addGame/AddGame.scss";

const EditGame = ({
  id,
  title,
  description,
  rating_age,
  genre_id,
  img_card,
  price,
  discount,
  xbox,
  pc,
  playstation,
}) => {
  const { genres, apiCall, setApiCall } = useContext(ContextApp);
  const [form, setForm] = useState({});

  useEffect(() => {
    setForm({
      id,
      title,
      description,
      rating_age,
      genre_id,
      img_card,
      price,
      discount,
      xbox,
      pc,
      playstation,
    });
  }, []);

  const handleForm = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const navigate = useNavigate();

  function updateGame(e) {
    e.preventDefault();
    fetch(`http://localhost:3030/api/products/edit/${id}`, {
      method: "PUT",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    setApiCall(apiCall + 1);
    navigate(`/gameDetail/${id}`);
  }

  return (
    <section className="formGame">
      <h1>Administrador de juegos</h1>
      <h4>Editando: {title}</h4>
      <div className="formContainer">
        <img src={`../../../images/products/${img_card}`} alt={title} />
        <form>
          <label htmlFor="nombre">
            Nombre:
            <input
              type="text"
              id="nombre"
              name="title"
              defaultValue={title}
              onChange={(e) => handleForm(e)}
            />
          </label>
          <label htmlFor="descripcion">
            Descripcion:
            <textarea
              id="descripcion"
              defaultValue={description}
              name="description"
              onChange={(e) => handleForm(e)}
            ></textarea>
          </label>
          <label htmlFor="precio">
            Precio:
            <input
              type="text"
              id="precio"
              name="price"
              defaultValue={price.toFixed(3)}
              onChange={(e) => handleForm(e)}
            />
          </label>
          <label htmlFor="descuento">
            Descuento:
            <input
              type="number"
              id="descuento"
              name="discount"
              defaultValue={discount}
              onChange={(e) => handleForm(e)}
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
              onChange={(e) => handleForm(e)}
              value={genre_id}
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
              name="ratingAge"
              defaultValue={rating_age}
              onChange={(e) => handleForm(e)}
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
                  defaultChecked={xbox === 1}
                  onChange={(e) => handleForm(e)}
                />
                Si
              </label>
              <label htmlFor="noXbox">
                <input
                  type="radio"
                  name="xbox"
                  id="noXbox"
                  value="0"
                  required
                  defaultChecked={xbox === 0}
                  onChange={(e) => handleForm(e)}
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
                  defaultChecked={pc === 1}
                  onChange={(e) => handleForm(e)}
                />
                Si
              </label>
              <label htmlFor="noPc">
                <input
                  type="radio"
                  name="pc"
                  id="noPc"
                  value="0"
                  required
                  defaultChecked={pc === 0}
                  onChange={(e) => handleForm(e)}
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
                  defaultChecked={playstation === 1}
                  onChange={(e) => handleForm(e)}
                />
                Si
              </label>
              <label htmlFor="noPlay">
                <input
                  type="radio"
                  name="play"
                  id="noPlay"
                  value="0"
                  required
                  defaultChecked={playstation === 0}
                  onChange={(e) => handleForm(e)}
                />
                No
              </label>
            </div>
          </div>
          <button type="submmit" onClick={(e) => updateGame(e)}>
            editar juego
          </button>
        </form>
      </div>
    </section>
  );
};

export default EditGame;
