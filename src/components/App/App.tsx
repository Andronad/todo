import { Container } from "@mui/material";
import Header from "../Header";
import ToDoList from "./../ToDoList/ToDoList";

function App() {
    return (
        <Container maxWidth="xs">
            <Header />
            <ToDoList />
        </Container>
    );
}

export default App;
