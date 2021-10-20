import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs/operators";
import { retrieveBookListDone } from "src/app/store/actions/books.actions";
import { TaskService } from "../../task.service";
import { retrieveTasksDone, retrieveTasksRequest } from "../actions/tasks.actions";

@Injectable()
export class TasksEffects {

    constructor(private action$ : Actions, private taskService : TaskService){}

    retrieveTasks$ = createEffect(() => this.action$.pipe(
        ofType(retrieveTasksRequest),
        switchMap(() => {
            return this.taskService.getTaskList().pipe(
                map(tasks => retrieveTasksDone({tasks}))
            )
        })
    ))
}