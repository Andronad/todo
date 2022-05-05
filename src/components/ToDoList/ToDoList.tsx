import { Stack, Typography } from "@mui/material";
import ToDoItem from "../ToDoItem/ToDoItem";
import { useSelector } from "react-redux";

const ToDoList = () => {
    const list: IToDoItem[] = useSelector((state: ToDoState) => state.todos);
    const filter: string = useSelector((state: ToDoState) => state.filter);

    const filteredList = list.filter((e) =>
        e.label.toLowerCase().includes(filter.toLowerCase())
    );

    const showedList =
        filteredList.length !== 0 ? (
            filteredList.map((e) => {
                return <ToDoItem item={e} key={e.id} />;
            })
        ) : (
            <Typography variant="h4">Can't find anything :(</Typography>
        );

    return (
        <Stack direction={"column"} textAlign="center" spacing={1}>
            {showedList}
        </Stack>
    );
};

export default ToDoList;
