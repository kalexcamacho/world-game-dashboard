import { Avatar } from "@mui/material";
import React, { useContext } from "react";
import { ContextApp } from "../../context/ContextApp";
import "./Users.scss";
import DeleteIcon from "@mui/icons-material/Delete";

function Users() {
  const { users, library, posts, setPageLoaded } = useContext(ContextApp);
  function updateUser(id, nickName, name, event) {
    event.preventDefault();
    fetch(`http://localhost:3030/api/users/edit/${id}`, {
      method: "PUT",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userNickname: `Usuario bloqueado(${nickName})`,
        userName: `Usuario bloqueado(${name})`,
      }),
    });
    setPageLoaded(false)
  }
  return (
    <div className="table-container">
      <h2>Administrador de Usuarios</h2>
      <table className="user-table">
        <thead className="user-head">
          <tr className="user-tr">
            <th>Avatar</th>
            <th>Id</th>
            <th>NickName</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Fecha de creación</th>
            <th>Juegos</th>
            <th>Posts</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            let libraryUser = library.filter((lib) => lib.user_id === user.id);
            let postUser = posts.filter((post) => post.user_id === user.id);
            let dateUser = new Date(user.updated_at);
            const date = `${dateUser.getDate()}/${dateUser.getMonth() + 1}/${dateUser.getFullYear()}`;
            return (
              <tr key={user.id}>
                <td className="td-avatar">
                  <Avatar
                    src={`http://localhost:3030/images/usersProfileImages/${user.img_user}`}
                  />
                </td>
                <td>{user.id}</td>
                <td>{user.nickName}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{date}</td>
                <td>{libraryUser.length}</td>
                <td>{postUser.length}</td>
                <td>
                  <button
                    onClick={(event) =>
                      updateUser(user.id, user.nickName, user.name, event)
                    }
                  >
                    <DeleteIcon />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
