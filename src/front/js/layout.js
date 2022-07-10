import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import injectContext from "./store/appContext";

import { Login } from "./pages/login";
import { Home } from "./pages/home";
// import { OwnerLogin } from "./pages/operator";
import { Scheduler } from "./pages/Scheduler";
import { Signup } from "./pages/signup";

import { Appbar } from "./component/Appbar/Appbar";
import Lists from "./pages/Lists";
import Forms from "./pages/Forms";
import Events from "./pages/Events";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/events">
              <Events />
            </Route>

            <Route exact path="/scheduler">
              <Scheduler />
            </Route>
            <Route exact path="/lists">
              <Lists />
            </Route>
            <Route exact path="/forms">
              <Forms />
            </Route>
            <Route>
              <h1>Not found!</h1>
            </Route>
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
