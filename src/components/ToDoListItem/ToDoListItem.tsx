import { Typography } from "@mui/material";

import styles from "./ToDoListItem.module.scss";

const ToDoListItem = () => {
    return (
        <div className={styles.ToDoListItem}>
            <Typography variant="h5">ToDoItem</Typography>
        </div>
    );
};

export default ToDoListItem;
