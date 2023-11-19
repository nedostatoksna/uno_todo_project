import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import Checkbox from "../../ui/StyledCheckbox";
import styled, { css } from "styled-components";
import { AppContext } from "../../context/context";

const Todo = ({ todo }) => {

    const dispatch = useDispatch();
    const context = useContext(AppContext);
    const activeListId = useSelector(state => state.todoListUI.activeListId);

    // const isCompleted = useSelector(state => state.dataLists.isCompleted);
    // const isImportant = useSelector(state => state.dataLists.isImportant);

    return (
        <StyledItemBox $mode={context.mode}>
        <Checkbox $primary $checked $mode={context.mode} $margin={"10px 16px 10px 0px"} />
        <StyledItemTextBox>
            <StyledItemTitle $mode={context.mode}>{todo.title}</StyledItemTitle>
            <div>
                <StyledText $grey $mode={context.mode}>{todo.deadLineDate}</StyledText>
                <StyledText $coral $mode={context.mode}>{todo.note}</StyledText>
            </div>
        </StyledItemTextBox>
        <Checkbox $mode={context.mode} $star $starChecked $margin={"10px 0px 10px 16px"} />
        </StyledItemBox>
    )
};

export default Todo;

const StyledItemBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 10px;
    border-radius: 10px;
    background-color: ${props => props.$mode === "Light" ? "#fff" : "#201F24"};;
`;
const StyledItemTitle = styled.p`
    font-family: "Roboto";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; 
    color: ${props => props.$mode === "Light" ? "#1C1B1F" : "#E6E1E5"};
`;
const StyledItemTextBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 8px 0px;
    width: calc(100% - 102px);
`;
const StyledText = styled.p`
    font-family: "Roboto";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0.25px;

    ${props => props.$grey && css `
        color: ${props => props.$mode === "Light" ? "rgba(28, 27, 31, 0.6)" : "rgba(230, 225, 229, 0.6)"};
    `}
    ${props => props.$coral && css `
        color: ${props => props.$mode === "Light" ? "#F85977" : "#D9415E"};
    `}
`;
