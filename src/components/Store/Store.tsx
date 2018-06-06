import * as React from "react";
import { connect } from "react-redux";

import { LOAD_FEATURED } from "../../redux/modules/store";

import "./Store.css";

class Store extends React.Component<any, any> {

    public componentDidMount() {
        if (!this.props.featured) {
            this.props.dispatch({
                type: LOAD_FEATURED
            });
        }
    }

    public render() {
        if (this.props.featured && this.props.featured.large_capsules) {
            const largeCapsules = () => {
                const capsules = this.props.featured.large_capsules;
                return capsules.map((item: any, i: number) => {
                    return (
                        <div className="Capsule" key={i}>
                            <img src={item.large_capsule_image}></img>
                            <div>{item.name}</div>
                        </div>
                    );
                });
            }

            return (
                <div id="Capsules">
                    {largeCapsules()}
                </div>
            );
        }
        else {
            return null;
        }


    }
}

const mapStateToProps = (state: any) => {
    return {
        featured: state.store.featured
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return { dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(Store);
