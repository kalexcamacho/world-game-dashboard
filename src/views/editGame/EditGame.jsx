import React, { useContext } from "react";
import { ContextApp } from "../../context/ContextApp";
import "../addGame/AddGame.scss";

const EditGame = ({
  title,
  description,
  rating_age,
  img_card,
  price,
  discount,
  xbox,
  pc,
  playstation,
}) => {
  const { genres } = useContext(ContextApp);
  return (
    <section className="formGame">
      <h1>Administrador de juegos</h1>
      <h4>Editando: {title}</h4>
      <div className="formContainer">
        <img src={`../../../images/products/${img_card}`} alt={title} />
        <form>
          <label htmlFor="nombre">
            Nombre:
            <input type="text" id="nombre" defaultValue={title} />
          </label>
          <label htmlFor="descripcion">
            Descripcion:
            <textarea id="descripcion" defaultValue={description}></textarea>
          </label>
          <label htmlFor="precio">
            Precio:
            <input type="text" id="precio" defaultValue={price.toFixed(3)} />
          </label>
          <label htmlFor="descuento">
            Descuento:
            <input type="number" id="descuento" defaultValue={discount} />
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
            <input type="number" id="edad" defaultValue={rating_age} />
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
                />
                No
              </label>
            </div>
          </div>
          <button type="submmit">editar juego</button>
        </form>
      </div>
    </section>
  );
};

export default EditGame;
