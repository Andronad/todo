import { Box, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./SearchForm.module.scss";
import { useDispatch } from "react-redux";
import { updateFilter } from "../../store/actions";

const SearchForm = () => {
    const dispatch = useDispatch();
    const filterTodos = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateFilter(event.target.value));
    };
    return (
        <Box className={styles.SearchForm}>
            <SearchIcon sx={{ mr: 1, my: 0.5 }} />
            <TextField
                label="Find ToDo"
                variant="standard"
                fullWidth
                onChange={filterTodos}
            />
        </Box>
    );
};

export default SearchForm;
