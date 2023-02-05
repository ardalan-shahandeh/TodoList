///////////////////TODO List///////////////

interface Todo{
  name:string;
  state: TodoState;
}

enum TodoState {
  New,
  Active,
  Compelete,
  Deleted
}

class TodoStateChanger {
  constructor (private newState: TodoState) {}

  canChangeState(todo:Todo):boolean {
    return !!todo;
  }
  changeState(todo: Todo): Todo {
    if(this.canChangeState(todo))
    {
      todo.state=this.newState;
    }
    return todo;
  }
}


class compeleteTodoStateChanger extends TodoStateChanger {
  constructor() {
    super(TodoState.Compelete)
  }

  canChangeState(todo: Todo): boolean {
    return super.canChangeState(todo)&& (todo.state == TodoState.Active || todo.state == TodoState.Deleted)    
  }
}

var st = new compeleteTodoStateChanger();

