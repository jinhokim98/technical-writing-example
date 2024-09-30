import crewHandler from './handlers/crew';
import hierarchyHandler from './handlers/Hierarchy';

const handlers = [...crewHandler, ...hierarchyHandler];

export default handlers;
