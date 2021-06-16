import React from 'react';
import styles from './TodoFilter.module.css';
import classnames from 'classnames';

const TodoFilter = ({ items, onClickSort, sorting }) => {
  const completedItemsCount = items.filter(item => item.isDone).length;
  const notCompletedItemsCount = items.filter(item => !item.isDone).length;

  return (
    <div className={styles.wrap}>
      <div className={styles.button_group}>
        <button 
          className={classnames({
            [styles.button]: true,
            [styles.selected]: sorting === 'Завершенные'
          })}
          onClick={()=>onClickSort('Завершенные')}
        >
          Завершенные
          <span className={styles.items_count}>
            {completedItemsCount}
          </span>
        </button>
        <button 
          className={classnames({
            [styles.button]: true,
            [styles.selected]: sorting === 'Незавершенные'
          })}
          onClick={()=>onClickSort('Незавершенные')}
        >
          Незавершенные
          <span className={styles.items_count}>
            {notCompletedItemsCount}
          </span>
        </button>
        <button 
          className={classnames({
            [styles.button]: true,
            [styles.selected]: sorting === 'Все'
          })}
          onClick={()=>onClickSort('Все')}
        >
          Все
        </button>
      </div>
    </div>
  )
};

export default TodoFilter;