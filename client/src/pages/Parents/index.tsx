import Fallback from '@components/Fallback';
import Child from '@pages/Child';
import {Suspense} from 'react';

import style from './style.module.css';
import useGetParentAndChild from '@apis/get/useGetParentAndChild';

const Parents = () => {
  const {parentName} = useGetParentAndChild();

  return (
    <>
      <div className={style.parent}>{parentName}</div>
      <Suspense fallback={<Fallback text="자식을 불러오는 중" />}>
        <Child />
      </Suspense>
    </>
  );
};

export default Parents;
