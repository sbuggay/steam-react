import * as moment from "moment";
import * as React from "react";

import RecentGames from "./RecentGames";

class Profile extends React.Component<any, any> {

    public componentDidMount() {
        fetch("http://localhost:8080/playerSummary/76561198020399899")
            .then(res => res.json())
            .then(json => {
                this.setState(json.response.players[0]);
            });
    }

    public render() {
        if (this.state) {
            const player = this.state;
            return (
                <div>
                    <img src={player.avatarfull} />
                    <div>{player.personaname}</div>
                    <div>Last seen {moment(player.lastlogoff * 1000).fromNow()}</div>
                    <div>{player.steamid}</div>
                    <RecentGames />
                </div>
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

export default Profile;
