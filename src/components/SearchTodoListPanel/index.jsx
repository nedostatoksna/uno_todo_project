import React, { useContext } from "react";
import { AppContext } from "../../context/context";
import { useSelector } from "react-redux";
import SearchResultsList from "./SearchResultsList";
import StyledHeader from "../../ui/Header";
import Background from "../../ui/Background";
import FlexColumnWrapper from "../../ui/FlexColumnWrapper";
import NoticeCase from "../NoticeCase";

const SearchTodoListPanel = () => {

    const context = useContext(AppContext);
    const lists = useSelector(state => state.dataLists);
    const searchString = useSelector(state => state.todoListUI.searchQuery);
    const todos = lists.map(list => list.todos).flat(1);
    const serchedTodos = todos.filter(todo => todo.title.toLowerCase().includes(searchString.toLowerCase()));

    return (
        <Background 
            $grey 
            $mode={context.mode} 
            $widthLarge
        >
            <StyledHeader 
                $mode={context.mode} 
                $large 
                $darkGrey
            >
                Search
            </StyledHeader>
            <FlexColumnWrapper 
                $Calcheight 
                $center={!serchedTodos.length || !searchString}
                $heightMin
            >
                {
                    serchedTodos.length && searchString 
                        ? <SearchResultsList lists={serchedTodos}/> 
                        : <NoticeCase noticeCase={"noFoundTasks"} />
                }
            </FlexColumnWrapper>
        </Background>
    )
};

export default SearchTodoListPanel;

