import {useState} from 'react';
import styles from './style.module.css';
import usePostCrew from '@apis/post/usePostCrew';
import {useNavigate} from 'react-router-dom';

const CrewNew = () => {
  const navigate = useNavigate();

  const [nickname, setNickname] = useState('');
  const [stack, setStack] = useState('');

  const {createCrew} = usePostCrew();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createCrew({nickname, stack});
  };

  const goHome = () => {
    navigate('/');
  };

  return (
    <form className={styles.container} onSubmit={onSubmit}>
      <input
        className={styles.input}
        value={nickname}
        onChange={event => setNickname(event.target.value)}
        placeholder="nickname"
      />
      <input
        className={styles.input}
        value={stack}
        onChange={event => setStack(event.target.value)}
        placeholder="stack"
      />
      <div className={styles.buttonGroup}>
        <button className={styles.button} type="submit">
          추가
        </button>
        <button className={styles.button} type="button" onClick={goHome}>
          홈으로
        </button>
      </div>
    </form>
  );
};

export default CrewNew;
