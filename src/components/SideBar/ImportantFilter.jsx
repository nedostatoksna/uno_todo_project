import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { switchVisibleImportant } from "../../store/actionCreators/todoListActionCreators";
import styled from "styled-components";
import ListButton from "../../ui/ListButton";
import { AppContext } from "../../context/context";

const ImportantFilter = () => {

    const dispatch = useDispatch();
    const context = useContext(AppContext);

    return (
        <Wrapper $list>
            <ListButton $starIcon $mode={context.mode} onClick={() => {dispatch(switchVisibleImportant())}}>Important</ListButton>
            <ListButton $houseIcon $mode={context.mode} onClick={() => {dispatch(switchVisibleImportant())}}>Tasks</ListButton>
        </Wrapper>
    )
};

export default ImportantFilter;

const Wrapper = styled.div`
    margin: auto auto 5px auto;
    display: flex;
    flex-direction: column;
`;
