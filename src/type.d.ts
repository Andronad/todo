interface IToDoItem {
    id: number;
    label: string;
    done: boolean;
}

type ToDoState = {
    todos: IToDoItem[];
    filter: string;
};

type ToDoAction<T> = {
    type: string;
    payload?: T;
};

type DispatchType = (args: ToDoAction) => ToDoAction;
