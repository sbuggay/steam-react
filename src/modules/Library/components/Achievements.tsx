import * as React from "react";

class Achievements extends React.Component<any, any> {

    public static async getDerivedStateFromProps(props: any, state: any) {
        console.log(props);
        const res = await fetch(`http://localhost:8080/achievements/76561198020399899?appid=${props.appid}`);
        const json = await res.json();
        return json;
    }

    public render() {
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

export default Achievements;
