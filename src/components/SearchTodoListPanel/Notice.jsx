import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../context/context";
import StyledHeader from "../../styled/StyledHeader";

const Notice = () => {

    const context = useContext(AppContext);

    return (
        <Wrapper>
            <StyledHeader $mode={context.mode} $mediumLineHeight $smallMargin $mediumGrey>Task not found</StyledHeader>
            <SubHeader $mode={context.mode}>We searched high and low but couldn't find what you're looking for</SubHeader>
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
    color: ${props => props.$mode === "Light" ? "var(--transparent-grey-text-medium-variant)" : "var(--dark-mode-transparent-grey-text-medium-variant)"};
`;
