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
import Wrapper from "../../ui/divs/Wrapper";
import Flex from "../../ui/divs/Flex";

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
            <Wrapper $todoList>
                <Flex $header>
                    <h1 className={style.title}>{list.title}</h1>
                    <Flex $flexDir={"row"}>
                        <button className={style.edit} onClick={() => {dispatch(toggleRenamingList())}}></button>
                        <button className={style.delete} onClick={() => {dispatch(deleteList(list.id))}}></button>
                    </Flex>
                </Flex>
            </Wrapper>

                <Tabs />
                <div className={style.todos_wrapper}>
                <Wrapper $listOfTodos>
                    {
                        list.todos.map(todo => (
                            <Todo key={todo.id} todo={todo} />
                        ))
                    }
                </Wrapper>
                
                </div>
                <AddTodoBtn />
       </>
    )
};

export default List;