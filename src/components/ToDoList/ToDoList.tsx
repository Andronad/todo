import { Stack } from "@mui/material";
import ToDoItem from "../ToDoItem/ToDoItem";
import { IToDoItem } from "./../../types/index";

interface ToDoListProps {
    list: IToDoItem[];
}

const ToDoList = ({ list }: ToDoListProps) => {
    return (
        <Stack direction={"column"} textAlign="center" spacing={1}>
            {list.map((e) => {
                return <ToDoItem item={e} key={e.id} />;
            })}
        </Stack>
    );
};

export default ToDoList;
