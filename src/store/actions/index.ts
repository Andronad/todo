import * as ActionTypes from "../actionTypes";

export const loadTodos = (): ToDoAction<null> => {
    return {
        type: ActionTypes.LOAD_TODOS,
    };
};

export const addToDo = (todoName: string): ToDoAction<string> => {
    return {
        type: ActionTypes.LOAD_TODOS,
        payload: todoName,
    };
};

export const toggleDoneToDo = (id: number): ToDoAction<number> => {
    return {
        type: ActionTypes.TOGGLE_DONE_TODO,
        payload: id,
    };
};
