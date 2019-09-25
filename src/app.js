import express, { json } from "express";
import morgan from "morgan";
import bodyParser from 'body-parser';
//rutas personales
import login from "./routes/login";
import personal from "./routes/personal";
import demografico from './routes/demograficos';
import direccion from './routes/direccion';
//inisializacion

const app = express();

//midelewares
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan("dev"));
app.use(json());

//routes
app.use("/api/login", login);
app.use("/api/perosnal", personal);
app.use("/api/demografico", demografico);
app.use("/api/direccion", direccion);

export default app;
