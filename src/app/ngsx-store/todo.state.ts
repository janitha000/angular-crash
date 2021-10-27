import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { of } from "rxjs";
import { tap } from "rxjs/operators";
import ToDo from "../components/todo/Todo";
import {ToDoActions} from './todo.actions'

export class ToDoStateModel {
    todos! : ToDo[];
}

@State<ToDoStateModel>({
    name: 'todos',
    defaults: {
        todos : []
    }
})

@Injectable()
export class ToDoState {

    @Selector()
    static getToDos(state: ToDoStateModel){
        return state.todos
    }

    @Action(ToDoActions.AddToDo)
    add(ctx: StateContext<ToDoStateModel>, action : ToDoActions.AddToDo){
        const state = ctx.getState();
        ctx.patchState({
            todos : [...state.todos, action.todoItem]
        })

    }

    @Action(ToDoActions.RemoveToDo)
    remove({getState, setState} : StateContext<ToDoStateModel>, {id} : ToDoActions.RemoveToDo){
        setState({
            todos : getState().todos.filter(x => x.id !== id)
        })
    }

    @Action(ToDoActions.GetTodosAPI)
    getTodosAPI({getState, setState} : StateContext<ToDoStateModel>){
        return this.getToDoFromApi().pipe(
            tap((result) => {
                const state = getState();
                setState({
                    ...state,
                    todos : result
                })
            })
        )
    }

    getToDoFromApi(){
        let todos : ToDo[] = [{id : 2, title : "Test title 3"}, {id: 3, title : "Test title 4"}];
        return of(todos);
    }
}

