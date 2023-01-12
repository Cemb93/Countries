import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CreateActivity } from './components/Create_Activity/CreateActivity';
import { Details } from './components/Details/Details';
import { EditActivity } from './components/Edit_Activity/EditActivity';
import { Home } from './components/Home/Home';
import { LandingPages } from './components/Landing_Pages/LandingPages';
import { PageNotFound } from './Page/PageNotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'} component={LandingPages} />
          <Route exact path={'/home'} component={Home} />
          <Route exact path={'/countries/:id'} component={Details} />
          <Route exact path={'/create-activity'} component={CreateActivity} />
          <Route exact path={'/edit-activity'} component={EditActivity} />
          <Route path={'*'} component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
