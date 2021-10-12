import { routerReducer } from "@ngrx/router-store";
import { ActionReducer, ActionReducerMap, INIT, MetaReducer } from "@ngrx/store";
import { AppState } from "src/app/models/appstate.model";
import { environment } from "src/environments/environment";
import { logout } from "../actions/books.actions";
import { booksReducer } from "./books.reducer";
import { counterReducer } from "./counter.reducer";

export const reducers: ActionReducerMap<AppState> = {
    count : counterReducer, 
    books : booksReducer,
    router : routerReducer
}

const logoutMetaReducer = (reducer : ActionReducer<any>) : ActionReducer<any> => {
    return (state, action) => {
        if(action.type === logout.type)
        {
            console.log('returning logout reduceer')
            return reducer(undefined, {type: INIT})
        }

        return reducer(state, action)
    }
}

export const metaReducers : MetaReducer<AppState>[] = [ logoutMetaReducer]