import { Container } from "@mui/material";
import Header from "../Header";
import ToDoList from "./../ToDoList/ToDoList";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Dispatch } from "redux";
import { loadTodos } from "./../../store/actions/index";

const App = () => {
    const dispatch: Dispatch<any> = useDispatch();

    useEffect(() => {
        dispatch(loadTodos());
    });

    return (
        <Container maxWidth="xs">
            <Header />
            <ToDoList />
        </Container>
    );
};

export default App;
