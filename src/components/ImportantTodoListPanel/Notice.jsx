import React from "react";
import styled from "styled-components";
import StyledHeader from "../../styled/StyledHeader";

const Notice = () => {

    return (
        <Wrapper>
            <StyledHeader $mediumLineHeight $white $smallMargin>Important Tasks</StyledHeader>
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
