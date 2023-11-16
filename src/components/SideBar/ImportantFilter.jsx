import React from "react";
import { useDispatch } from "react-redux";
import { switchVisibleImportant } from "../../store/actionCreators/todoListActionCreators";
import styled, { css } from "styled-components";
import ListButton from "../../ui/ListButton";

const ImportantFilter = () => {

    const dispatch = useDispatch();

    return (
        <Wrapper $list>
            <ListButton $starIcon onClick={() => {dispatch(switchVisibleImportant())}}>Important</ListButton>
            <ListButton $houseIcon onClick={() => {dispatch(switchVisibleImportant())}}>Tasks</ListButton>
        </Wrapper>
    )
};

export default ImportantFilter;

const Wrapper = styled.div`
    margin: auto auto 5px auto;
    display: flex;
    flex-direction: column;
`;
