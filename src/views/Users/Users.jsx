import { Avatar } from '@mui/material'
import React,{useContext} from 'react'
import { ContextApp } from '../../context/ContextApp'
import './Users.scss'
import DeleteIcon from '@mui/icons-material/Delete';

function Users() {
    const {users, games} = useContext(ContextApp)
    console.log(users)
  return (
    <div className='table-container'>
        <h2>Administrador de Usuarios</h2>
        <table className='user-table'>
            <thead className='user-head'>
            <tr className='user-tr'>
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
            {users.map(user =>{
               return(
               <tr key={user.id}>
                   <td className='td-avatar'><Avatar /></td>
                   <td>{user.id}</td>
                   <td>{user.nickName}</td>
                   <td>{user.name}</td>
                   <td>{user.email}</td>
                   <td>{user.updated_at}</td>
                    <td>{user.name.length}</td>
                    <td>{user.email.length}</td>
                     <td><DeleteIcon /></td>
               </tr>
                )
            })}
            </tbody>
        </table>
        
    </div>
  )
}

export default Users