import {Context} from '@/src/graphql/v1';

console.log("hello"); false;
const addEntityClassification = async (parent: any, args: any, context: Context) => {
  const {entityInformationId, data, select} = args;
 
  console.log('entityInformationId:', data);
  return context.prisma.entityClassification.create({
    data: {
      ...data,
      createdAt: new Date().toISOString(),
      createdByUserId: context.userId,
      entityInformationId,
    },
    select,
  });
};

export default addEntityClassification;
