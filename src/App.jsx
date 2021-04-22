/*
 * File: App.jsx
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-04-22 6:51:44 pm
 * Last Modified: 2021-04-23 12:28:22 am
 * -----
 * Copyright (c) 2021 Yuei
 */

import React, { Component } from 'react';
import ScorePanel from './components/ScorePanel';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 5,
    };
  }

  render() {
    const { score } = this.state;
    return (
      <main>
        <ScorePanel score={score} />
      </main>
    );
  }
}

export default App;
