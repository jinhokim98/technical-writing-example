import {requestGet} from '@apis/fetcher';
import BASE_URL from '@constants/baseUrl';
import QUERY_KEYS from '@constants/queryKeys';
import {useSuspenseQueries} from '@tanstack/react-query';
import {Name} from '@typedef/ServiceType';

const useGetParentAndChild = () => {
  const getParent = async () => {
    const response = await requestGet<Name>({
      baseUrl: BASE_URL,
      endpoint: `/api/parent/`,
    });

    return response;
  };

  const getChild = async () => {
    const response = await requestGet<Name>({
      baseUrl: BASE_URL,
      endpoint: `/api/child/`,
    });

    return response;
  };

  const [parent, child] = useSuspenseQueries({
    queries: [
      {
        queryKey: [QUERY_KEYS.parent],
        queryFn: getParent,
      },
      {
        queryKey: [QUERY_KEYS.child],
        queryFn: getChild,
      },
    ],
  });

  return {parentName: parent.data.name, childName: child.data.name};
};

export default useGetParentAndChild;
