import './UserPost.scss'

function UserPost({description}) {
    return (
        <article className="postContainer">
            <div>
                <img className="" src="" alt="Profile img"/>
                <h3>kalexcamacho</h3>
                <p>hace 14 días</p>
            </div>
            <div>
                <p>Bomberman</p>
                <p>{description}</p>
                <img className="" src="" alt="Game img"/>
                <button>Marcar como inadecuado</button>
            </div>
        </article>
    );
  }
  
  export default UserPost;