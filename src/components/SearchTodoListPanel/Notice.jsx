import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../context/context";
import StyledHeader from "../../styled/StyledHeader";
import FlexWrapper from "../../styled/FlexWrapper";

const Notice = () => {

    const context = useContext(AppContext);

    return (
        <FlexWrapper $center>
            <StyledHeader $mode={context.mode} $mediumLineHeight $smallMargin $mediumGrey>Task not found</StyledHeader>
            <SubHeader $mode={context.mode}>We searched high and low but couldn't find what you're looking for</SubHeader>
        </FlexWrapper>
    )
};

export default Notice;

const SubHeader = styled.h2`
    font-weight: 600;
    line-height: 20px; 
    letter-spacing: 0.25px;
    margin-bottom: 60px;
    color: ${props => props.$mode === "Light" ? "var(--transparent-grey-text-medium-variant)" : "var(--dark-mode-transparent-grey-text-medium-variant)"};
`;
