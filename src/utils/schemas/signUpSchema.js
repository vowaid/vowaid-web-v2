import * as Yup from 'yup';

import SchemaFields from './schemaFields';

export default Yup.object().shape({
  name: SchemaFields.name
    .required('Required'),
  dob: SchemaFields.dob,

  email: SchemaFields.email
    .required('Required'),
  phone: SchemaFields.phone,

  branch: SchemaFields.branch
    .required('Required'),
  rank: SchemaFields.rank
    .required('Required'),
  discharge: SchemaFields.discharge
    .required('Required'),
  serviceDateStart: SchemaFields.serviceDateStart
    .required('Required'),
  endActiveService: SchemaFields.endActiveService
    .required('Required'),
  dischargeDate: SchemaFields.dischargeDate
    .required('Required'),

  programs: SchemaFields.programs
    .required('Required'),

  username: SchemaFields.username
    .required('Required'),
  password: SchemaFields.password
    .required('Required'),
});
