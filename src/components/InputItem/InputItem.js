import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './InputItem.module.css';

class InputItem extends React.Component {
  state = {
    inputValue: ''
  };

  onButtonClick = () => {
    this.setState({
      inputValue: ''
    });
    this.props.onClickAdd(this.state.inputValue);
  };

  render() {
    const { isEmpty, isExist } = this.props;

    return(
      <div className={styles.input}>
        <div className={classnames({
          [styles.input_wrap]: true,
          [styles.empty_field]: isEmpty,
          [styles.exist_field]: isExist
        })
        }>
          <input
            type='text'
            placeholder='Просто введите сюда название дела...'
            className={styles.input_field}
            value={this.state.inputValue}
            onChange={event => this.setState({inputValue: event.target.value})}
          />
        </div>
        <div className={styles.button} onClick={this.onButtonClick}></div>
      </div>
    );
  };
};

InputItem.propTypes = {
  onClickAdd: PropTypes.func.isRequired,
  isExist: PropTypes.bool.isRequired,
  isEmpty: PropTypes.bool.isRequired
};

export default InputItem;