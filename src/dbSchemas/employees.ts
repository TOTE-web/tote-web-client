import { Schema } from 'mongoose';

const personalInformation = new Schema({
  full_name: { type: String, required: true },
  dob: { type: Date, required: true },
  created_at: { type: Date, default: Date.now },
  gender: { type: String, enum: [ 'Male', 'Female', 'Other' ], required: true },
});

const contactInformation = new Schema({
  phone_number: { type: String, required: true },
  email_id: { type: String, required: true },
  address: {
    street: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: String }
  },
  emergency_contact: {
    name: { type: String },
    phone_number: { type: String }
  }
});

const employmentDetails = new Schema({
  employee_id: { type: String, required: true },
  job_title: { type: String, required: true },
  department: { type: String, required: true },
  manager: { type: Schema.Types.ObjectId },
  employment_type: { type: String, enum: [ 'Full-time', 'Part-time', 'Contract' ], required: true },
  start_date: { type: Date, required: true },
  probation_end_date: { type: Date },
  employment_status: { type: String, enum: [ 'Active', 'Inactive', 'On Leave' ], default: 'Active' }
});

const compensationInformation = new Schema({
  salary: { type: Number, required: true },
  pay_frequency: { type: String, enum: [ 'Monthly', 'Bi-weekly' ], required: true },
  bankAccountDetails: {
    bank_name: { type: String },
    account_number: { type: String }
  },
  benefits_enrollment: {
    health_insurance: { type: Boolean, default: false },
    retirement_plan: { type: Boolean, default: false }
  }
});

const taxInformation = new Schema({
  tax_id: { type: String, required: true },
  filing_status: { type: String },
  withholding_allowances: { type: Number }
});

// const attendance = new Schema({
//   date: { type: Date, required: true },
//   status: { type: String, enum: ['Present', 'Absent', 'Late', 'Half-Day'], default: 'Present' },
//   remarks: String,
//   created_at: { type: Date, default: Date.now },
//   updated_at: { type: Date, default: Date.now }
// });

const employeeSchema = new Schema({
  personal_information: personalInformation,
  contact_information: contactInformation,
  employment_details: employmentDetails,
  compensation_information: compensationInformation,
  tax_information: taxInformation,
  role_type: {
    type: Schema.Types.ObjectId, ref: 'rolesAndPermissions/roles'
  }
});

export default employeeSchema;