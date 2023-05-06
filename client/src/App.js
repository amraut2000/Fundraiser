import React, { useState, useEffect } from "react";
import "./styles/app.scss";
import Header from "./components/Header";
import { Switch, Route, Redirect } from "react-router";
import Home from "./pages/Home/Home";
import CreateFundraiser from "./pages/CreateFundraiser/CreateFundraiser";
import Fundraisers from "./pages/Fundraisers/Fundraisers";
import Track from "./pages/Track/Track";
import Track1 from "./pages/Track1/Track1";
import Donate from "./pages/Donate/Donate";
import NotFound404 from "./pages/NotFound404/NotFound404";
import Loader from "./components/Loader";
import AboutUs from "./pages/Aboutus/AboutUs";
import HomeIns from "./pages/Instructions/HomeIns";
import Features from "./pages/Features/Features";
import CreateDonate from "./pages/Features/Donate/CreateDonate";
import CreateReq from "./pages/Features/Create/CreateReq";
import BrowseHistory from "./pages/Features/History/BrowseHistory";
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <Header />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/browse">
          <Fundraisers />
        </Route>
        <Route path="/donate/:fundraiserAddress">
          <Donate />
        </Route>
        <Route path="/create">
          <CreateFundraiser />
        </Route>
        <Route path="/track/:trackAddress?">
          <Track />
        </Route>
        <Route path="/track1/:trackAddress?">
          <Track1 />
        </Route>
        <Route path="/aboutus">
          <AboutUs></AboutUs>
        </Route>
        <Route path="/home-instr">
          <HomeIns></HomeIns>
        </Route>
        <Route path="/features">
          <Features></Features>
        </Route>
        <Route path="/help-request">
          <CreateReq></CreateReq>
        </Route>
        <Route path="/help-donate">
          <CreateDonate></CreateDonate>
        </Route>
        <Route path="/help-history">
          <BrowseHistory></BrowseHistory>
        </Route>
        <Route path="/404">
          <NotFound404 />
        </Route>
        <Redirect to="/404" />
      </Switch>
    </>
  );
};

export default App;
