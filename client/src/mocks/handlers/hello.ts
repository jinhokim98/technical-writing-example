import {http, HttpResponse} from 'msw';
import crewList from '../data/crew.json';
import BASE_URL from '../../constants/baseUrl';
import {Crew} from '../../type/ServiceType';

const mockCrewList = crewList as Crew[];

const crewHandler = [
  http.get(`${BASE_URL}/api/crew`, async () => {
    return HttpResponse.json(mockCrewList);
  }),
];

export default crewHandler;
