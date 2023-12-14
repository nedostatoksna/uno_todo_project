import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { AppContext } from "../../context/context";
import ImportantTodoList from "./ImportantTodoList";
import Notice from "./Notice";
import StyledHeader from "../../ui/StyledHeader";
import Background from "../../ui/Background";
import FlexColumnWrapper from "../../ui/FlexColumnWrapper";

const ImportantTodoListPanel = () => {
    
    const context = useContext(AppContext);
    const lists = useSelector(state => state.dataLists);
    const todos = lists.map(list => list.todos).flat(1);
    const importantTodos = todos.filter(todo => todo.isImportant);
    console.log(importantTodos);

    return (
        <Background $coral $mode={context.mode} $widthLarge>
            <StyledHeader $large $mode={context.mode} $white>Important</StyledHeader>
                <FlexColumnWrapper $Calcheight $center={!importantTodos.length}>
                    {
                        importantTodos.length ? <ImportantTodoList todos={importantTodos} /> : <Notice />
                    }
                </FlexColumnWrapper>           
        </Background>
    )
};

export default ImportantTodoListPanel;