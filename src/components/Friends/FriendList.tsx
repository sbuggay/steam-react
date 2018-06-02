import * as React from "react";

import { connect } from "react-redux";


class FriendList extends React.Component<any, any> {
    public render() {
        return null
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

export default connect(mapStateToProps, mapDispatchToProps)(FriendList);
