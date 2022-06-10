import './UserPost.scss'
import { ContextApp } from '../../context/ContextApp';
import { useContext } from 'react';
import DataUserPost from '../DataUserPost/DataUserPost';

function UserPost({ title, description, created_at, img, user_id }) {
    const { users } = useContext(ContextApp);
    let specificUser = users.filter(user =>{
       return user.id === user_id
    })
    console.log(specificUser);
    return (
        <article>
            {specificUser.map(user => {
                return <DataUserPost key={user.id} {...user} />
            })}
            
            <div>
                <p>{created_at}</p>
                <p>{title}</p>
                <p>{description}</p>
                <img className="" src={`./images/usersPostImages/${img}`} alt="Game img" />
                <button>Marcar como inadecuado</button>
            </div>
        </article>
    );
}

export default UserPost;