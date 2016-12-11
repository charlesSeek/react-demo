import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import RequestModal from './RequestModal';
import AllDoneModal from './AllDoneModal';

export default class App extends Component {
  render() {
    return (
        <div className="layout">
            <RequestModal/>
            <AllDoneModal/>
            <Header id="header" title="BROCCOLI & CO."/>
            <Content
                id = "content"
                title="A better way to enjoy every day"
                description = "Be the first to know when we launch."
            />
            <Footer id="footer"/>
        </div>
    );
  }
}
