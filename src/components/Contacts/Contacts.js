import React from 'react';
import styles from './Contacts.module.css';

const userContacts = {
  email: 'teador6676@gmail.com',
  phoneNumber: '+7(917)612-56-54'
};

const Contacts = () => (
  <div className={styles.wrap}>
    <a href='mailto:teador6676@gmail.com' className={styles.email_link}>
      { userContacts.email }
    </a>
    <a href='tg://resolve?domain=teador_avesador' className={styles.phone_link}>
      { userContacts.phoneNumber }
    </a>
    <div className={styles.social_networks}>
      <a
        href='https://github.com/TeadorAvesador'
        target='_blank'
        rel='noopener noreferrer'
      >
        <div className={styles.github}></div>
      </a>
      <a
        href='https://vk.com/teador6676'
        target='_blank'
        rel='noopener noreferrer'
      >
        <div className={styles.vkontakte}></div>
      </a>
      <a
        href='https://www.instagram.com/teador_avesador/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <div className={styles.instagram}></div>
      </a>
    </div>
  </div>
);
 
export default Contacts;