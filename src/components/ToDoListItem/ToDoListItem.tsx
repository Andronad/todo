import { Typography } from "@mui/material";

import styles from "./ToDoListItem.module.scss";

interface ToDoListItemProps {
    label: string;
}

const ToDoListItem = ({ label }: ToDoListItemProps) => {
    return (
        <div className={styles.ToDoListItem}>
            <Typography variant="h5">{label}</Typography>
        </div>
    );
};

export default ToDoListItem;
