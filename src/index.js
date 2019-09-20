import './config/config';
import app from "./app";


app.listen(process.env.PORT, err => {
  if (err) throw new Error(err);
  console.log(`ervido conectaod al ${process.env.PORT}`);
});