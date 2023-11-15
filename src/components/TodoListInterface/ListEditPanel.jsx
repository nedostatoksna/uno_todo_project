import React from "react";
import { useDispatch } from "react-redux";
import { deleteList } from "../../store/actionCreators/dataListActionCreators.js.js";
import { toggleRenamingList } from "../../store/actionCreators/todoListActionCreators";
import styled from "styled-components";
import Button from "../../ui/Button.jsx";

const ListEditPanel = ({ list }) => {

    const dispatch = useDispatch();

    return (
        <>
            <ListEditPanelWrapper>
                    <StyledHeader>{list.title}</StyledHeader>
                    <HeaderButtonsWrapper>
                        <Button $icon $type={"edit"} $padding={"8px"} onClick={() => {dispatch(toggleRenamingList())}}></Button>
                        <Button $icon $type={"delete"} $padding={"8px"} onClick={() => {dispatch(deleteList(list.id))}}></Button>
                    </HeaderButtonsWrapper>
            </ListEditPanelWrapper>
       </>
    )
};

export default ListEditPanel;

const ListEditPanelWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: 12px 0px;
`;
const StyledHeader = styled.h1`
    font-family: "Roboto";
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; 
    background: transparent;
    border: none;
    color: #fff;
`;
const HeaderButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-left: 24px;
`;

