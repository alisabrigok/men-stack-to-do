var express = require("express"),
    passport = require("passport"),
    IndexController = require("../controllers/index_controller"),
    middleware = require("../middleware");
    router = express.Router();

router.get("/", middleware.isAlreadyLoggedIn, IndexController.index);

router.get("/signup", IndexController.indexSignup);

router.post("/signup", IndexController.createUser);

router.get("/login", IndexController.indexLogin);

router.post("/login", passport.authenticate("local", IndexController.userLogin), IndexController.successfulLogin);

router.get("/logout", IndexController.indexLogout);

router.get("/user/:id", middleware.isLoggedIn, IndexController.indexUser);

router.put("/user/:id", middleware.isLoggedIn, IndexController.updateUser);

router.delete("/user/:id", middleware.isLoggedIn, IndexController.deleteUser);

module.exports = router;