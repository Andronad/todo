interface IToDoItem {
    id: number;
    label: string;
    done: boolean;
}

type ToDoState = {
    todos: IToDoItem[];
};

type ToDoAction<T> = {
    type: string;
    payload?: T;
};

type DispatchType = (args: ToDoAction) => ToDoAction;
