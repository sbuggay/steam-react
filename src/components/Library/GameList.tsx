import * as React from "react";

import { connect } from "react-redux";

import { SELECT_GAME, LOAD_GAME_LIST } from "../../redux/modules/library";

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

    public componentDidMount() {
        if (!(this.props.gameList && this.props.gameList.length > 0)) {
            this.props.dispatch({
                type: LOAD_GAME_LIST,
                payload: "76561198020399899"
            });
        }

    }

    public handleOnClick(i: any) {
        this.props.dispatch({
            type: SELECT_GAME,
            payload: i
        });
    }

    public renderListItem(game: IGame, i: number) {
        return (
            <li key={i} onClick={e => this.handleOnClick(i)} style={{ backgroundColor: i === this.props.selected ? "#183654" : "#151515" }}>
                {game.img_icon_url ?
                    <img src={`https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/${game.appid}/${game.img_icon_url}.jpg`} width="16px" height="16px" />
                    :
                    <div></div>
                }
                <span className="title"> {game.name} </span>
            </li>
        );
    }

    public render() {
        if (this.props.gameList && this.props.gameList.length > 0) {
            const gameItems = this.props.gameList.map((game: IGame, i: number) => {
                return this.renderListItem(game, i);
            });
            return (
                <div id="Library">
                    <div id="GameList">
                        <ul>
                            {gameItems}
                        </ul>
                    </div>
                    <div>
                        {this.props.selected !== -1 ? <GameDetail data={{ game: this.props.gameList[this.props.selected], detail: this.props.gameDetail }} /> : null}
                    </div>
                </div>
            )
        }
        else {
            const gameItems = Array.from(Array(100)).map((game: IGame, i: number) => {
                return (
                    <li key={i} style={{ backgroundColor: "#151515" }}>
                        <div>template</div>
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
                </div>
            );
        }
    }
}

const mapStateToProps = (state: any) => {
    return {
        gameList: state.library.gameList,
        gameDetail: state.library.gameDetail,
        selected: state.library.selected
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return { dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(GameList);
