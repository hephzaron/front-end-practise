import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Home from '../components/homepage/Home/Home';
import Register from '../components/homepage/Register/RegisterForm';
import Signin from '../components/homepage/Signin/SigninForm';
import ChangePassword from '../components/homepage/ChangePassword/ChangePasswordForm';
import ResetPassword from '../components/homepage/ResetPassword/ResetPasswordForm';
import App from '../components/homepage/index';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Home}></IndexRoute>
    <Route path ="/signin" component={Signin}></Route>
    <Route path = "/register" component={Register}></Route>
    <Route path = "/reset-password" component={ResetPassword}></Route>
  </Route>
);