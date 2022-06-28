import React from "react";
import './NavBar.scss'
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";

function NavBar() {
    const iconsStyle = {
        color: '#fff',
        fontSize: 30
    }
  return (
    <nav className="appNavBar">
      <ul>
        <li>
          <Link to="/">
            <HomeIcon style={iconsStyle}/>
          </Link>
        </li>
        <li>
          <Link to="/users">
            <PersonIcon style={iconsStyle} />
          </Link>
        </li>
        <li>
          <Link to="/games">
            <SportsEsportsIcon style={iconsStyle} />
          </Link>
        </li>
        <li>
          <Link to="/posts">
            <TextSnippetIcon style={iconsStyle} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
