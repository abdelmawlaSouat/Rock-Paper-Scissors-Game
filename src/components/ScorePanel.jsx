/*
 * File: ScorePanel.jsx
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-04-22 7:22:29 pm
 * Last Modified: 2021-04-23 12:45:12 am
 * -----
 * Copyright (c) 2021 Yuei
 */

import React, { Component } from 'react';

import PropTypes from 'prop-types';
import styles from './ScorePanel.module.scss';
import logo from '../assets/images/logo-bonus.svg';

class ScorePanel extends Component {
  render() {
    const { score } = this.props;

    return (
      <div className={styles.scorePanel}>
        <img
          className={styles.logo}
          src={logo}
          alt="Rock, Paper, Scissors, Lizard, Spock"
        />

        <div className={styles.scoreContainer}>
          <span>SCORE</span>
          <span className={styles.score}>{score}</span>
        </div>
      </div>
    );
  }
}

ScorePanel.propTypes = {
  score: PropTypes.number.isRequired,
};

export default ScorePanel;
