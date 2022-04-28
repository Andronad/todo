import { Typography } from "@mui/material";

import { IToDoItem } from "../../types/index";
import styles from "./ToDoItem.module.scss";

interface ToDoItemProps {
    item: IToDoItem;
}

const ToDoItem = ({ item }: ToDoItemProps) => {
    return (
        <div className={styles.ToDoListItem} key={item.id}>
            <Typography variant="h5">{item.label}</Typography>
        </div>
    );
};

export default ToDoItem;
