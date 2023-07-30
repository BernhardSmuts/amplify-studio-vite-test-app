// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Branch, Car } = initSchema(schema);

export {
  Branch,
  Car
};