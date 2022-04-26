import { Container, Stack } from "@mui/material";
import Header from "../Header";
import ToDoListItem from "../ToDoListItem";

function App() {
    return (
        <Container maxWidth="xs">
            <Stack direction={"column"} textAlign="center" spacing={1}>
                <Header />
                <ToDoListItem label={"item 1"} />
                <ToDoListItem label={"item 2"} />
                <ToDoListItem label={"item 3"} />
            </Stack>
        </Container>
    );
}

export default App;
