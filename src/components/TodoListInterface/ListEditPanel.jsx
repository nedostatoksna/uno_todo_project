import React from "react";
import { useDispatch } from "react-redux";
import { toggleDeletingList, toggleRenamingList } from "../../store/actionCreators/todoListActionCreators";
import styled from "styled-components";
import Header from "../../styled/Header";
import IconButton from "../../ui/IconButton";

const ListEditPanel = ({ list }) => {
    
    const dispatch = useDispatch();

    return (
        <ListEditPanelWrapper>
                <Header $white>{list.title}</Header>
                <HeaderButtonsWrapper>
                    <IconButton $type={"edit"} $large onClick={() => {dispatch(toggleRenamingList())}}></IconButton>
                    <IconButton $type={"delete"} $large onClick={() => {dispatch(toggleDeletingList())}}></IconButton>
                </HeaderButtonsWrapper>
        </ListEditPanelWrapper>
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
const HeaderButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-left: 24px;
`;

