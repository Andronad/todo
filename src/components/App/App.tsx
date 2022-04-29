import { Container } from "@mui/material";
import Header from "../Header";
import ToDoList from "./../ToDoList/ToDoList";
import { list } from "./../../constants/index";
import SearchForm from "../SearchForm";

function App() {
    return (
        <Container maxWidth="xs">
            <Header />
            <SearchForm />
            <ToDoList list={list} />
        </Container>
    );
}

export default App;
