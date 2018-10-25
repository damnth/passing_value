import React, { Component } from 'react';

import Main_page from './components/main';

class App extends Component {

  getMain = () => {
    return    <main_page />;
  };

  render() {
    return<div >
         <Main_page />
      </div>
    ;
  }
}

export default App;
