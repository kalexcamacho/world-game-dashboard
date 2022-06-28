import React from "react";
import "./Home.scss";
import { useContext } from "react";
import { ContextApp } from "../../context/ContextApp";

const Home = () => {

  const { users, games, posts, library } = useContext(ContextApp);
  const lastUser = users[users.length - 1];
  const userGames = library.filter((game) => game.userId === lastUser?.id);
  const userPosts = posts.filter((post) => post.userId === lastUser?.id);
  const lastGame = games[games.length - 1];

  const publicationTime = (day) => {
    let newDate = new Date(day)
    return `${newDate.getDate()} / ${newDate.getMonth() + 1} / ${newDate.getFullYear()}`
  };

  return (
    <section className="Home-wrapper">
      <h1>Dashboard de administrador</h1>
      <section className="Section-wrapper">
        <p className="title-mobile-1">Ultimo usuario creado</p>
        <article className="Section-user">
          <div className="User-img">
            <img src={`http://localhost:3030/images/usersProfileImages/${lastUser?.img_user}`} alt={lastUser?.name} />
          </div>
          <div className="User-data">
            <h2>{lastUser?.name}</h2>
            <h3>{lastUser?.nickName}</h3>
            <p>{lastUser?.email}</p>
            <p>Creado:</p>
            <p>{publicationTime(lastUser?.updated_at)}</p>
            <div className="Section-data">
              <div className="Section-data-left">
                <p>No. de juegos</p>
                <p className="Section-data-number">{userGames?.length}</p>
              </div>
              <div>
                <p>No. de post</p>
                <p className="Section-data-number">{userPosts?.length}</p>
              </div>
            </div>
          </div>
        </article>
        <p className="title-mobile-2">Ultimo juego agregado</p>
        <article className="Section-user">
          <div className="Game-img">
            <img src={`http://localhost:3030/images/products/${lastGame?.img_card}`} alt="" />
          </div>
          <div className="User-data">
            <h2>{lastGame?.title}</h2>
            <h3>{lastGame?.genre.title}</h3>
            <p className="Section-user-price">${lastGame?.price}</p>
            <p className="Section-user-price">{lastGame?.discount}%</p>
            <div className="plataforms-logos">
              {lastGame?.xbox === 1 && (
                <img
                  className="plataforms"
                  src="/images/platforms/xbox.png"
                  alt=""
                />
              )}
              {lastGame?.pc === 1 && (
                <img
                  className="plataforms"
                  src="/images/platforms/pc.png"
                  alt=""
                />
              )}
              {lastGame?.playstation === 1 && (
                <img
                  className="plataforms"
                  src="/images/platforms/ps.png"
                  alt=""
                />
              )}
            </div>
          </div>
        </article>
      </section>
      <section className="Section-estadistics">
        <div>
          <p className="numbers">{users?.length}</p>
          <p className="names">Total de usuarios</p>
        </div>
        <div>
          <p className="numbers-games">{games?.length}</p>
          <p className="names">Total de juegos</p>
        </div>
        <div>
          <p className="numbers">{posts?.length}</p>
          <p className="names">Total de post</p>
        </div>
      </section>
    </section>
  );
};

export default Home;
