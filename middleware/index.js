module.exports = {
    isLoggedIn: function (req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }

        req.flash("error", "YOU AREN'T LOGGED IN!");
        res.redirect("/");
    },

    isAlreadyLoggedIn: function (req, res, next) {
        if (!req.isAuthenticated()) {
            return next();
        }

        res.redirect("/todos");
    }
}