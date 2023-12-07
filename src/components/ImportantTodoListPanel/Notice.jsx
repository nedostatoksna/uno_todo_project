import React from "react";
import styled from "styled-components";
import StyledHeader from "../../styled/StyledHeader";
import FlexWrapper from "../../styled/FlexWrapper";

const Notice = () => {

    return (
        <FlexWrapper $height $center $width={"100%"} $smallPaddingTop>
            <StyledHeader $mediumLineHeight $white $smallMargin>Important Tasks</StyledHeader>
            <SubHeader>Try starring some tasks to see them here.</SubHeader>
        </FlexWrapper>
    )
};

export default Notice;

const SubHeader = styled.h2`
    font-weight: 600;
    line-height: 20px; 
    letter-spacing: 0.25px;
    margin-bottom: 60px;
    color: var(--white);
`;
