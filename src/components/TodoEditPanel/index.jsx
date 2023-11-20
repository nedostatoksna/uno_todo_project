import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppContext } from "../../context/context";
import styled from "styled-components";


const TodoEditPanel = () => {
    const dispatch = useDispatch();
    const context = useContext(AppContext);
    const activeTodoId = useSelector(state => state.todoPanelUI.activeTodoId);

    return (
        <TodoEditWrapper $mode={context.mode}>
               p
        </TodoEditWrapper>
    )
};

export default TodoEditPanel;
 
const TodoEditWrapper = styled.div`
    padding: 30px 10px 20px 10px;
    width: 20vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;