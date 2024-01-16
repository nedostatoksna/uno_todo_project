import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { AppContext } from "../../context/context";
import ImportantTodoList from "./ImportantTodoList";
import StyledHeader from "../../ui/Header";
import Background from "../../ui/Background";
import FlexColumnWrapper from "../../ui/FlexColumnWrapper";
import NoticeCase from "../NoticeCase";

const ImportantTodoListPanel = () => {
    
    const context = useContext(AppContext);
    const lists = useSelector(state => state.dataLists);
    const todos = lists.map(list => list.todos).flat(1);
    const importantTodos = todos.filter(todo => todo.isImportant);

    return (
        <Background 
            $coral 
            $mode={context.mode} 
            $widthLarge
            $heightMin
        >
            <StyledHeader 
                $large 
                $mode={context.mode} 
                $white
            >
                Important
            </StyledHeader>
                <FlexColumnWrapper 
                    $Calcheight 
                    $center={!importantTodos.length}
                >
                    {
                        importantTodos.length 
                            ? <ImportantTodoList todos={importantTodos} /> 
                            : <NoticeCase noticeCase={"noImportantTasks"} />
                    }
                </FlexColumnWrapper>           
        </Background>
    )
};

export default ImportantTodoListPanel;