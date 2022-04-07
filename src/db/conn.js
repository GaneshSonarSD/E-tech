/*const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://admin:admin@cluster0.jkxiq.mongodb.net/accesslist?retryWrites=true&w=majority", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex: true
}).then(() => {
    console.log(`conneting success`);
}).catch((e) =>{
    console.log(`no connection`);
})*/
const mongoose = require("mongoose");
const conn_str =
  "mongodb+srv://admin:admin@cluster0.jkxiq.mongodb.net/accesslist?retryWrites=true&w=majority";

mongoose
  .connect(conn_str, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected successfully..."))
  .catch((error) => console.log(error));

const userSchema = new mongoose.Schema({
  PM1: Number,
  PM2: Number,
  PM10: Number,
  Gas: Number,
  Temperature: Number,
  Humidity: Number,
});

const User = new mongoose.model("user", userSchema);