import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import TodoFilter from '../TodoFilter/TodoFilter';
import Card from '@material-ui/core/Card';
import styles from './Todo.module.css';

const sortingItemsTitle = {
  completed: 'Завершенные',
  unfinished: 'Незавершенные',
  all: 'Все'
};

class Todo extends React.Component {
  state = {
    items:
      JSON.parse(localStorage.getItem('editedDealList') ||
        '[{"value":"Задача 1","isDone":false,"id":1},{"value":"Задача 2","isDone":false,"id":2}]'
      ),
    count: 2,
    isEmpty: false,
    isExist: false,
    isEditing: false,
    sorting: sortingItemsTitle.all
  };

  onClickDone = id => {
    if (!this.state.isEditing) {
      const newItemList = this.state.items.map(item => {
        const newItem = { ...item };

        if (item.id === id) {
          newItem.isDone = !item.isDone;
        };

        return newItem;
      });

      this.setState({ items: newItemList });
    };
  };

  onClickDelete = id => {
    const newItemList = this.state.items.filter(item => item.id !== id);
    this.setState({ items: newItemList });
  };

  onClickAdd = value => {
    if (value !== '' & !this.state.items.some(item => item.value.toLowerCase() === value.toLowerCase())) {
      this.setState(state => ({
        items: [
          ...state.items,
          {
            value,
            isDone: false,
            id: state.count + 1
          }
        ],
        count: state.count + 1,
        isEmpty: false,
        isExist: false
      }));
    } else {
      this.setState(state => (
        {
          isEmpty: value === '',
          isExist: value !== ''
        }
      ));
    };
  };

  onClickRedact = (id, isDone) => {
    if (!isDone) {
      document.getElementById(id).contentEditable = true;
      document.getElementById(id).focus();
      this.setState({ isEditing: true });
    };
  };

  onChangeItem = (newValue, id) => {
    const newItemList = this.state.items.map(item => {
      const newItem = { ...item };

      if (item.id === id) {
        newItem.value = newValue;
      };
      return newItem;
    });

    setTimeout(() => {
      this.setState(state => ({ items: newItemList, isEditing: false }));
    }, 200);
    document.getElementById(id).contentEditable = false;
  };

  onClickSort = sorting => this.setState({ sorting: sorting });

  render() {
    let dealListString = JSON.stringify(this.state.items);
    localStorage.setItem('editedDealList', dealListString);

    let sortingItems;
    switch (this.state.sorting) {
      case sortingItemsTitle.completed: sortingItems = this.state.items.filter(item => item.isDone);
        break;
      case sortingItemsTitle.unfinished: sortingItems = this.state.items.filter(item => !item.isDone);
        break;
      case sortingItemsTitle.all: sortingItems = this.state.items;
        break;
    };

    return (
      <Card className={styles.wrap}>
        <div className={styles.header}>
          <h1 className={styles.title}>Список моих дел</h1>
          <TodoFilter
            items={this.state.items}
            onClickSort={this.onClickSort}
            sorting={this.state.sorting}
          />
        </div>
        <div className={styles.items_section}>
          <ItemList
            sorting={sortingItems}
            sortingValue={this.state.sorting}
            onClickDone={this.onClickDone}
            onClickDelete={this.onClickDelete}
            onClickRedact={this.onClickRedact}
            onChangeItem={this.onChangeItem}
          />
          <InputItem
            onClickAdd={this.onClickAdd}
            isEmpty={this.state.isEmpty}
            isExist={this.state.isExist}
          />
        </div>
      </Card>
    );
  };
};

export default Todo;