import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import routes from '../../constants/routes';
import Home from '../../pages/Home';
import Projects from '../../pages/Projects';
import Header from '../Header';
import Navi from '../Navi';

function App() {
  return (
    <>
      <Header />
      <Navi />
      <Switch>
        <Route path={routes.home} component={ Home } />
        <Route path={routes.projects} component={ Projects } />
        <Redirect to={routes.home} />
      </Switch>
    </>
  );
}

export default withRouter(App);
