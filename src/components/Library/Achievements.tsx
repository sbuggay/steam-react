import * as React from "react";

class Achievements extends React.Component<any, any> {

    public render() {
        if (!this.props.data) {
            return null;
        }

        return (
            <div id="Achievements">
                <div style={{ textTransform: "uppercase", color: "#5993B0" }}>Achievements</div>
            </div>
        );
    }
}

export default Achievements;
