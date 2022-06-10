function DataUserPost({img_user, nickName}) {

    return (
        <div>
            <img className="" src={`./images/usersProfileImages/${img_user}`} alt="Profile img"/>
            <h3>{nickName}</h3>
        </div>
    );
  }
  
  export default DataUserPost;