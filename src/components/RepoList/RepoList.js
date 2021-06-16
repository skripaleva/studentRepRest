import React from 'react';
import Repository from '../Repository/Repository'
import styles from './RepoList.module.css';

const RepoList = ({ repoList, infoAboutUser, onClickNext, onClickBack, firstRepo, lastRepo }) => {

return(
  <div className={styles.wrap}>
    {repoList.length < 6 ?
      <ol className={styles.repo_list}>
        {repoList.map(repo => (
          <li key={repo.id} className={styles.repo_name_wrap}>
            <Repository 
              url={repo.svn_url}
              name={repo.name}
              language={repo.language}
              stargazers_count={repo.stargazers_count}
              forks_count={repo.forks_count}
              updated_at={repo.updated_at}
            />
          </li>
        ))}
      </ol> :
      <div>
        <ol className={styles.repo_list}>
          {repoList.slice(firstRepo, lastRepo).map(repo => (
            <li key={repo.id} className={styles.repo_name_wrap}>
              <Repository 
                url={repo.svn_url}
                name={repo.name}
                language={repo.language}
                stargazers_count={repo.stargazers_count}
                forks_count={repo.forks_count}
                updated_at={repo.updated_at}
              />
            </li>
          ))}
        </ol>
        <div className={styles.buttons_wrap}>
          <button
            className={styles.button}
            onClick={()=>onClickBack()}
            disabled={firstRepo < 5}
          >
            Назад
          </button>
          <button
            className={styles.button}
            onClick={()=>onClickNext()}
            disabled={repoList.length - lastRepo <= 0}
          >
            Далее
          </button>
        </div>
      </div>
    }  
  </div>
)};

export default RepoList;