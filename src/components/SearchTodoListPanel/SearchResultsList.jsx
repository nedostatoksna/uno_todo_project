import React from "react";
import Todo from "../TodoListInterface/Todo";
import FlexColumnWrapper from "../../ui/FlexColumnWrapper";

const SearchResultsList = ({ lists }) => {

    return (
        <FlexColumnWrapper $heightMin>
            {
                lists.map(todo => <Todo key={todo.id} todo={todo} /> )
            }
        </FlexColumnWrapper>
    )
};

export default SearchResultsList;

