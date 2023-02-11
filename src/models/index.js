// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Area, Person, AreaPerson } = initSchema(schema);

export {
  Area,
  Person,
  AreaPerson
};