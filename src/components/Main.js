import React, { Component } from 'react';
import { Layout } from 'antd';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';

class Main extends Component {
  render() {
    return (
      <Layout style={{backgroundColor: '#fff'}}>
        <Header />
        <Content />
        <Footer />
      </Layout>
    );
  }
}

export default Main;