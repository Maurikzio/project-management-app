import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Switch>
          <Route exact path='/project-management-app' component={Dashboard}/>
          <Route path='/project-management-app/project/:id' component={ProjectDetails}/>
          <Route path='/project-management-app/signin' component={SignIn}/>
          <Route path='/project-management-app/signup' component={SignUp}/>
          <Route path='/project-management-app/create' component={CreateProject} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
