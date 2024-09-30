import {useState} from 'react';
import {useParams} from 'react-router-dom';
import styles from './style.module.css';
import likeFilled from '@assets/like_filled.svg';
import likeOutline from '@assets/like_outline.svg';
import useGetCrew from '@apis/get/useGetCrew';

const CrewDetail = () => {
  const {nickname} = useParams<{nickname: string}>();

  const {crew} = useGetCrew(nickname ?? '');
  const [isLike, setIsLike] = useState(crew?.isLike || false);

  const handleLikeToggle = () => {
    setIsLike(prevIsLike => !prevIsLike);
  };

  return (
    <div className={styles.container}>
      <img className={styles.image} src={crew?.image} alt={crew?.nickname} />
      <div className={styles.details}>
        <h1 className={styles.nickname}>{crew?.nickname}</h1>
        <p className={styles.stack}>Stack: {crew?.stack}</p>
        <p className={styles.likes}>Likes: {crew?.likes}</p>
        <button className={styles.likeButton} onClick={handleLikeToggle}>
          <img src={isLike ? likeFilled : likeOutline} alt="Like Button" />
        </button>
      </div>
    </div>
  );
};

export default CrewDetail;
