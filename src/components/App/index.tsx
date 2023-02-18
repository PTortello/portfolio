import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { ROUTES } from "constants/routes";
import Home from "pages/Home";
import Projects from "pages/Projects";
import Header from "components/Header";
import Navi from "components/Navi";

function App() {
  return (
    <>
      <Header />
      <Navi />
      <Switch>
        <Route path={ROUTES.HOME} component={Home} />
        <Route path={ROUTES.PROJECTS} component={Projects} />
        <Redirect to={ROUTES.HOME} />
      </Switch>
    </>
  );
}

export default withRouter(App);
