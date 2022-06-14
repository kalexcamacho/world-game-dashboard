import React, { useContext } from "react";
import { ContextApp } from "../../context/ContextApp";
import "./AddGame.scss";

const AddGame = () => {
  const { genres } = useContext(ContextApp);
  return (
    <section className="formGame">
      <h1>Administrador de juegos</h1>
      <h4>Agregando juego nuevo</h4>
      <div className="formContainer">
        <form>
          <label htmlFor="nombre">
            Nombre:
            <input type="text" id="nombre" />
          </label>
          <label htmlFor="descripcion">
            Descripcion:
            <textarea id="descripcion" cols="30" rows="10"></textarea>
          </label>
          <label htmlFor="precio">
            Precio:
            <input type="text" id="precio" />
          </label>
          <label htmlFor="descuento">
            Descuento:
            <input type="number" id="descuento" />
          </label>
          <label htmlFor="img">
            Imagen:
            <input type="file" id="img" accept="image/*" className="imgFile" />
          </label>
          <label>
            Genero:
            <select name="genre">
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
            <input type="number" id="edad" />
          </label>

          <div className="platformsContainer">
            <div className="platform">
              Xbox:
              <label htmlFor="siXbox">
                <input type="radio" name="xbox" id="siXbox" value="1" />
                Si
              </label>
              <label htmlFor="noXbox">
                <input
                  type="radio"
                  name="xbox"
                  id="noXbox"
                  value="0"
                  required
                />
                No
              </label>
            </div>
            <div className="platform">
              Pc:
              <label htmlFor="siPc">
                <input type="radio" name="pc" id="siPc" value="1" />
                Si
              </label>
              <label htmlFor="noPc">
                <input type="radio" name="pc" id="noPc" value="0" required />
                No
              </label>
            </div>
            <div className="platform">
              PlayStation:
              <label htmlFor="siPlay">
                <input type="radio" name="play" id="siPlay" value="1" />
                Si
              </label>
              <label htmlFor="noPlay">
                <input
                  type="radio"
                  name="play"
                  id="noPlay"
                  value="0"
                  required
                />
                No
              </label>
            </div>
          </div>
          <button type="submmit">+ agregar juego nuevo</button>
        </form>
      </div>
    </section>
  );
};

export default AddGame;
