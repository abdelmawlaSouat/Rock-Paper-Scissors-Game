/*
 * File: GameArea.jsx
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-04-23 12:51:31 am
 * Last Modified: 2021-05-20 4:34:49 pm
 * -----
 * Copyright (c) 2021 Yuei
 */

import React, { Component } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import styles from './GameArea.module.scss';

import pentagon from '../assets/images/bg-pentagon.svg';
import scissors from '../assets/images/icon-scissors.svg';
import paper from '../assets/images/icon-paper.svg';
import rock from '../assets/images/icon-rock.svg';
import spock from '../assets/images/icon-spock.svg';
import lizard from '../assets/images/icon-lizard.svg';

const weapons = [
  {
    id: 0,
    container: styles.yellowWeaponContainer,
    type: styles.yellowWeapon,
    img: { src: scissors, alt: 'Scissors' },
  },
  {
    id: 1,
    container: styles.purpleWeaponContainer,
    type: styles.purpleWeapon,
    img: { src: paper, alt: 'Paper' },
  },
  {
    id: 2,
    container: styles.cyanWeaponContainer,
    type: styles.cyanWeapon,
    img: { src: spock, alt: 'Spock' },
  },
  {
    id: 3,
    container: styles.redWeaponContainer,
    type: styles.redWeapon,
    img: { src: rock, alt: 'Rock' },
  },
  {
    id: 4,
    container: styles.lightPurpleWeaponContainer,
    type: styles.lightPurpleWeapon,
    img: { src: lizard, alt: 'Lizard' },
  },
];

class GameArea extends Component {
  constructor(props) {
    super(props);
    this.replay = this.replay.bind(this);
    this.state = {
      step: 1,
      userChoice: -1,
      houseChoice: -1,
      winner: '',
    };
  }

  chooseWeapon(id) {
    this.setState({
      step: 2,
      userChoice: id,
    });

    setTimeout(() => {
      this.setState({
        step: 3,
        houseChoice: Math.floor(Math.random() * weapons.length),
      });
      this.fight();
    }, 1000);
  }

  fight() {
    const { userChoice, houseChoice } = this.state;
    const { score, handleScore } = this.props;
    let winner = '';
    let newScore = score;

    if (userChoice === houseChoice) {
      winner = null;
    } else if (userChoice === 0) {
      winner = houseChoice === 1 || houseChoice === 4 ? 'user' : 'house';
    } else if (userChoice === 1) {
      winner = houseChoice === 2 || houseChoice === 3 ? 'user' : 'house';
    } else if (userChoice === 2) {
      winner = houseChoice === 0 || houseChoice === 3 ? 'user' : 'house';
    } else if (userChoice === 3) {
      winner = houseChoice === 0 || houseChoice === 4 ? 'user' : 'house';
    } else {
      winner = houseChoice === 1 || houseChoice === 2 ? 'user' : 'house';
    }
    this.setState({ winner });

    if (winner) {
      newScore = winner === 'user' ? score + 1 : score - 1;
      handleScore(newScore);
    }
  }

  replay() {
    this.setState({
      step: 1,
      userChoice: -1,
      houseChoice: -1,
    });
  }

  render() {
    const { step, userChoice, houseChoice, winner } = this.state;

    return (
      <div className={styles.container}>
        <div className={styles.gameArea}>
          {/* Weapons Selection */}
          <div
            className={clsx(
              styles.weaponsSelection,
              step !== 1 ? styles.hidden : ''
            )}
          >
            <img className={styles.pentagonBg} src={pentagon} alt="" />

            {weapons.map((weapon) => (
              <button
                type="button"
                key={weapon.id}
                className={weapon.container}
                onClick={() => this.chooseWeapon(weapon.id)}
              >
                <div className={weapon.type}>
                  <img
                    className={styles.weaponImg}
                    src={weapon.img.src}
                    alt={weapon.img.alt}
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Battlefield */}
          <div
            className={clsx(styles.battlefield, step > 1 ? styles.visible : '')}
          >
            {userChoice !== -1 && (
              <div className={styles.userChoice}>
                <div className={weapons[userChoice].type}>
                  <img
                    className={styles.weaponImg}
                    src={weapons[userChoice].img.src}
                    alt={weapons[userChoice].img.alt}
                  />
                </div>
                <span>YOU PICKED</span>
              </div>
            )}

            <div
              className={clsx(
                styles.houseChoice,
                houseChoice === -1 ? styles.transparent : styles.visible
              )}
            >
              <div
                className={
                  houseChoice !== -1
                    ? weapons[houseChoice].type
                    : weapons[0].type
                }
              >
                <img
                  className={clsx(styles.weaponImg, styles.visible)}
                  src={
                    houseChoice !== -1
                      ? weapons[houseChoice].img.src
                      : weapons[0].img.src
                  }
                  alt={
                    houseChoice !== -1
                      ? weapons[houseChoice].img.alt
                      : weapons[0].img.alt
                  }
                />
              </div>
              <span>THE HOUSE PICKED</span>
            </div>
          </div>
        </div>

        {/* Message of end game */}
        <div className={clsx(styles.endGame, step === 3 ? styles.visible : '')}>
          <span>{!winner && 'EQUAL'}</span>
          <span>{winner === 'user' && 'YOU WIN'}</span>
          <span>{winner === 'house' && 'YOU LOSE'}</span>
          <button type="button" onClick={this.replay}>
            PLAY AGAIN
          </button>
        </div>
      </div>
    );
  }
}

GameArea.propTypes = {
  score: PropTypes.number.isRequired,
  handleScore: PropTypes.func.isRequired,
};

export default GameArea;
