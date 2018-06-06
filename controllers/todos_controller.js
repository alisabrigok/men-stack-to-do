var Todos = require("../models/todo");

module.exports = {
    index: function (req, res) {
        Todos.find({}, function (err, allTodos) {
            if (err) {
                req.flash("error", "Something Went Wrong!");
                res.redirect("back");
            } else {
                res.render("todos/index", {
                    todos: allTodos
                });
            }
        });
    },

    create: function (req, res) {
        var todoDatas = {
            title: req.body.title,
            author: {
                id: req.user._id,
                username: req.user.username
            }
        };
        Todos.create(todoDatas, function (err, newTodo) {
            if (err) {
                req.flash("error", "Error! Couldn't Be Created.");
                res.redirect("back");
            } else {
                req.flash("success", "Successfully Created!");
                res.redirect("/todos");
            }
        });
    },

    update: function (req, res) {
        var id = req.params.id;
        var updatedTodoDatas = {
            title: req.body.title,
            isDone: req.body.isDone
        };
        Todos.findByIdAndUpdate(id, updatedTodoDatas, function (err, updatedTodos) {
            if (err) {
                req.flash("error", "Error! Couldn't Be Updated.");
                res.redirect("back");
            } else {
                req.flash("success", "Succesfully Updated!");
                res.redirect("/todos");
            }
        });
    },

    delete: function (req, res) {
        var id = req.params.id;
        Todos.findByIdAndRemove(id, function (err) {
            if (err) {
                req.flash("error", "Error! Couldn't Be Deleted.");
                res.redirect("back");
            } else {
                req.flash("success", "Succesfully Deleted!");
                res.redirect("/todos");
            }
        });
    },

    indexDone: function (req, res) {
        Todos.find({}, function (err, allTodos) {
            if (err) {
                req.flash("error", "Something Went Wrong!");
                res.redirect("back");
            } else {
                res.render("todos/done", {
                    todos: allTodos
                });
            }
        });
    },

    createDone: function (req, res) {
        var todoDatas = {
            title: req.body.title,
            isDone: req.body.isDone,
            author: {
                id: req.user._id,
                username: req.user.username
            }
        };
        Todos.create(todoDatas, function (err, newTodo) {
            if (err) {
                req.flash("error", "Error! Couldn't Be Created.");
                res.redirect("back");
            } else {
                req.flash("success", "Succesfully Created!");
                res.redirect("/todos/done");
            }
        });
    },

    updateDone: function (req, res) {
        var id = req.params.id;
        var updatedTodoDatas = {
            title: req.body.title,
            isDone: req.body.isDone
        };
        Todos.findByIdAndUpdate(id, updatedTodoDatas, function (err, updatedTodos) {
            if (err) {
                req.flash("error", "Error! Couldn't Be Updated.");
                res.redirect("back");
            } else {
                req.flash("success", "Succesfully Updated!");
                res.redirect("/todos/done");
            }
        });
    },

    deleteDone: function (req, res) {
        var id = req.params.id;
        Todos.findByIdAndRemove(id, function (err) {
            if (err) {
                req.flash("error", "Error! Couldn't Be Deleted.");
                res.redirect("back");
            } else {
                req.flash("success", "Succesfully Deleted!");
                res.redirect("/todos/done");
            }
        });
    },

    indexPending: function (req, res) {
        Todos.find({}, function (err, allTodos) {
            if (err) {
                req.flash("error", "Something Went Wrong!");
                res.redirect("back");
            } else {
                res.render("todos/pending", {
                    todos: allTodos
                });
            }
        });
    },

    createPending: function (req, res) {
        var todoDatas = {
            title: req.body.title,
            isDone: req.body.isDone,
            author: {
                id: req.user._id,
                username: req.user.username
            }
        };
        Todos.create(todoDatas, function (err, newTodo) {
            if (err) {
                req.flash("error", "Error! Couldn't Be Created.");
                res.redirect("back");
            } else {
                req.flash("success", "Succesfully Created!");
                res.redirect("/todos/pending");
            }
        });
    },

    updatePending: function (req, res) {
        var id = req.params.id;
        var updatedTodoDatas = {
            title: req.body.title,
            isDone: req.body.isDone
        };
        Todos.findByIdAndUpdate(id, updatedTodoDatas, function (err, updatedTodos) {
            if (err) {
                req.flash("error", "Error! Couldn't Be Updated.");
                res.redirect("back");
            } else {
                req.flash("success", "Succesfully Updated!");
                res.redirect("/todos/pending");
            }
        });
    },

    deletePending: function (req, res) {
        var id = req.params.id;
        Todos.findByIdAndRemove(id, function (err) {
            if (err) {
                req.flash("error", "Error! Couldn't Be Deleted.");
                res.redirect("back");
            } else {
                req.flash("success", "Succesfully Deleted!");
                res.redirect("/todos/pending");
            }
        });
    }
}