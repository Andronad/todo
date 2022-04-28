import { Stack } from "@mui/material";
import ToDoListItem from "./../ToDoListItem/ToDoListItem";

const ToDoList = () => {
    return (
        <Stack direction={"column"} textAlign="center" spacing={1}>
            <ToDoListItem label={"item 1"} />
            <ToDoListItem label={"item 2"} />
            <ToDoListItem label={"item 3"} />
        </Stack>
    );
};

export default ToDoList;
