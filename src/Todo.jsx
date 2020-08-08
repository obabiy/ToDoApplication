import React, { useState } from "react";
import "./Todo.css";
import db from "./firebase";

import {
	List,
	ListItem,
	ListItemText,
	ListItemAvatar,
	Modal,
	Button,
	Input,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import DeleteForeverIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
	paper: {
        position: "absolute",
        margin: 'auto',
        top: 0, bottom: 0, left: 0, right: 0,
        width: 300,
        height: 400,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		outline: "none",
	},
}));

function Todo(props) {
	const classes = useStyles();
	const [open, setOpen] = useState();
	const [input, setInput] = useState();

	const handleOpen = () => {
		setOpen(true);
	};

	const updateTodo = () => {
		db.collection("todos").doc(props.todo.id).set(
			{
				task: input,
			},
			{ merge: true }
		);
		setOpen(false);
	};

	return (
		<div id="list_item">
			<Modal
				open={open}
				onClose={(e) => setOpen(false)}
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
			>
				<div className={classes.paper} id="modal">
					<h1>Edit task..</h1>
					<Input
						placeholder={props.todo.task}
						value={input}
						onChange={(event) => setInput(event.target.value)}
					/>
					<Button disabled={!input} onClick={updateTodo} variant="contained">
						Save
					</Button>
				</div>
			</Modal>

			<List className="todo_list">
				<ListItem>
					<ListItemText primary={props.todo.task} secondary="Dummy deadline" />
					<EditIcon onClick={handleOpen} />
					<DeleteForeverIcon
						onClick={(event) =>
							db.collection("todos").doc(props.todo.id).delete()
						}
						id="deleteButton"
					/>
				</ListItem>
			</List>
		</div>
	);
}

export default Todo;
