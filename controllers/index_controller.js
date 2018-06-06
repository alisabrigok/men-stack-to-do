var User = require("../models/user"),
    passport = require("passport");

module.exports = {
    index: function (req, res) {
        res.render("home");
    },

    indexSignup: function (req, res) {
        res.render("signup");
    },

    indexUser: function (req, res) {
        var userId = req.params.id;
        User.findById(userId, function (err, user) {
            if (err) {
                req.flash("error", "Error! User Couldn't Be Found.");
                res.redirect("back");
            } else {
                res.render("todos/user", {
                    username: user.username,
                    password: user.password
                });
            }
        });
    },

    createUser: function (req, res) {
        var newUser = new User({
            username: req.body.username
        });
        var password = req.body.password;
        User.register(newUser, password, function (err, user) {

            if (err) {
                req.flash("error", err.message);
                res.redirect("/signup");
            } else {
                passport.authenticate("local")(req, res, function () {
                    req.flash("success", "Successfuly Signed Up!");
                    res.redirect("/todos");
                });
            }
        });
    },

    updateUser: function (req, res) {
        var userId = req.params.id;
        var newUsername = req.body.username;
        var newPassword = req.body.password;

        User.findById(userId, function (err, user) {
            if (err) {
                req.flash("error", "Error! Couldn't Be Updated.");
                res.redirect("/todos");
            } else {             
                if (newPassword !== "oldpassword") {
                    user.setPassword(newPassword, function () {
                        if (newUsername) user.username = newUsername;
                        user.save();
                        req.flash("success", "UPDATED! PLEASE RE-LOGIN.");
                        res.redirect("/");
                    });
                } else if (newPassword === "oldpassword") {
                    if (newUsername !== user.username) {
                        user.username = newUsername;
                        user.save();
                        req.flash("success", "UPDATED! PLEASE RE-LOGIN.");
                        res.redirect("/");
                    } else if (newUsername === user.username) {
                        req.flash("success", "Successfuly Updated!");
                        res.redirect("back");
                    } else {
                        req.flash("error", "Username Can't Be Empty!");
                        res.redirect("/user/" + userId);
                    }
                } else {
                    req.flash("error", "Password Can't Be Empty!");
                    res.redirect("/user/" + userId);
                }
            }
        });
    },

    deleteUser: function (req, res) {
        var userId = req.params.id;

        User.findByIdAndRemove(userId, function (err) {
            if (err) {
                req.flash("error", "Error! Couldn't Be Deleted.");
                res.redirect("back");
            } else {
                req.flash("success", "DELETED SUCCESSFULY!");
                res.redirect("/");
            }
        });
    },

    userLogin: {
        failureRedirect: "/login",
        failureFlash: true,
    },

    successfulLogin: (req, res) => {
        req.flash("success", "Login Successful!");
        res.redirect("/todos");
    },

    indexLogin: function (req, res) {
        res.render("login");
    },

    indexLogout: function (req, res) {
        req.logout();
        req.flash("success", "LOGOUT SUCCESSFUL");
        res.redirect("/");
    }
}