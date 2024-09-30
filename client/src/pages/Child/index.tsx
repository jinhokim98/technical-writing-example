import useGetChild from '@apis/get/useGetChild';
import style from './style.module.css';

const Child = () => {
  const {name} = useGetChild();

  return <div className={style.child}>{name}</div>;
};

export default Child;
