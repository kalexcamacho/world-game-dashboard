import React, { useContext, useState } from "react";
import { ContextApp } from "../../context/ContextApp";
import { useNavigate } from "react-router";
import "./AddGame.scss";

const AddGame = () => {
  const { genres, setPageLoaded } = useContext(ContextApp);
  const [form, setForm] = useState({});
  const [errFoo, setErrFoo] = useState(false);
  const navigate = useNavigate();

  const handleForm = (event) => {
    setErrFoo(false);
    setForm({
      ...form,
      [event.target.name]: event.target.value,

    });
  };

  function addGame(e) {
    e.preventDefault();
    if (Object.keys(form).length === 9) {
      fetch(`http://localhost:3030/api/products/create`, {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })
      setPageLoaded(false);
      navigate("/games");
    } else {
      setErrFoo(true);
    }
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
              name="title"
              onChange={(e) => handleForm(e)}
              required
            />
          </label>
          <label htmlFor="descripcion">
            Descripcion:
            <textarea
              id="descripcion"
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
              onChange={(e) => handleForm(e)}
              required
            />
          </label>
          <label htmlFor="descuento">
            Descuento:
            <input
              type="number"
              id="descuento"
              name="discount"
              onChange={(e) => handleForm(e)}
              required
            />
          </label>
          <label htmlFor="img">
            Imagen:
            <input
              type="file"
              id="img"
              name="img_card"
              accept="image/*"
              className="imgFile"
              onChange={(e) => console.log(e.target.files)}
            />
          </label>
          <label>
            Genero:
            <select name="genre" onChange={(e) => handleForm(e)} required>
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
              onChange={(e) => handleForm(e)}
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
                  onChange={(e) => handleForm(e)}
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
                  onChange={(e) => handleForm(e)}
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
                  onChange={(e) => handleForm(e)}
                  required={true}
                />
                No
              </label>
            </div>
          </div>
          {errFoo && <h3>Ningun campo puede estar vacio.</h3>}
          <button type="submmit" onClick={(e) => addGame(e)}>
            + agregar juego nuevo
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddGame;
