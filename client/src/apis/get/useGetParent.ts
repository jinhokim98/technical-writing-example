import {requestGet} from '@apis/fetcher';
import BASE_URL from '@constants/baseUrl';
import QUERY_KEYS from '@constants/queryKeys';
import {useSuspenseQuery} from '@tanstack/react-query';
import {Name} from '@typedef/ServiceType';

const useGetParent = () => {
  const getParent = async () => {
    const response = await requestGet<Name>({
      baseUrl: BASE_URL,
      endpoint: `/api/parent/`,
    });

    return response;
  };

  const {data} = useSuspenseQuery({
    queryKey: [QUERY_KEYS.parent],
    queryFn: getParent,
  });

  return {name: data.name};
};

export default useGetParent;
