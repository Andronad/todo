import * as ActionTypes from "../actionTypes";

export const loadTodos = (): IToDoAction => {
    return {
        type: ActionTypes.LOAD_TODOS,
    };
};

export const addToDo = (todoName: string): IToDoAction => {
    return {
        type: ActionTypes.LOAD_TODOS,
        payload: todoName,
    };
};
