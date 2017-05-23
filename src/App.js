import React, { Component } from 'react';
import Header from './Header';
import Ad from './Ad'
import Articles from './Articles'
import OtherArticles from './OtherArticles'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      
    <main className="expanded row">
      <Articles />
      <aside className="large-4 medium-12 columns">
        <Ad />
      </aside>

      <OtherArticles />
    </main>

    <footer className="expanded row">
      <h6>&copy; 2017 Erebor Industries</h6>
      <h6 className="float-right">All rights reserved</h6>
    </footer>

      </div>
    );
  }
}

export default App;

// null