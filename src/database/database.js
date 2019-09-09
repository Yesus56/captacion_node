import Sequelize from "sequelize";
import config from "./database.json";

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
