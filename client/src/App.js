import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { All_Activities } from './components/All_Activities/All_Activities';
import { CreateActivity } from './components/Create_Activity/CreateActivity';
import { Details } from './components/Details/Details';
import { EditActivity } from './components/Edit_Activity/EditActivity';
import { Home } from './components/Home/Home';
import { LandingPages } from './components/Landing_Pages/LandingPages';
import { PageNotFound } from './Page/PageNotFound';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'} component={LandingPages} />
          <Route exact path={'/home'} component={Home} />
          <Route exact path={'/activities'} component={All_Activities} />
          <Route exact path={'/countries/:id'} component={Details} />
          <Route exact path={'/create-activity'} component={CreateActivity} />
          <Route exact path={'/edit-activity/:id'} component={EditActivity} />
          <Route path={'*'} component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
