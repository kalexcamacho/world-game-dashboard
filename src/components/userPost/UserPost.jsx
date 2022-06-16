import "./UserPost.scss";
import { ContextApp } from "../../context/ContextApp";
import { useContext } from "react";
import { Link } from "react-router-dom";

function UserPost({ title, description, created_at, img, user_id }) {
  const { users, games } = useContext(ContextApp);
  const user = users.find((user) => user.id === user_id);
  const game = games.find(i => i.id == title)
  const publicationTime = (day) => {
    let toDay = new Date().getTime();
    let fecha = new Date(day).getTime();
    let hora = new Date(day).getHours();
    let diff = toDay - fecha;
    let total = Math.floor(diff / (1000 * 60 * 60 * 24));
    let totalHours = Math.floor(diff / (1000 * 60 * 60) - hora);
    if (total === 0) {
      if (totalHours === 1) {
        return `Hace ${totalHours} hora`;
      } else {
        return `Hace ${totalHours} horas`;
      }
    } else {
      if (total === 1) {
        return `Hace ${total} dia`;
      } else {
        return `Hace ${total} dias`;
      }
    }
  };
  return (
    <article className="postContainer">
      <div className="postUserInfo">
        <img
          src={`./images/usersProfileImages/${user.img_user}`}
          alt="Profile img"
        />
        <div>
          <h2>{user.nickName}</h2>
          <p>{publicationTime(created_at)}</p>
        </div>
      </div>

      <div>
        <Link className="gameTitle" to={"/games"}>
          {game.title}
        </Link>
        <p>{description}</p>
        <img src={`./images/usersPostImages/${img}`} alt="Game img" />
        <button>Marcar como inadecuado</button>
      </div>
    </article>
  );
}

export default UserPost;
