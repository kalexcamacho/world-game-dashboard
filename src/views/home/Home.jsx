import React from "react";
import "./Home.scss";

const Home = () => {
  return (
    <section className="Home-wrapper">
      <h1>Dashboard de administrador</h1>
      <section className="Section-wrapper">
        <p>Ultimo usuario creado</p>
        <article className="Section-user">
          <div className="User-img">
            <img src="/images/usersProfileImages/1653403428106.jpg" alt="" />
          </div>
          <div className="User-data">
            <h2>Usuario</h2>
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
          </div>
        </article>
        <p>Ultimo juego agregado</p>
        <article className="Section-user">
          <div className="Game-img">
            <img src="/images/products/gtaV.jpg" alt="" />
          </div>
          <div className="User-data">
            <h2>Nombre del juego</h2>
            <h3>Genero</h3>
            <p className="Section-user-price">$$1231$$</p>
            <p className="Section-user-price">$$Descuento</p>
            <p>Xbox</p>
            <p>PC</p>
            <p>Play Station</p>
          </div>
        </article>
      </section>
      <section className="Section-estadistics">
        <p className="numbers">000</p>
        <p className="names">Total de usuarios</p>
        <p className="numbers-games">000</p>
        <p className="names">Total de juegos</p>
        <p className="numbers">000</p>
        <p className="names">Total de post</p>
      </section>
    </section>
  );
};

export default Home;
