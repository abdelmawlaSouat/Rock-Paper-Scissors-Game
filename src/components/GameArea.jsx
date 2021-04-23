/*
 * File: GameArea.jsx
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-04-23 12:51:31 am
 * Last Modified: 2021-04-23 2:25:00 am
 * -----
 * Copyright (c) 2021 Yuei
 */

import React, { Component } from 'react';

import styles from './GameArea.module.scss';
import pentagon from '../assets/images/bg-pentagon.svg';
import scissors from '../assets/images/icon-scissors.svg';
import paper from '../assets/images/icon-paper.svg';
import rock from '../assets/images/icon-rock.svg';
import spock from '../assets/images/icon-spock.svg';
import lizard from '../assets/images/icon-lizard.svg';

class GameArea extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.gameArea}>
          <img className={styles.pentagonBg} src={pentagon} alt="" />

          <div className={styles.yellowWeaponContainer}>
            <div className={styles.yellowWeapon}>
              <img className={styles.weaponImg} src={scissors} alt="Scissors" />
            </div>
          </div>

          <div className={styles.purpleWeaponContainer}>
            <div className={styles.purpleWeapon}>
              <img className={styles.weaponImg} src={paper} alt="Paper" />
            </div>
          </div>

          <div className={styles.cyanWeaponContainer}>
            <div className={styles.cyanWeapon}>
              <img className={styles.weaponImg} src={spock} alt="Spock" />
            </div>
          </div>

          <div className={styles.redWeaponContainer}>
            <div className={styles.redWeapon}>
              <img className={styles.weaponImg} src={rock} alt="Rock" />
            </div>
          </div>

          <div className={styles.lightPurpleWeaponContainer}>
            <div className={styles.lightPurpleWeapon}>
              <img className={styles.weaponImg} src={lizard} alt="Lizard" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GameArea;
