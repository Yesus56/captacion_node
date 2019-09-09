import app from "./app";

app.listen("5000", err => {
  if (err) throw new Error(err);
  console.log("servidor 5000");
});
