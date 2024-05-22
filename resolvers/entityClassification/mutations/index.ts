import {handler as authHandler} from '@/src/graphql/v1/auth';
import {baseMutationHandler, handlerMiddleware} from '@/src/graphql/v1/helpers';
import createOrUpdateEntityClassification from './createOrUpdateEntityClassification';
import addEntityClassification from './addEntityClassification';
import updateEntityClassification from './updateEntityClassification';
import deleteEntityClassification from './deleteEntityClassification';

const middleware = handlerMiddleware([authHandler, baseMutationHandler]);

const mutations = {
  createOrUpdateEntityClassification: middleware.execute(createOrUpdateEntityClassification),
  addEntityClassification: middleware.execute(addEntityClassification),
  updateEntityClassification: middleware.execute(updateEntityClassification),
  deleteEntityClassification: middleware.execute(deleteEntityClassification),
};

export default mutations;
