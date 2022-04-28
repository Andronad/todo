import * as actionTypes from "../actionTypes";

const initialTodos: IToDoItem[] = [
    { id: 1, label: "Create app", done: false },
    { id: 2, label: "Visit pekar in army", done: false },
    { id: 3, label: "Trip to the dacha", done: false },
];

const initialState: ToDoState = {
    todos: [],
};

const toDoListReducer = (
    state: ToDoState = initialState,
    action: ToDoAction<any>
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
                label: action.payload || "",
                done: false,
            };
            return {
                ...state,
                todos: state.todos.concat(newTodo),
            };
    }
    return state;
};

export default toDoListReducer;
