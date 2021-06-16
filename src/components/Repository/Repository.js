import React from 'react';
import styles from './Repository.module.css';
import classnames from 'classnames';

const Repository = ({ url, name, language, stargazers_count, forks_count, updated_at }) => (
  <div>
    <div className={styles.repo_name_wrap}>
      <a 
        href={url}
        className={styles.repo_name_link}
        target='_blank'
        rel='noopener noreferrer'
      >
        { name }
      </a>
    </div>
    <div className={styles.info_about_repo}>
      <span className={
        classnames({
          [styles.language]: true,
          [styles.html_circle]: language === 'HTML',
          [styles.css_circle]: language === 'CSS',
          [styles.js_circle]: language === 'JavaScript'
        })
      }>
        { language }
      </span>
      <span className={styles.star}>{ stargazers_count }</span>
      <span className={styles.forks}>{ forks_count }</span>
      <span className={styles.date}>
        {'Updated on ' +
        new Date(updated_at).toLocaleDateString(
          'en-GB', 
          {
            day:'numeric',
            month: 'short',
            year: 'numeric'
          }
        )}
      </span>
    </div>
  </div>
);

export default Repository;