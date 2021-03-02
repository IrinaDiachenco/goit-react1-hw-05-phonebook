import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import styles from './Filter.module.css';

const Filter = ({ filter, onChange }) => {
  const uniqId = uuidv4();
  return (
    <input
      className={styles.input}
      type='text'
      name='filter'
      value={filter}
      onChange={({ target }) => onChange(target.value)}
      placeholder='Enter name for Search'
      id={uniqId}
    />
  )
};

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;