import * as actionTypes from "../actionTypes";

const initialTodos: IToDoItem[] = [
    { id: 1, name: "Create app", done: false },
    { id: 2, name: "Visit pekar in army", done: false },
    { id: 3, name: "Trip to the dacha", done: false },
];

const initialState: ITODoState = {
    todos: [],
};

const toDoListReducer = (
    state: ITODoState = initialState,
    action: IToDoAction
) => {
    switch (action.type) {
        case actionTypes.LOAD_TODOS:
            return {
                ...state,
                todos: initialTodos,
            };
        case actionTypes.ADD_TODO:
            const newTodo: IToDoItem = {
                id: Math.random(),
                name: action.payload || "",
                done: false,
            };
            return {
                ...state,
                todos: state.todos.concat(newTodo),
            };
    }
};

export default toDoListReducer;
