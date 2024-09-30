import BASE_URL from '@constants/baseUrl';
import {http, HttpResponse} from 'msw';
import parentData from '../data/parent.json';
import childData from '../data/child.json';
import {Name} from '@typedef/ServiceType';

const parent = parentData as Name;
const child = childData as Name;

const hierarchyHandler = [
  http.get(`${BASE_URL}/api/parent`, async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return HttpResponse.json(parent);
  }),

  http.get(`${BASE_URL}/api/child`, async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return HttpResponse.json(child);
  }),
];

export default hierarchyHandler;
