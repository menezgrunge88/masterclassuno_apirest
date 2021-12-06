const mgdb = require("mongoose");
const userSchema = new mgdb.Schema({
  full_name: {
    type: String,
    trim: true,
    require: true,
  },
  phone: String,
  adress: String,
  mail: String,
});
mgdb.model("Users", userSchema);
