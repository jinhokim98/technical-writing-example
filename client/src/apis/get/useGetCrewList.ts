import {requestGet} from '@apis/fetcher';
import BASE_URL from '@constants/baseUrl';
import QUERY_KEYS from '@constants/queryKeys';
import {useQuery} from '@tanstack/react-query';
import {Crew} from 'typedef/ServiceType';

const useGetCrewList = () => {
  const getCrewList = async () => {
    const response = await requestGet<Crew[]>({
      baseUrl: BASE_URL,
      endpoint: '/api/crew-list',
    });

    return response;
  };

  const {data} = useQuery({
    queryKey: [QUERY_KEYS.crewList],
    queryFn: getCrewList,
  });

  return {crewList: data ?? []};
};

export default useGetCrewList;
