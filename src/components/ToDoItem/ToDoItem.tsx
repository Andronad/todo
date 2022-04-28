import { Typography } from "@mui/material";

import { IToDoItem } from "../../types/index";
import styles from "./ToDoItem.module.scss";

interface ToDoItemProps {
    item: IToDoItem;
}

const ToDoItem = ({ item }: ToDoItemProps) => {
    const classes: string = item.done
        ? `${styles.ToDoItem} ${styles.done}`
        : `${styles.ToDoItem}`;

    return (
        <div className={classes}>
            <Typography variant="h5">{item.label}</Typography>
        </div>
    );
};

export default ToDoItem;
