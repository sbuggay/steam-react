import * as React from "react";
import Profile from "./components/Profile/Profile";
import Library from "./components/Library/Library";

import NavBar from "./components/NavBar";

import { Route } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";

import { Provider } from "react-redux";
import store, { history } from "./redux/configureStore";

class App extends React.Component<any, any> {

  public getStyle(): React.CSSProperties {
    return {

    }
  }

  public render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div style={this.getStyle()}>
            <NavBar />
            <Route path="/profile" component={Profile} />
            <Route path="/library" component={Library} />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
