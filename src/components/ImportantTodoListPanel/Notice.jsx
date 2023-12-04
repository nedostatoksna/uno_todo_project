import React from "react";
import styled from "styled-components";
import Header from "../../styled/Header";

const Notice = () => {

    return (
        <Wrapper>
            <Header $lineHeight={"36px"} $white $margin={"0px 0px 10px 0px"}>Important Tasks</Header>
            <SubHeader>Try starring some tasks to see them here.</SubHeader>
        </Wrapper>
    )
};

export default Notice;

const Wrapper = styled.div`
    width: 100%;
    height: calc(100% - 104px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 10px;
`;
const SubHeader = styled.h2`
    font-weight: 600;
    line-height: 20px; 
    letter-spacing: 0.25px;
    margin-bottom: 60px;
    color: var(--white);
`;
