import { Box, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./SearchForm.module.scss";

const SearchForm = () => {
    return (
        <Box className={styles.SearchForm}>
            <SearchIcon sx={{ mr: 1, my: 0.5 }} />
            <TextField label="Find ToDo" variant="standard" fullWidth />
        </Box>
    );
};

export default SearchForm;
