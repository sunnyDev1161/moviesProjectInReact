import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import IndexPage from "./components/IndexPage/IndexPage";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import BrowseMovies from "./container/BrowseMovies/BrowseMovies";
import Download from "./container/Download/Download";
import HeaderContainer from "./container/HeaderContainer/HeaderContainer";

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <Router>
      <Switch>
        <Route exact path={"/home"} component={IndexPage} />
        <Route  path={"/browse-movies"} component={BrowseMovies} />
        <Route  path={"/download/:id"} component={Download} />
        <Route component={NotFound} />
      </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
