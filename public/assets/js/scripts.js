var deleteForm = document.getElementsByClassName("todo__delete-form"),
    editForm = document.getElementsByClassName("todo__edit-form"),
    doneForm = document.getElementsByClassName("todo__done-form"),
    unDoneForm = document.getElementsByClassName("todo__undone-form"),
    todoList = document.getElementsByClassName("todo__list"),
    errorAlert = document.getElementsByClassName("u-error"),
    successAlert = document.getElementsByClassName("u-success"),
    closeButton = document.getElementsByClassName("u-close"),
    closeTimer = document.getElementsByClassName("u-close__timer"),
    homePage = document.getElementsByClassName("home");

var submitForm = function () {
    this.submit();
};

var updateItem = function () {

    var self = this;
    var todoSpan = this.children[0];
    var updateInput = this.children[1];
    var currentTodo = todoSpan.innerHTML;

    todoSpan.style.display = "none";
    updateInput.type = "text";

    updateInput.focus();

    updateInput.onblur = function () {
        var updatedTodo = updateInput.value;

        if (currentTodo !== updatedTodo) {
            self.submit();
        } else {
            todoSpan.style.display = "inline-block";
            updateInput.type = "hidden";
        }
    };
};

for (i = 0; i < deleteForm.length; i++) {
    deleteForm[i].addEventListener("click", submitForm);
}

for (i = 0; i < doneForm.length; i++) {
    doneForm[i].addEventListener("click", submitForm);
}

for (i = 0; i < unDoneForm.length; i++) {
    unDoneForm[i].addEventListener("click", submitForm);
}

for (i = 0; i < editForm.length; i++) {
    editForm[i].addEventListener("click", updateItem);
}

if (todoList.length) {
    if (!todoList[0].children.length) {
        var emptyList = document.createElement("LI");
        var emptyness = document.createTextNode("Here is just like life; empty... Do something maybe?");
        emptyList.appendChild(emptyness);
        emptyList.style.color = "#c2c2c2";
        todoList[0].appendChild(emptyList);
    }
}

var timeout;

function countdown(closeTimer, alertType) {
    var timeleft = 3;
    var timer = setInterval(function () {
        closeTimer.innerHTML = "(" + --timeleft + ")";
        if (timeleft <= 0)
            clearInterval(timer);
    }, 1000);

    timeout = setTimeout(function () {
        if (alertType) {
            alertType.parentNode.removeChild(alertType);
        }
    }, 3000);
}


if ((successAlert.length || errorAlert.length) && !homePage.length) {
    var alertType = successAlert[0] || errorAlert[0];

    countdown(closeTimer[0], alertType);

    closeButton[0].addEventListener("click", function () {
        this.parentNode.remove();
        clearTimeout(timeout);
    });
}