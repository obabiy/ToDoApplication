import React from 'react'
import './Todo.css'
import db from './firebase'

import { List, ListItem, ListItemText, ListItemAvatar, Button} from "@material-ui/core"

function Todo(props) {
    return (
        <List className = "todo_list">
            <ListItem> 
                
                <ListItemAvatar>
                </ListItemAvatar>

                <ListItemText primary = {props.todo.task} secondary = 'Dummy deadline' />
            
                <Button onClick={event => db.collection('todos').doc(props.todo.id).delete()} variant = 'contained' color = 'secondary'>Delete me</Button>
            </ListItem>
        </List>
    )
}

export default Todo
