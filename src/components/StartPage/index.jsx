import React, { useContext } from "react";
import startPageIllustration from "../../resources/images/startPageIlustration.svg";
import Button from "../../ui/Button";
import { AppContext } from "../../context/context";
import logoLightMode from "../../resources/images/logoUnoMD.svg";
import logoDarkMode from "../../resources/images/logoUnoWhite.svg";
import styled, { css } from "styled-components";

const StartPage = ({ setIsVisible }) => {

    const context = useContext(AppContext);

    return (
        <Wrapper $mode={context.mode}>
            <StartPageTextWrapper>
                <StartPageText $mode={context.mode}>
                    <StyledLogo src={context.mode === "Light" ? logoLightMode : logoDarkMode} />
                    <StyledHeader $mode={context.mode}>Welcome to Uno To Do!</StyledHeader>
                    <StyledSubHeader $mode={context.mode}>
                        Start using the best to-do app, you can
                        create and manage your To Do lists to
                        improve your organization.
                    </StyledSubHeader>
                    <Button onClick={() => setIsVisible(false)} $primary $widthMax $textAlign={"center"} $mode={context.mode}>Get started</Button>
                </StartPageText>
            </StartPageTextWrapper>
            <ImageWrapper $mode={context.mode}>
                <StyledIllustration src={startPageIllustration} alt="uno starting page illustration" />
            </ImageWrapper>
        </Wrapper>
    )
};

export default StartPage;

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    ${props => props.$mode === "Light" && css`
        background-color: var(--white);
    `} 
    ${props => props.$mode === "Dark" && css`
        background-color: var(--dark-mode-background);
    `} 
`;
const StartPageTextWrapper = styled.div`
    padding: 20px 60px;
    width: calc(100vw / 100 * 30);
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;
const ImageWrapper = styled.div`
    padding: 60px;
    width: calc(100vw / 100 * 70);
    display: flex;
    justify-content: center;
    align-items: center;
    ${props => props.$mode === "Light" && css`
        background-color: var(--transparent-lavender);
    `} 
    ${props => props.$mode === "Dark" && css`
        background-color: var(--dark-mode-transparent-lavender);
    `} 
`;
const StartPageText = styled.div`
    background-color: transparent;
    max-width: 330px;
`;
const StyledIllustration = styled.img` 
    max-width: 100%;
`;
const StyledLogo = styled.img` 
    margin-bottom: 100px;
    width: 103px; 
`;
const StyledHeader = styled.h1`
    margin-bottom: 16px;
    font-size: 57px;
    line-height: 64px;
    letter-spacing: -0.25px;
    ${props => props.$mode === "Light" && css`
        color: var(--black);
    `} 
    ${props => props.$mode === "Dark" && css`
        color: var(--dark-mode-white-text);
    `} 
`;
const StyledSubHeader = styled.h2`
    margin-bottom: 100px;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    ${props => props.$mode === "Light" && css`
        color: var(--primary-purple-light-variant);
    `} 
    ${props => props.$mode === "Dark" && css`
        color: var(--dark-mode-primary-purple-light-variant);
    `} 
`;