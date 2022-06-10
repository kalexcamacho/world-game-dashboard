import './PostAdmin.scss'
import UserPost from '../../components/userPost/UserPost';
import { ContextApp } from '../../context/ContextApp';
import { useContext } from 'react';

function PostAdmin() {
    const {posts} = useContext(ContextApp);
    return (
        <section>
            <h2>Administrador de post</h2>
            {posts.map(post =>{
                return <UserPost key={post.id} {...post}/>
            })}
            
        </section>
    );
  }
  
  export default PostAdmin;