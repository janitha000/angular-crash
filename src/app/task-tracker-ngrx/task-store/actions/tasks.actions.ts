import { createAction, props } from "@ngrx/store";
import { TaskN } from "../../task-ngrx.model";

 export const retrieveTasksRequest = createAction('[Task] Get Task List Request');
 export const retrieveTasksDone = createAction('[Task] Get Tasks Done', props<{tasks : TaskN[]}>())

 export const filterCompletedTasks = createAction('[Task] Filter by Completed', props<{completed: boolean}>())
 export const resetFilterCompletedTasks = createAction('[Task] Filter by Completed RESET')
