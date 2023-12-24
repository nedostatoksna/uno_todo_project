import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { AppContext } from "../../../context/context";

const About = () => {

    const context = useContext(AppContext);

    return (
        <StyledContainer>
            <StyledText $mode={context.mode}>About</StyledText>
            <StyledDarkText $mode={context.mode}>
                Version
                <StyledNumber $mode={context.mode}>
                    1.0
                </StyledNumber>
            </StyledDarkText>
        </StyledContainer>
    )
};

export default About;

const StyledContainer = styled.div`
    padding-top: 10px;
`;
const StyledText = styled.p`
    font-weight: 600;
    line-height: 20px;
    margin: 2px 0px 12px 0px;
    ${props => props.$mode === "Light" && css`
        color: var(--primary-purple);
    `} 
    ${props => props.$mode === "Dark" && css`
        color: var(--dark-mode-primary-purple);
    `} 
`;
const StyledDarkText = styled.p`
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    ${props => props.$mode === "Light" && css`
        color: var(--black);
    `} 
    ${props => props.$mode === "Dark" && css`
        color: var(--dark-mode-white-text);
    `} 
`;
const StyledNumber = styled.span`
    font-weight: 600;
    margin: 0px 0px 0px 12px;
    ${props => props.$mode === "Light" && css`
        color: var(--primary-purple);
    `} 
    ${props => props.$mode === "Dark" && css`
        color: var(--dark-mode-primary-purple);
    `} 
`;
