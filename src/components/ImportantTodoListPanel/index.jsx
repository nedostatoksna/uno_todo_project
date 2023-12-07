import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { AppContext } from "../../context/context";
import ImportantTodoList from "./ImportantTodoList";
import Notice from "./Notice";
import StyledHeader from "../../styled/StyledHeader";
import Background from "../../styled/Background";
import FlexWrapper from "../../styled/FlexWrapper";

const ImportantTodoListPanel = () => {
    const context = useContext(AppContext);
    const lists = useSelector(state => state.dataLists);
    const todos = lists.map(list => list.todos).flat(1);
    const importantTodos = todos.filter(todo => todo.isImportant);

    return (
        <Background $coral $mode={context.mode} $width={"80vw"}>
            <StyledHeader $mode={context.mode} $white>Important</StyledHeader>
            <FlexWrapper $height $spaceBetween>
                {
                    importantTodos.length ? <ImportantTodoList todos={importantTodos} /> : <Notice />
                }
            </FlexWrapper>
        </Background>
    )
};

export default ImportantTodoListPanel;