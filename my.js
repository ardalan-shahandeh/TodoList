///////////////////TODO List///////////////
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TodoState;
(function (TodoState) {
    TodoState[TodoState["New"] = 0] = "New";
    TodoState[TodoState["Active"] = 1] = "Active";
    TodoState[TodoState["Compelete"] = 2] = "Compelete";
    TodoState[TodoState["Deleted"] = 3] = "Deleted";
})(TodoState || (TodoState = {}));
var TodoStateChanger = /** @class */ (function () {
    function TodoStateChanger(newState) {
        this.newState = newState;
    }
    TodoStateChanger.prototype.canChangeState = function (todo) {
        return !!todo;
    };
    TodoStateChanger.prototype.changeState = function (todo) {
        if (this.canChangeState(todo)) {
            todo.state = this.newState;
        }
        return todo;
    };
    return TodoStateChanger;
}());
var compeleteTodoStateChanger = /** @class */ (function (_super) {
    __extends(compeleteTodoStateChanger, _super);
    function compeleteTodoStateChanger() {
        return _super.call(this, TodoState.Compelete) || this;
    }
    compeleteTodoStateChanger.prototype.canChangeState = function (todo) {
        return _super.prototype.canChangeState.call(this, todo) && (todo.state == TodoState.Active || todo.state == TodoState.Deleted);
    };
    return compeleteTodoStateChanger;
}(TodoStateChanger));
var st = new compeleteTodoStateChanger();
