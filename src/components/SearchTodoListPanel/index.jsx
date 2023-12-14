import React, { useContext } from "react";
import { AppContext } from "../../context/context";
import { useSelector } from "react-redux";
import SearchResultsList from "./SearchResultsList";
import Notice from "./Notice";
import StyledHeader from "../../ui/StyledHeader";
import Background from "../../ui/Background";
import FlexColumnWrapper from "../../ui/FlexColumnWrapper";

const SearchTodoListPanel = () => {

    const context = useContext(AppContext);
    const lists = useSelector(state => state.dataLists);
    const searchString = useSelector(state => state.todoListUI.searchQuery);
    const todos = lists.map(list => list.todos).flat(1);
    const serchedTodos = todos.filter(todo => todo.title.toLowerCase().includes(searchString.toLowerCase()));

    return (
        <Background $grey $mode={context.mode} $widthLarge>
            <StyledHeader $mode={context.mode} $large $darkGrey>Search</StyledHeader>
            <FlexColumnWrapper $Calcheight $center={!serchedTodos.length || !searchString}>
                {
                    serchedTodos.length && searchString ? <SearchResultsList lists={serchedTodos}/> : <Notice />
                }
            </FlexColumnWrapper>
        </Background>
    )
};

export default SearchTodoListPanel;

