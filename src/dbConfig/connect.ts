import { Sequelize } from 'sequelize';

const sequelizeInstance = new Sequelize(process.env.PG_DATABASE_URL!);

sequelizeInstance.authenticate().then(()=> {
  console.log("Db connected successfully");
}).catch((error: any)=> {
  console.log(error);
});

export const sequelize = sequelizeInstance;