import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TaskN } from "../../task-ngrx.model";

export const selectTaskState = createFeatureSelector<TaskN[]>('tasks')

export const selectTasks = createSelector(
    selectTaskState, 
    (tasks: TaskN[]) => tasks
)

export const completedTasks =  createSelector(
    selectTasks,
    (tasks: TaskN[]) => {
        console.log('filtering in the selector')
        return tasks.filter(task => task.isCompleted === true)
    } 
)