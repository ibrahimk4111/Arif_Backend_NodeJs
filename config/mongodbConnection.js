const config = require("./dev");
const mongoose = require("mongoose");

const uri = config.dbUrl;

mongoose
  .connect(uri)
  .then(() => console.log("Mongoose Connected"))
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

  