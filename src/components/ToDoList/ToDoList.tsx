import { Stack } from "@mui/material";
import ToDoItem from "../ToDoItem/ToDoItem";
import { useSelector } from "react-redux";

const ToDoList = () => {
    const list: IToDoItem[] = useSelector((state: ToDoState) => state.todos);

    return (
        <Stack direction={"column"} textAlign="center" spacing={1}>
            {list.map((e) => {
                return <ToDoItem item={e} key={e.id} />;
            })}
        </Stack>
    );
};

export default ToDoList;
