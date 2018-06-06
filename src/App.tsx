import * as React from "react";

import { Route } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import { Provider } from "react-redux";

import Store from "./components/Store/Store";
import Profile from "./components/Profile/Profile";
import Library from "./components/Library/Library";
import Community from "./components/Community/Community";
import About from "./components/About/About";

import NavBar from "./components/NavBar";

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
            <Route exact={true} path="/" component={Store} />
            <Route path="/profile" component={Profile} />
            <Route path="/library" component={Library} />
            <Route path="/community" component={Community} />
            <Route path="/about" component={About} />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
