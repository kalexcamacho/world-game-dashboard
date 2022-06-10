import React from "react";
import "./Home.scss";

const Home = () => {
  return (
    <section className="Home-wrapper">
      <h1>Dashboard de administrador</h1>
      <p>Ultimo usuario creado</p>
      <section className="Section-wrapper">
        <article className="Section-user">
            <h2>Nickname</h2>
            <h3>Nombre usuario</h3>
            <p>email@email.com</p>
            <p>Creado:</p>
            <p>dd/mm/aaaa</p>
            <div className="Section-data">
                <div className="Section-data-left">
                    <p>No. de juegos</p>
                    <p className="Section-data-number">000</p>
                </div>
                <div>
                    <p>No. de post</p>
                    <p className="Section-data-number">000</p>
                </div>
            </div>
        </article>
        <p>Ultimo juego agregado</p>
        <article className="Section-user">
            <h2>Nombre Juego</h2>
            <h3>Genero</h3>
            <p className="Section-user-price">$$Precio$$$</p>
            <p>Descuento</p>
            <p>PC</p>
            <p>XBOX</p>
            <p>PLAY STATION</p>
        </article>
      </section>
      <section className="Section-estadistics">
        <p>Estadisticas</p>
      </section>
    </section>
  );
};

export default Home;
