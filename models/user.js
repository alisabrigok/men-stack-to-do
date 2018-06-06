var mongoose = require("mongoose"),
    passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: String
});

UserSchema.plugin(passportLocalMongoose, {
    errorMessages: {
        IncorrectPasswordError: "INCORRECT USER OR PASS",
        IncorrectUsernameError: "INCORRECT USER OR PASS",
        MissingUsernameError: "USERNAME IS REQUIRED",
        MissingPasswordError: "PASSWORD IS REQUIRED",
        UserExistsError: "USER ALREADY EXISTS"
    }
});

module.exports = mongoose.model("User", UserSchema);