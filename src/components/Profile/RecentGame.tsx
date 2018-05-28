import * as React from "react";

interface IRecentGame {
    game: {
        appid: number;
        name: string;
        playtime_2weeks: number;
        playtime_forever: number;
        img_icon_url: string;
        img_logo_url: string;
    }

}

class RecentGame extends React.Component<IRecentGame, any> {

    public getStyle(): React.CSSProperties {
        return {
            display: "flex",
            
            height: "69px",
            alignContent: "space-between"
        }
    }

    public render() {
        const game = this.props.game;
        return (
            <div style={this.getStyle()}>
                <img src={`https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/${game.appid}/${game.img_logo_url}.jpg`} />
                {game.name}
                <div>
                    {game.playtime_2weeks}
                    {game.playtime_forever}
                </div>
            </div>
        );
    }
}

export default RecentGame;
