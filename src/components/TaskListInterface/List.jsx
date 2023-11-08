import React from "react";
import style from "./TaskListInterface.module.css";
import { useDispatch, useSelector } from "react-redux";
import Tabs from "./Tabs";
import { deleteList } from "../../store/actionCreators/dataListActionCreators.js";
import { toggleRenamingList } from "../../store/actionCreators/todoListActionCreators";
import RenameModal from "../modals/RenameModal";
import CreateListModal from "../modals/CreateListModal";
import Todo from "./Todo";
import AddTodoModal from "../modals/AddTodoModal";
import AddTodoBtn from "./AddTodoBtn";

const List = ({ list }) => {

    const dispatch = useDispatch();
    const isRenaming = useSelector(state => state.todoListUI.isRenamingList);
    const isCreatingList = useSelector(state => state.todoListUI.isCreatingList);
    const isCreatingTodo = useSelector(state => state.todoListUI.isCreatingTodo);
    return (
        <>
            { isCreatingList && <CreateListModal /> }
            { isCreatingTodo && <AddTodoModal /> }
            { isRenaming && <RenameModal listId={list.id} /> }
            <header className={style.header_box}>
                <h1 className={style.title}>{list.title}</h1>
                <div>
                    <button className={style.edit} onClick={() => {dispatch(toggleRenamingList())}}></button>
                    <button className={style.delete} onClick={() => {dispatch(deleteList(list.id))}}></button>
                </div>
            </header>
            <Tabs />
            <div className={style.todos_wrapper}>
                {
                    list.todos.map(todo => (
                        <Todo key={todo.id} todo={todo} />
                    ))
                }
            </div>
            <AddTodoBtn />
            
        </>
    )
};

export default List;