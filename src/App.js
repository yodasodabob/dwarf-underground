import React, { Component } from 'react';
import Header from './Header';
import Ad from './Ad'
import Articles from './Articles'
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

      <div className="small-12 columns other-articles">
        <h2>From around the Realm</h2>
        <div className="small-6 medium-3 columns other-article">
          <a href="#">
            <img src="https://www.enclavepublishing.com/wp-content/uploads/2015/11/tumblr_inline_mtvwr6T4qH1r8eb4v.gif" alt="orc" />
            <p>Single Orcs in Indianapolis</p>
          </a>  
        </div>
        <div className="small-6 medium-3 columns other-article">
          <a href="#">
            <img src="https://images.fineartamerica.com/images-medium-large-5/rocky-mountain-landscape-meadow-in-spring-western-panorama-with-wildflowers-square-format-walt-curlee.jpg" alt="mountain" />
            <p>You won't believe what's under this mountain</p>
          </a>  
        </div>
        <div className="small-6 medium-3 columns other-article">
          <a href="#">
            <img src="http://orig01.deviantart.net/a278/f/2010/357/9/7/seamless___gold_coins_by_bartalon-d35iydr.jpg" alt="gold" />
            <p>Mine 20% more gold with One Weird Trick</p>
          </a> 
        </div>
        <div className="small-6 medium-3 columns other-article">
          <a href="#">
            <img src="http://cdn23.us1.fansshare.com/photos/thehobbit/the-hobbit-square-characters-833282558.jpg" alt="hobbit" />
            <p>Surprise for Indiana Hobbits born before 1999</p>
          </a> 
        </div>
      </div>
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