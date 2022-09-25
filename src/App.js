import "./styles.css";
import Todo from "./Todo";
import {
  Button,
  FormControl,
  InputLabel,
  Input,
  FormHelperText
} from "@material-ui/core";
import React from "react";
import { useState, useEffect } from "react";
import db from "./firebase";
import firebase from "firebase";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);

  const addTodo = (e) => {
    // this will fire of when we click the button
    e.preventDefault();
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setInput("");
    // setTodos([...todos, input]);
  };
  return (
    <div className="App">
      <h1>to do app</h1>

      <FormControl>
        <InputLabel htmlFor="my-input">write a todo</InputLabel>
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>

      {console.log(todos)}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={addTodo}
        disabled={!input}
      >
        add task
      </Button>
      <ul>
        {todos.map((todo) => (
          <>
            <Todo todo={todo} />
          </>
        ))}
      </ul>
    </div>
  );
}
