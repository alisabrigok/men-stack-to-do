var express = require("express"),
    middleware = require("../middleware"),
    TodosController = require("../controllers/todos_controller"),
    router = express.Router({
        mergeParams: true
    });

router.get("/", middleware.isLoggedIn, TodosController.index);

router.post("/", middleware.isLoggedIn, TodosController.create);

router.put("/:id", middleware.isLoggedIn, TodosController.update);

router.delete("/:id", middleware.isLoggedIn, TodosController.delete);

router.get("/done", middleware.isLoggedIn, TodosController.indexDone);

router.post("/done", middleware.isLoggedIn, TodosController.createDone);

router.put("/done/:id", middleware.isLoggedIn, TodosController.updateDone);

router.delete("/done/:id", middleware.isLoggedIn, TodosController.deleteDone);

router.get("/pending", middleware.isLoggedIn, TodosController.indexPending);

router.post("/pending", middleware.isLoggedIn, TodosController.createPending);

router.put("/pending/:id", middleware.isLoggedIn, TodosController.updatePending);

router.delete("/pending/:id", middleware.isLoggedIn, TodosController.deletePending);

module.exports = router;