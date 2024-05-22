import {Context} from '@/src/graphql/v1';

const entityClassification = async (parent: any, args: any, context: Context) => {
  const {id, select} = args;

  if (!id) {
    throw new Error('Entity information ID is required');
  }

  const entityClassification = await context.prisma.entityClassification.findUnique({
    where: {
      id,
    },
    select,
  });

  if (!entityClassification) {
    throw new Error('Entity Classification not found');
  }

  return entityClassification;
};

export default entityClassification;
