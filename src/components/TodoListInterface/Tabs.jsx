import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleVisibleCompleted } from "../../store/actionCreators/todoListActionCreators";
import styled, { css } from "styled-components";
import Divider from "../../ui/Divider";
import { AppContext } from "../../context/context";

const Tabs = () => {

    const completedTabActive = useSelector(state => state.todoListUI.isShowingCompleted);
    const dispatch = useDispatch();
    const context = useContext(AppContext);

    return (
        <StyledTabsWrapper>
            <StyledTab 
                onClick={() => {dispatch(toggleVisibleCompleted())}}
                $active={!completedTabActive}
                $mode={context.mode}
            >To Do</StyledTab>
            <StyledTab 
                onClick={() => {dispatch(toggleVisibleCompleted())}}
                $active={completedTabActive}
                $mode={context.mode}
            >Completed</StyledTab>
            <Divider $white $margin={"0px"} $mode={context.mode} />
        </StyledTabsWrapper>
    )
};

export default Tabs;

const StyledTabsWrapper = styled.div`
    width: fit-content;
`;
const StyledTab = styled.button`
    color: ${props => props.$mode === "Light" ? "var(--transparent-grey-text-medium-variant)" : "var(--dark-mode-transparent-grey-text-medium-variant)"};
    min-width: 180px;
    padding: 12px 16px 11px 16px;
    text-align: center;
    background: transparent;
    border: none;
    font-family: "Roboto";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0.1px;
    ${props => props.$active && css `
        color: ${props => props.$mode === "Light" ? "var(--primary-purple)" : "var(--dark-mode-primary-purple)"};
        border-bottom: solid 2px;
        border-color: ${props => props.$mode === "Light" ? "var(--primary-purple)" : "var(--dark-mode-primary-purple)"};
    `}
`;


