import app from "./app";

app.listen("6000", err => {
  if (err) throw new Error(err);
  console.log("servidor 6000");
});
