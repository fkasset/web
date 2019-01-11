import React, { Component } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import { Home, Offering, Fkcoin, Company } from '../pages';
import { Layout } from 'antd';

class Content extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Layout.Content style={{ margin: '0px' }}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/offering" component={Offering} />
        <Route exact path="/fkcoin" component={Fkcoin} />
        <Route exact path="/company" component={Company} />
        <Redirect to="/404" />
      </Switch>
      </Layout.Content>
    );
  }
};

export default Content;