import { Typography } from "@mui/material";

import styles from "./ToDoItem.module.scss";
import { useDispatch } from "react-redux";
import { toggleDoneToDo } from "./../../store/actions/index";

interface ToDoItemProps {
    item: IToDoItem;
}

const ToDoItem = ({ item }: ToDoItemProps) => {
    const dispatch = useDispatch();

    const classes: string = item.done
        ? `${styles.ToDoItem} ${styles.done}`
        : `${styles.ToDoItem}`;

    const toggleDone = () => dispatch(toggleDoneToDo(item.id));

    return (
        <div className={classes} onClick={toggleDone}>
            <Typography variant="h5">{item.label}</Typography>
        </div>
    );
};

export default ToDoItem;
