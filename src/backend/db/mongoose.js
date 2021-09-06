const mongoose = require("mongoose");
const validator = require("validator");

mongoose
  .connect("mongodb+srv://Rahul:Rahul@1998@hootsuite.aqwpb.mongodb.net/test", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connected");
  })
  .catch((error) => {
    console.log("error", error);
    console.log("disconnect");
  });
