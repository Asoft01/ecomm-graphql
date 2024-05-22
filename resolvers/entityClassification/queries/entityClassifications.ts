import {Context} from '@/src/graphql/v1';

const entityClassifications = async (parent: any, args: any, context: Context) => {
  return await context.prisma.entityClassification.findMany({
    orderBy: args.orderBy || {entityName: 'asc'},
    where: {
      ...args.where,
    },
    skip: args.skip,
    take: args.take,
    select: args.select || {},
  });
};

export default entityClassifications;
