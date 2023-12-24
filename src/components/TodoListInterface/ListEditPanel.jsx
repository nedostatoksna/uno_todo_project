import React from "react";
import { useDispatch } from "react-redux";
import { 
    toggleDeletingList, 
    toggleRenamingList } from "../../store/actionCreators/todoListActionCreators";
import IconButton from "../../ui/IconButton";
import StyledHeader from "../../ui/Header";
import FlexRowWrapper from "../../ui/FlexRowWrapper";

const ListEditPanel = ({ list }) => {
    
    const dispatch = useDispatch();

    return (
        <FlexRowWrapper 
            $center 
            $spaceBetween 
            $paddingTopBottomMedium
        >
                <StyledHeader 
                    $large 
                    $zeroMargin 
                    $white
                >
                    {list.title}
                </StyledHeader>
                <FlexRowWrapper 
                    $center 
                    $spaceBetween 
                    $marginLeftLarge
                >
                    <IconButton 
                        $type={"edit"} 
                        $large 
                        onClick={() => {dispatch(toggleRenamingList())}}></IconButton>
                    <IconButton 
                        $type={"delete"} 
                        $large 
                        onClick={() => {dispatch(toggleDeletingList())}}></IconButton>
                </FlexRowWrapper>
        </FlexRowWrapper>
    )
};

export default ListEditPanel;



