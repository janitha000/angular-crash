import { createReducer, on } from "@ngrx/store";
import { TaskN } from "../../task-ngrx.model";
import { filterCompletedTasks, resetFilterCompletedTasks, retrieveTasksDone } from "../actions/tasks.actions";

export const TaskNReducer = createReducer<TaskN[]>([],
    on(retrieveTasksDone, (_, {tasks} ) => tasks),
    on(filterCompletedTasks, (state : TaskN[], {completed}) => {
        return state.filter(t => t.isCompleted === completed)
    })
);