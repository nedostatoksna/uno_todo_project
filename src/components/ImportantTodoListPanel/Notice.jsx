import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { AppContext } from "../../context/context";
import styled from "styled-components";

const Notice = () => {

    const lists = useSelector(state => state.dataLists);
    const activeListId = useSelector(state => state.todoListUI.activeListId);
    const context = useContext(AppContext);

    return (
        <Wrapper>
            <MainHeader>Important Tasks</MainHeader>
            <SubHeader>Try starring some tasks to see them here.</SubHeader>
        </Wrapper>
    )
};

export default Notice;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 10px;
`;
const MainHeader = styled.h1`
    font-family: "Roboto";
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: 36px; 
    margin-bottom: 10px;
    color: #fff;
`;
const SubHeader = styled.h2`
    font-family: "Roboto";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; 
    letter-spacing: 0.25px;
    margin-bottom: 60px;
    color: #fff;
`;