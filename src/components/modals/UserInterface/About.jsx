import React, { useContext } from "react";

import styled from "styled-components";
import { AppContext } from "../../../context/context";

const About = () => {

    const context = useContext(AppContext);

    return (
        <StyledContainer>
            <StyledText $mode={context.mode}>About</StyledText>
            <StyledDarkText $mode={context.mode}>Version<StyledNumber $mode={context.mode}>1.0</StyledNumber></StyledDarkText>
        </StyledContainer>
    )
};

export default About;

const StyledContainer = styled.div`
    padding-top: 10px;
`;
const StyledText = styled.p`
    font-family: "Roboto";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0.1px;
    color: ${props => props.$mode === "Light" ? "var(--primary-purple)" : "var(--dark-mode-primary-purple)"};
    margin: 2px 0px 12px 0px;
`;
const StyledDarkText = styled.p`
    font-family: "Roboto";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    color: ${props => props.$mode === "Light" ? "var(--black)" : "var(--dark-mode-white-text)"};
`;
const StyledNumber = styled.span`
    color: ${props => props.$mode === "Light" ? "var(--primary-purple)" : "var(--dark-mode-primary-purple)"};
    margin: 0px 0px 0px 12px;
`;
