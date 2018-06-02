import * as React from "react";
import RecentNews from "./RecentNews";
import Achievements from "./Achievements";

interface IGameDetailProps {
    data: {
        game: any;
        detail: {
            achievements: any;
            news: any;
        }
    }
}

class GameDetail extends React.Component<IGameDetailProps, any> {

    public render() {
        const data = this.props.data;

        if (!data) {
            return null;
        }

        const game = data.game;
        const detail = data.detail;

        console.log(detail);

        return (
            <div id="GameDetail">
                <div className="Details">
                    <div className="Title">
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <img src={`https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/${game.appid}/${game.img_logo_url}.jpg`} />
                            <div style={{ paddingLeft: "20px" }}>
                                <div>
                                    {game.name}
                                </div>
                                <div style={{ color: "#5d9bb7", fontSize: "12px", textTransform: "uppercase" }}>
                                    {`You've played: ${Math.floor(game.playtime_forever / 60)} hours`}
                                </div>
                            </div>
                        </div>
                        <a style={{ marginRight: "20px", cursor: "pointer" }} href={`steam://run/${game.appid}`}><button>Play</button></a>
                    </div>
                    <Achievements data={detail[game.appid].stats} />
                    <RecentNews data={detail[game.appid].news} />
                </div>
                <div id="Links">
                    <div style={{ color: "#5d9bb7", textTransform: "uppercase" }}>links</div>
                    <ul>
                        <li><a href={`http://steamcommunity.com/app/${game.appid}/`}>Community Hub</a></li>
                        <li><a href={`http://steamcommunity.com/id/pwndonkey/stats/appid/${game.appid}/achievements`}>Achievements</a></li>
                        <li><a href={`http://steamcommunity.com/app/${game.appid}/discussions`}>Discussions</a></li>
                        <li><a href={`http://steamcommunity.com/search/groups/?text=${game.name}`}>Related Groups</a></li>
                        <li><a href={`https://store.steampowered.com/news/?appids=${game.appid}`}>News</a></li>
                        <li><a href={`https://store.steampowered.com/app/${game.appid}/`}>Store Page</a></li>
                        <li><a href={`https://store.steampowered.com/dlc/${game.appid}/`}>DLC</a></li>
                        <li><a href={`http://steamcommunity.com/app/${game.appid}/guides`}>CommunityGuides</a></li>
                        <li><a href={`https://help.steampowered.com/en/wizard/HelpWithGame/?appid=${game.appid}`}>Support</a></li>
                        <li><a href={`https://store.steampowered.com/recommended/recommendgame/${game.appid}`}>Write Reviews</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default GameDetail;
