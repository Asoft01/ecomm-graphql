import {handler as authHandler} from '@/src/graphql/v1/auth';
import {handlerMiddleware, baseQueryHandler} from '@/src/graphql/v1/helpers';
import entityClassification from './entityClassification';
import entityClassifications from './entityClassifications';

const middlewares = handlerMiddleware([authHandler, baseQueryHandler]);

const queries = {
  entityClassification: middlewares.execute(entityClassification),
  entityClassifications: middlewares.execute(entityClassifications),
};

export default queries;
