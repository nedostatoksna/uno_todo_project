import React from "react";
import Todo from "../TodoListInterface/Todo";

const SearchResultsList = ({ lists }) => {

    return (
        <>
            {
                lists.map(todo => <Todo key={todo.id} todo={todo} /> )
            }
        </>
    )
};

export default SearchResultsList;

