import {Context} from '@/src/graphql/v1';
import {NotFoundError} from '@/src/errors';

const deleteEntityClassification = async (parent: any, args: any, context: Context) => {
  const {id} = args;
  const entityClassification = await context.prisma.entityClassification.delete({
    where: {id},
  });

  if (!entityClassification) {
    throw new NotFoundError('entityClassification not found');
  }

  return entityClassification.id;
};

export default deleteEntityClassification;
