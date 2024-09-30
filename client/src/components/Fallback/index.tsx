import style from './style.module.css';

type FallbackProps = {
  text: string;
};

const Fallback = ({text}: FallbackProps) => {
  return <div className={style.fallback}>{text}</div>;
};

export default Fallback;
