import {requestGet} from '@apis/fetcher';
import BASE_URL from '@constants/baseUrl';
import QUERY_KEYS from '@constants/queryKeys';
import {useQuery} from '@tanstack/react-query';
import {Crew} from 'typedef/ServiceType';

const useGetCrew = (nickname: string) => {
  const getCrew = async () => {
    const response = await requestGet<Crew>({
      baseUrl: BASE_URL,
      endpoint: `/api/crew/${nickname}`,
    });

    return response;
  };

  const {data} = useQuery({
    queryKey: [QUERY_KEYS.crew, nickname],
    queryFn: getCrew,
  });

  return {crew: data};
};

export default useGetCrew;
