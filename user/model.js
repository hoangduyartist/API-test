var bcrypt = require('bcrypt');
var mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,

    username: { type: String, required: true },
    email: { type: String, required: true },
    isVerified: { type: Boolean, required: true, default: false },
    password: { type: String, required: true },
    role: { type: String, required: true, default: "user" },
    profile: {
        fullname: {type: String, default: null},
        phone: {type: String, default: null },
        birthday: {type: String, default: null}
    }
});

//hash password
userSchema.pre('save', function (next) {
    var user = this;
    bcrypt.hash(user.password, 10, function (err, hash) {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });  
});

module.exports = mongoose.model("users",userSchema);
