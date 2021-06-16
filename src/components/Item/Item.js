import React from 'react';
import PropTypes from 'prop-types';
import styles from './Item.module.css';
import classnames from 'classnames';

class Item extends React.Component {

  onClickDefocus = () => {
    this.props.onChangeItem(document.getElementById(this.props.id).textContent, this.props.id);
  };

  render() {
    const { value, isDone, id, onClickDone, onClickDelete, onClickRedact } = this.props;

    return(
      <div className={styles.item_wrap}>
        <input 
          type='checkbox'
          className={styles.checkbox}
          checked={isDone}
          onChange={() => {}}
        />
        <label 
          htmlFor='checkbox'
          className={styles.checkbox_label}
          onClick={() => onClickDone(id)}
        >
          <div 
            id= {id}
            className={classnames({
              [styles.item_text]:true,
              [styles.item_done]: isDone
            })}
            contentEditable={false}
            onBlur={this.onClickDefocus}
          >
            { value }
          </div>
        </label>
        <div
          className={classnames({
            [styles.pencil_icon]: true,
            [styles.pencil_icon_done]: isDone
          })}
          onClick={()=> onClickRedact(id, isDone)}
        ></div>
        <div className={styles.delete_icon} onClick={() => onClickDelete(id)}></div>
      </div>
    );
  };
};

Item.defaultProps = {
  value: 'Задача не найдена'
};

 Item.propTypes = {
  value: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  onClickDone: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
  onClickRedact: PropTypes.func.isRequired,
  onChangeItem: PropTypes.func.isRequired
 };

export default Item;