import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './scss/index.scss';
import './assets/icons/css/all.min.css';

import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Synopsis from './pages/Synopsis';
import Show from './pages/Show';
import Directory from './pages/Directory';
import Emmision from './pages/Emmision';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/registro" component={Signup}/>
          <Route exact path="/sinopsis" component={Synopsis}/>
          <Route exact path="/ver" component={Show}/>
          <Route exact path="/directorio" component={Directory} />
          <Route exact path="/emision" component={Emmision} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
