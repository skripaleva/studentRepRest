import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import About from '../About/About';
import Todo from '../Todo/Todo';

import styles from './App.module.css';

const App = () => (
  <Router>
    <div className={styles.wrap}>
    <a 
      href='https://webheroschool.ru/'
      target='_blank'
      rel='noopener noreferrer'
      className={styles.school_link}
    >
      <div className={styles.school_logo}></div>
    </a>
      <div className={styles.menu_list}>
        <NavLink to='/todo' className={styles.button} activeClassName={styles.active}>
          Дела
        </NavLink>
        <NavLink to='/' exact className={styles.button} activeClassName={styles.active}>
          Обо мне
        </NavLink>
      </div>
       <Route path='/' exact component={About} />
       <Route path='/todo' component={Todo} />
    </div>
  </Router>
);


export default App;