import {Context} from '@/src/graphql/v1';

const createOrUpdateEntityClassification = async (
  parent: any,
  args: any,
  context: Context,
) => {
  const {data, select} = args;
  const {entityInformationId} = data;
  return await context.prisma.entityClassification.upsert({
    where: {entityInformationId},
    update: {
      ...data,
      updatedAt: new Date().toISOString(),
      updatedByUserId: context.userId,
    },
    create: {
      entityInformationId,
      ...data,
      createdByUserId: context.userId!,
    },
    select,
  });
};

export default createOrUpdateEntityClassification;
