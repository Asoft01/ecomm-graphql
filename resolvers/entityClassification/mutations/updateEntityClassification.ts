import { NotFoundError } from '@/src/errors';
import {Context} from '@/src/graphql/v1';

const updateEntityClassification = async (parent: any, args: any, context: Context) => {
  const {id, data, select} = args;

  const entityClassification = await context.prisma.entityClassification.update({
    where: {id},
    data: {
      ...data,
      updatedAt: new Date().toISOString(),
      updatedByUserId: context.userId,
    },
    select,
  });

  if (!entityClassification) {
    throw new NotFoundError('entityClassification not found');
  }

  return entityClassification;
};

export default updateEntityClassification;
