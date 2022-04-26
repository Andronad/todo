interface IToDoItem {
    id?: number;
    name: string;
    done: boolean;
}

interface ITODoState {
    todos: IToDoItem[];
}

interface IToDoAction {
    type: string;
    payload?: string;
}

type DispatchType = (args: IToDoAction) => IToDoAction;
