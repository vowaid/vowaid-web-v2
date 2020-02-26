import * as Yup from 'yup';

import SchemaFields from './schemaFields';

export default Yup.object().shape({
  name: SchemaFields.name
    .required('Required'),

  email: SchemaFields.email
    .required('Required'),
  phone: SchemaFields.phone
    .required('Required'),

  branch: SchemaFields.branch
    .required('Required'),
  rank: SchemaFields.rank
    .required('Required'),
  discharge: SchemaFields.discharge
    .required('Required'),

  message: SchemaFields.message
    .required('Required'),
});
