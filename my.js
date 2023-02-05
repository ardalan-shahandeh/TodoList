///////////////////TODO List///////////////
var TodoState;
(function (TodoState) {
    TodoState[TodoState["New"] = 0] = "New";
    TodoState[TodoState["Active"] = 1] = "Active";
    TodoState[TodoState["Compelete"] = 2] = "Compelete";
    TodoState[TodoState["Delete"] = 3] = "Delete";
})(TodoState || (TodoState = {}));
// var todo = {
//   name: 'Bank',
//   // state: TodoState.Active
//   get state() {
//     return this._state
//   },
//   set state(newState) {
//     if (newState === TodoState.Compelete) 
//     {
//       var canBeCompele  =
//       this.state == TodoState.Active || this.state==TodoState.Delete
//       if(!canBeCompele) 
//       {
//         throw "Todo must be active"
//       }
//     }
//     this._state = newState
//   }
// }
// todo.state=TodoState.New;
// console.log(todo.state);
var smartTodo = /** @class */ (function () {
    function smartTodo(name) {
        this.name = name;
    }
    Object.defineProperty(smartTodo.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (newState) {
            if (newState === TodoState.Compelete) {
                var canBeCompele = this.state == TodoState.Active || this.state == TodoState.Delete;
                if (!canBeCompele) {
                    throw "Todo must be active";
                }
            }
            this._state = newState;
        },
        enumerable: false,
        configurable: true
    });
    return smartTodo;
}());
var todo = new smartTodo("bank");
todo.state = TodoState.Compelete;
var st = todo.state;
