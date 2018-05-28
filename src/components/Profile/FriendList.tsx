import * as React from "react";


class FriendList extends React.Component<any, any> {

    public componentDidMount() {
        fetch("http://localhost:8080/friendList/76561198020399899")
            .then(res => res.json())
            .then(json => {
                this.setState(json);
            });
    }

    public render() {
        console.log(this.state);
        if (this.state) {
            return (
                <div>

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

export default FriendList;
