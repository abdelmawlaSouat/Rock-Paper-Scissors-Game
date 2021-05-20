/*
 * File: App.jsx
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-04-22 6:51:44 pm
 * Last Modified: 2021-05-20 4:56:46 pm
 * -----
 * Copyright (c) 2021 Yuei
 */

import React, { Component } from 'react';
import ScorePanel from './components/ScorePanel';
import GameArea from './components/GameArea';
import RulesModal from './components/RulesModal';
import styles from './App.module.scss';

// TODO: responsive design

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      showModal: false,
    };
  }

  componentDidMount() {
    const { score } = this.state;

    if (localStorage.getItem('score')) {
      this.setState({
        score: parseInt(localStorage.getItem('score'), 10),
      });
    } else {
      localStorage.setItem('score', score);
    }
  }

  render() {
    const { score, showModal } = this.state;
    const toggleModal = () => this.setState({ showModal: !showModal });
    const updateScore = (newScore) => {
      this.setState({ score: newScore });
      localStorage.setItem('score', newScore);
    };

    return (
      <main>
        <ScorePanel score={score} />
        <GameArea score={score} handleScore={updateScore} />
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
