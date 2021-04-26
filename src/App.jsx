/*
 * File: App.jsx
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-04-22 6:51:44 pm
 * Last Modified: 2021-04-26 3:35:03 am
 * -----
 * Copyright (c) 2021 Yuei
 */

import React, { Component } from 'react';
import ScorePanel from './components/ScorePanel';
import GameArea from './components/GameArea';
import RulesModal from './components/RulesModal';
import styles from './App.module.scss';

// TODO: Add score & responsive design

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 5,
      showModal: false,
    };
  }

  render() {
    const { score, showModal } = this.state;
    const toggleModal = () => this.setState({ showModal: !showModal });

    return (
      <main>
        <ScorePanel score={score} />
        <GameArea />
        <div className={styles.rulesContainer}>
          <button
            type="button"
            className={styles.rulesBtn}
            onClick={toggleModal}
          >
            RULES
          </button>
          <RulesModal visible={showModal} handleVisible={toggleModal} />
        </div>
      </main>
    );
  }
}

export default App;
