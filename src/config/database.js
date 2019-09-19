import Sequelize from "sequelize";
import config from "./database.json";
import {connect} from 'mongoose';

export const db = {};


Object.keys(config.database).map(key => {
  let database = config.database[key];

  db[key] = new Sequelize(
    database.database,
    database.username,
    database.password,
    {
      ...database.patch
    }
  );
  db[key]
    .authenticate()
    .then(() => {
      console.log(`Coneccion establecida con ${key}.`);
    })
    .catch(err => {
      console.error("Unable to connect to the database:", err);
    });
});

connect('mongodb://localhost:27017/dbconcurso',{useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
  console.log('conectado dbconcurso en mongo');
}).catch((err) => {
  console.log('dbconcurso mongo a fallado');
});