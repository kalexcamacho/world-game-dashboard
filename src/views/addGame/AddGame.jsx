import React from "react";

const AddGame = () => {
  return (
    <section>
      <h1>Administrador de juegos</h1>
      <h4>Agregando juego nuevo</h4>
      <form>
        <label htmlFor="nombre">
          Nombre:
          <input type="text" id="nombre" />
        </label>
        <label htmlFor="descripcion">
          Descriptcion:
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
          <input type="file" id="img" accept="image/*" />
        </label>
        <label htmlFor="edad">
          Descuento:
          <input type="number" id="edad" />
        </label>
        <label>
          xbox:
          <label htmlFor="siXbox">
            <input type="radio" name="xbox" id="siXbox" value="1" />
            Si
          </label>
          <label htmlFor="noXbox">
            <input type="radio" name="xbox" id="noXbox" value="0" required />
            No
          </label>
        </label>
        <label>
          pc:
          <label htmlFor="siPc">
            <input type="radio" name="pc" id="siPc" value="1" />
            Si
          </label>
          <label htmlFor="noPc">
            <input type="radio" name="pc" id="noPc" value="0" required />
            No
          </label>
        </label>
        <label>
          Play Station:
          <label htmlFor="siPlay">
            <input type="radio" name="play" id="siPlay" value="1" />
            Si
          </label>
          <label htmlFor="noPlay">
            <input type="radio" name="play" id="noPlay" value="0" required />
            No
          </label>
        </label>
        <button type="submmit">+ agregar juego nuevo</button>
      </form>
    </section>
  );
};

export default AddGame;
