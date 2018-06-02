import * as React from "react";

import { NavLink } from "react-router-dom";

import "./NavBar.css";

class Library extends React.Component {
    public render() {

        const navLink = (to: string, text: string) => {
            return <NavLink activeStyle={{ textShadow: "0 0 5px white" }} to={to}>{text}</NavLink>;
        }

        return (
            <div id="NavBar">
                <img src="https://steamcommunity-a.akamaihd.net/public/shared/images/header/globalheader_logo.png?t=962016" width="176" height="44" />
                {navLink("/store", "Store")}
                {navLink("/library", "Library")}
                {navLink("/profile", "Profile")}
                {navLink("/community", "Community")}
                {navLink("/about", "About")}
            </div>
        );
    }
}

export default Library;
