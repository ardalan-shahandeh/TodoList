///////////////////TODO List///////////////

interface Todo{
  name:string;
  state: TodoState;
}

enum TodoState {
  New,
  Active,
  Compelete,
  Delete
}

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


class smartTodo {
  name: string;
  _state: TodoState;
  constructor(name:string) {
    this.name = name;
  }

  get state() {
    return this._state
  }

  set state(newState) {

    if (newState === TodoState.Compelete) 
    {
      var canBeCompele  =
      this.state == TodoState.Active || this.state==TodoState.Delete
      if(!canBeCompele) 
      {
        throw "Todo must be active"
      }
    }
    this._state = newState
  }
}

var todo = new smartTodo("bank");
todo.state = TodoState.Compelete;
var st = todo.state;
