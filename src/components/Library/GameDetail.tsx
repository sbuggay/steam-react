import * as React from "react";
import RecentNews from "./RecentNews";

class GameDetail extends React.Component<any, any> {

    public render() {
        const game = this.props.game;

        return (
            <div id="GameDetail">
                <div className="Details">
                    <div className="Title">
                        <img src={`https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/${game.appid}/${game.img_logo_url}.jpg`} />
                        <div style={{ paddingLeft: "20px" }}>
                            <div>
                                {game.name}
                            </div>
                            <div style={{}}>
                                {`You've played: ${Math.floor(game.playtime_forever / 60)} hours`}
                            </div>
                        </div>
                        <a href={`steam://run/${game.appid}`}><button>Play</button></a>
                    </div>
                    
                    <RecentNews appid={game.appid} />
                </div>
                <ul className="Links">
                    <li>Community Hub</li>
                    <li>Achievements</li>
                    <li>Discussions</li>
                    <li>Releated Groups</li>
                    <li>Manual</li>
                    <li>News</li>
                    <li>Store Page</li>
                    <li>DLC</li>
                    <li>CommunityGuides</li>
                    <li>Support</li>
                    <li>Write Reviews</li>
                </ul>
            </div>
        );
    }
}

export default GameDetail;
