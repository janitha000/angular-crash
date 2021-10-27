import ToDo from "../components/todo/Todo";

export namespace ToDoActions {
    export class AddToDo {
        static readonly type = '[TODOITEM Page] Add Todo'
        constructor(public todoItem : ToDo){}
    }

    export class RemoveToDo {
        static readonly type ="[TODOITEM Page] Remove Todo"
        constructor(public id : number) {}
    }

    export class GetTodosAPI {
        static readonly type = '[Todo] Get API';
    }
}