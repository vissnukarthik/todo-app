import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Button,
  Modal,
  Input
} from "@material-ui/core";
import db from "./firebase";
import "./Todo.css"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
const Todo = (props) => {
  


  return (
    <div >
      <List className = "todo__list"  >
        <ListItem className = "todo__item" >
          <ListItemAvatar></ListItemAvatar>
          <ListItemText primary={props.todo.todo} secondary="dummy deadline" />
          <DeleteForeverIcon
          onClick={(e) => db.collection("todos").doc(props.todo.id).delete()}
        ></DeleteForeverIcon>
        </ListItem>
        
      </List>
    </div>
  );
};

export default Todo;
