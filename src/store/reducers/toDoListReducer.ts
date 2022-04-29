import * as actionTypes from "../actionTypes";

const initialTodos: IToDoItem[] = [
    {
        id: 1,
        label: "Create cool app with React+Redux",
        done: false,
    },
    {
        id: 2,
        label: "Raise the best child",
        done: false,
    },
    {
        id: 3,
        label: "Achieve money independence",
        done: false,
    },
    {
        id: 4,
        label: "Become a good programist on a CARS project",
        done: true,
    },
    {
        id: 5,
        label: "Buy a new car",
        done: false,
    },
];

const initialState: ToDoState = {
    todos: [],
    filter: "",
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
        case actionTypes.TOGGLE_DONE_TODO:
            const foundToDoIndex: number = state.todos.findIndex(
                (e) => e.id === action.payload
            );
            const newToDoItem: IToDoItem = {
                ...state.todos[foundToDoIndex],
                done: !state.todos[foundToDoIndex].done,
            };

            const newStateTodos: IToDoItem[] = [
                ...state.todos.slice(0, foundToDoIndex),
                newToDoItem,
                ...state.todos.slice(foundToDoIndex + 1),
            ];
            return {
                ...state,
                todos: newStateTodos,
            };
        case actionTypes.UPDATE_FILTER:
            return {
                ...state,
                filter: action.payload,
            };
    }
    return state;
};

export default toDoListReducer;
