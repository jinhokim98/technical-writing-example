import {requestPostWithoutResponse} from '@apis/fetcher';
import BASE_URL from '@constants/baseUrl';
import QUERY_KEYS from '@constants/queryKeys';
import {useMutation, useQueryClient} from '@tanstack/react-query';

type CreateCrewProps = {
  nickname: string;
  stack: string;
};

const usePostCrew = () => {
  const queryClient = useQueryClient();

  const createCrew = async ({nickname, stack}: CreateCrewProps) => {
    const crew = {
      nickname,
      stack,
      likes: 0,
      isLike: false,
      image:
        'https://oopy.lazyrockets.com/api/v2/notion/image?src=https%3A%2F%2Ftechcourse-storage.s3.ap-northeast-2.amazonaws.com%2Fwooteco.webp&blockId=202af4c7-6ac9-4e3a-bb4e-6a94cca88d48',
    };

    await requestPostWithoutResponse({
      baseUrl: BASE_URL,
      endpoint: '/api/crew',
      body: crew,
    });
  };

  const {mutate} = useMutation({
    mutationFn: createCrew,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: [QUERY_KEYS.crewList], refetchType: 'inactive'});
    },
  });

  return {
    createCrew: mutate,
  };
};

export default usePostCrew;
