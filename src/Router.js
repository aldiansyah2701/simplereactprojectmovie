import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import App from './App';
import Public from './components/Public';
import PublicAlert from './components/PublicAlert';
import Protected from './components/Protected';
import Auth from './Auth';

const Router = (props) => (
  
    <Switch>
      
      <Route exact path='/public' component={Public}/>
      <Route exact path='/publicalert' component={PublicAlert}/>
      <PrivateRoute path="/protected" component={Protected} />
    </Switch>
  
)

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Auth.getAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/publicalert"
          }}
        />
      )
    }
  />
);


export default Router;