import * as React from "react";

import { Link } from "react-router-dom";

import "./NavBar.css";

class Library extends React.Component {
    public render() {
        return (
            <div id="NavBar">
                <img src="https://steamcommunity-a.akamaihd.net/public/shared/images/header/globalheader_logo.png?t=962016" width="176" height="44" />
                <Link to="/store">Store</Link>
                <Link to="/library">Library</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/community">Community</Link>
                <Link to="/about">About</Link>
            </div>
        );
    }
}

export default Library;
