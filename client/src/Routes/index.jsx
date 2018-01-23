import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Home from '../../src/components/homepage/Home/Home';
import Register from '../../src/components/homepage/Register/RegisterForm';
import Signin from '../../src/components/homepage/Signin/SigninForm';
import ChangePassword from '../../src/components/homepage/ChangePassword/ChangePasswordForm';
import ResetPassword from '../../src/components/homepage/ResetPassword/ResetPasswordForm';
import App from '../../src/components/homepage';

const Routes = () => (
  <Route path="/" component={App}>
    <IndexRoute component={Home}></IndexRoute>
    <Route path ="/signin" component={Signin}></Route>
    <Route path = "/register" component={Register}></Route>
    <Route path = "/reset-password" component={ResetPassword}></Route>
  </Route>
);

export default Routes;