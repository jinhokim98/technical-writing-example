import {Link, useNavigate} from 'react-router-dom';
import styles from './style.module.css';
import useGetCrewList from '@apis/get/useGetCrewList';

const CrewList = () => {
  const navigate = useNavigate();
  const {crewList} = useGetCrewList();

  const goNewCrew = () => {
    navigate('/crew/new');
  };

  return (
    <div className={styles.container}>
      <button onClick={goNewCrew} className={styles.crewNew}>
        크루 추가
      </button>
      <ul className={styles.crewList}>
        {crewList.map(crew => (
          <li key={crew.nickname} className={styles.crewItem}>
            <Link to={`/crew/${crew.nickname}`}>
              <div className={styles.content}>
                <p className={styles.nickname}>{crew.nickname}</p>
                <p className={styles.stack}>{crew.stack}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrewList;
