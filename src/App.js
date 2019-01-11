import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import './App.css';
import Main from './components/Main'
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Switch>
          <Route path="/" component={Main} />
      </Switch>
    );
  }
}

export default App;
