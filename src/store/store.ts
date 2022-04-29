import toDoListReducer from "./reducers/toDoListReducer";
import { createStore } from "redux";
import { Store } from "redux";

const store: Store<ToDoState, ToDoAction<any>> & { dispatch: DispatchType } =
    createStore(toDoListReducer);

export default store;
