import {Crew} from './../../typedef/ServiceType';
import {http, HttpResponse} from 'msw';
import crewList from '../data/crew.json';
import BASE_URL from '../../constants/baseUrl';

const mockCrewList = crewList as Crew[];

const crewHandler = [
  http.get(`${BASE_URL}/api/crew-list`, async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return HttpResponse.json(mockCrewList);
  }),

  http.get(`${BASE_URL}/api/crew/:nickname`, async ({params}) => {
    const {nickname} = params;

    const target = mockCrewList.find(crew => crew.nickname === nickname);
    return HttpResponse.json(target);
  }),

  http.post(`${BASE_URL}/api/crew`, async ({request}) => {
    const crew = (await request.json()) as Crew;
    mockCrewList.unshift(crew);

    return HttpResponse.json();
  }),
];

export default crewHandler;
