import * as React from "react";

import GameDetail from "./GameDetail";

export interface IGame {
    appid: string;
    name: string;
    playtime_forever: number;
    img_icon_url: string;
    img_logo_url: string;
    has_community_visible_stats: boolean;
}

class GameList extends React.Component<any, any> {

    public async componentDidMount() {
        const res = await fetch("http://localhost:8080/gameList/76561198020399899");
        const json = await res.json();

        json.response.games.sort((a: IGame, b: IGame) => {
            if (a.name <= b.name) {
                return -1;
            }
            return 1;
        });

        this.setState(json.response);
    }

    public handleOnClick(i: any) {
        this.setState({ selected: i })
    }

    public render() {
        if (this.state) {
            const games = this.state.games

            const gameItems = games.map((game: IGame, i: number) => {
                return (
                    <li key={i} onClick={e => this.handleOnClick(i)} style={{ backgroundColor: i === this.state.selected ? "#5d9bb7" : "#222" }}>
                        {game.img_icon_url ?
                            <img src={`https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/${game.appid}/${game.img_icon_url}.jpg`} width="16px" height="16px" />
                        :
                            <div></div>
                        }
                        <span className="title"> {game.name} </span>
                    </li>
                );
            });

            return (
                <div id="Library">
                    <div id="GameList">
                        <ul>
                            {gameItems}
                        </ul>
                    </div>
                    <div>
                        {this.state.selected ? <GameDetail game={this.state.games[this.state.selected]} /> : null}
                    </div>
                </div>
            )
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

export default GameList;
