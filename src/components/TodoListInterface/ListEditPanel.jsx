import React from "react";
import { useDispatch } from "react-redux";
import { toggleDeletingList, toggleRenamingList } from "../../store/actionCreators/todoListActionCreators";
import styled from "styled-components";
import IconButton from "../../ui/IconButton";
import StyledHeader from "../../styled/StyledHeader";
import FlexRowWrapper from "../../styled/FlexRowWrapper";

const ListEditPanel = ({ list }) => {
    
    const dispatch = useDispatch();

    return (
        <FlexRowWrapper $center $spaceBetween $padding={"12px 0px"}>
                <StyledHeader $large $zeroMargin $white>{list.title}</StyledHeader>
                <FlexRowWrapper $center $spaceBetween $margin={"0px 0px 0px 24px"}>
                    <IconButton $type={"edit"} $large onClick={() => {dispatch(toggleRenamingList())}}></IconButton>
                    <IconButton $type={"delete"} $large onClick={() => {dispatch(toggleDeletingList())}}></IconButton>
                </FlexRowWrapper>
        </FlexRowWrapper>
    )
};

export default ListEditPanel;



