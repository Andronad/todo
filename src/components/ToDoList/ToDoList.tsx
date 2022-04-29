import { Stack } from "@mui/material";
import ToDoItem from "../ToDoItem/ToDoItem";
import { useSelector } from "react-redux";

const ToDoList = () => {
    let list: IToDoItem[] = useSelector((state: ToDoState) => state.todos);
    const filter: string = useSelector((state: ToDoState) => state.filter);

    list = list.filter((e) =>
        e.label.toLowerCase().includes(filter.toLowerCase())
    );
    return (
        <Stack direction={"column"} textAlign="center" spacing={1}>
            {list.map((e) => {
                return <ToDoItem item={e} key={e.id} />;
            })}
        </Stack>
    );
};

export default ToDoList;
