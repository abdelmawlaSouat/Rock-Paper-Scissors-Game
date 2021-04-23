/*
 * File: RulesModal.jsx
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-04-23 3:15:14 am
 * Last Modified: 2021-04-23 3:31:27 am
 * -----
 * Copyright (c) 2021 Yuei
 */

import React, { Component } from 'react';
import styles from './RulesModal.module.scss';
import rulesImg from '../assets/images/image-rules-bonus.svg';
import closeIcon from '../assets/images/icon-close.svg';

class RulesModal extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h2>RULES</h2>
        <img src={rulesImg} alt="Rules" />
        <img className={styles.closeIcon} src={closeIcon} alt="Close Icon" />
      </div>
    );
  }
}

export default RulesModal;
