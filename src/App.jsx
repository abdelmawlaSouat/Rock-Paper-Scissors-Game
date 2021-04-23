/*
 * File: App.jsx
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-04-22 6:51:44 pm
 * Last Modified: 2021-04-23 3:34:08 am
 * -----
 * Copyright (c) 2021 Yuei
 */

import React, { Component } from 'react';
import ScorePanel from './components/ScorePanel';
import GameArea from './components/GameArea';
import RulesModal from './components/RulesModal';
import styles from './App.module.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 5,
      // showModal: true,
    };
  }

  render() {
    const { score } = this.state;
    return (
      <main>
        <ScorePanel score={score} />
        <GameArea />
        <div className={styles.rulesContainer}>
          <button type="button" className={styles.rulesBtn}>
            RULES
          </button>
          <RulesModal />
        </div>
      </main>
    );
  }
}

export default App;
