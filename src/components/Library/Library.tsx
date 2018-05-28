import * as React from "react";
import GameList from "./GameList";

import "./Library.css";

class Library extends React.Component {
    public render() {
        return (
            <div>
                <GameList />
            </div>
        );
    }
}

export default Library;
