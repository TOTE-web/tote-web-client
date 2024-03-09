import { Schema, model } from 'mongoose';

const parentCollectionName = 'rolesAndPermissions';

const permissionsSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  }
});

const Permissions = model(`${parentCollectionName}/permissions`, permissionsSchema);

const rolesSchema = new Schema({
  name: {
    type: String,
    unique: true, 
    required: true
  }
});

const Roles = model(`${parentCollectionName}/roles`, rolesSchema);

export { Permissions, Roles };