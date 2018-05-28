import * as React from "react";

import RecentGame from "./RecentGame";

class RecentGames extends React.Component<any, any> {

    public componentDidMount() {
        fetch("http://localhost:8080/recentGameList/76561198020399899")
            .then(res => res.json())
            .then(json => this.setState(json.response));
    }

    public render() {
        if (this.state) {
            const games = this.state.games;
            const gameItems = games.map((game: any, i: number) => {
                return <RecentGame key={i} game={game} />
            });
            return (
                <ul>
                    {gameItems}
                </ul>
            );
        }
        else {
            return (
                <div>
                    loading...
                </div>
            );
        }
    }
}

export default RecentGames;
