/*
 * File: RulesModal.jsx
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-04-23 3:15:14 am
 * Last Modified: 2021-04-23 5:15:12 pm
 * -----
 * Copyright (c) 2021 Yuei
 */

import React, { Component } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './RulesModal.module.scss';
import rulesImg from '../assets/images/image-rules-bonus.svg';
import closeIcon from '../assets/images/icon-close.svg';

class RulesModal extends Component {
  render() {
    const { visible, handleVisible } = this.props;

    return (
      <div className={clsx(styles.container, visible ? styles.visible : '')}>
        <h2>RULES</h2>
        <img src={rulesImg} alt="Rules" />
        <button type="button" onClick={handleVisible}>
          <img className={styles.closeIcon} src={closeIcon} alt="Close Icon" />
        </button>
      </div>
    );
  }
}

RulesModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleVisible: PropTypes.func.isRequired,
};

export default RulesModal;
