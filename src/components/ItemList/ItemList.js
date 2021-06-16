import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item/Item';
import styles from './ItemList.module.css'

const ItemList = ({ sorting, sortingValue, onClickDone, onClickDelete, onClickRedact, onChangeItem }) => (
  <div>
    { sorting.length === 0 & sortingValue !== 'Завершенные' ?
      <div className={styles.empty_list}>
        <div className={styles.no_deals_picture}></div>
        <p className={styles.no_deals_message}>Вы ещё не добавили ни одной задачи</p>
        <p className={styles.do_it_message}>Сделайте это прямо сейчас!</p>
      </div> :
      <ul className={styles.item_list}>
        {sorting.map(item => <li key={item.id}>
          <Item 
            value={item.value}
            isDone={item.isDone}
            id={item.id}
            onClickDone={onClickDone}
            onClickDelete={onClickDelete}
            onClickRedact={onClickRedact}
            onChangeItem={onChangeItem}
          />
        </li>)}
      </ul>
    }
  </div>
);

ItemList.propTypes = {
 sorting: PropTypes.array.isRequired,
 sortingValue: PropTypes.string.isRequired,
 onClickDone: PropTypes.func.isRequired,
 onClickDelete: PropTypes.func.isRequired,
 onClickRedact: PropTypes.func.isRequired,
 onChangeItem: PropTypes.func.isRequired
};

export default ItemList;