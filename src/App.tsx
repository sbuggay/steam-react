import * as React from "react";
import Profile from "./modules/Profile/components/Profile";
import Library from "./modules/Library/components/Library";

import NavBar from "./components/NavBar";

import { BrowserRouter, Route } from 'react-router-dom'


class App extends React.Component<any, any> {

  public getStyle(): React.CSSProperties {
    return {

    }
  }

  public render() {
    return (
      <BrowserRouter>
        <div style={this.getStyle()}>
          <NavBar />
          <Route path="/profile" component={Profile} />
          <Route path="/library" component={Library} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
