import React, { useContext } from "react";
import startPageIllustration from "../../images/startPageIlustration.svg";
import Button from "../../ui/Button";
import { AppContext } from "../../context/context";
import logoLightMode from "../../images/logoUnoMD.svg";
import logoDarkMode from "../../images/logoUnoWhite.svg";
import styled from "styled-components";

const StartPage = ({ setIsVisible }) => {

    const context = useContext(AppContext);

    return (
        <Wrapper $mode={context.mode}>
            <StartPageTextWrapper>
                <StartPageText $mode={context.mode}>
                    <StyledLogo src={context.mode === "Light" ? logoLightMode : logoDarkMode} width={"103px"} />
                    <StyledHeader $mode={context.mode}>Welcome to Uno To Do!</StyledHeader>
                    <StyledSubHeader $mode={context.mode}>
                        Start using the best to-do app, you can
                        create and manage your To Do lists to
                        improve your organization.
                    </StyledSubHeader>
                    <Button onClick={() => setIsVisible(false)} $primary $width={"330px"} $textAlign={"center"} $mode={context.mode}>Get started</Button>
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
    background-color: ${props => props.$mode === "Light" ? "var(--white)" : "var(--dark-mode-background)"};
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
`;
const StartPageTextWrapper = styled.div`
    padding: 20px 60px;
    width: calc(100vw / 100 * 30);
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;
const ImageWrapper = styled.div`
    background-color: ${props => props.$mode === "Light" ? "var(--transparent-lavender)" : "var(--dark-mode-transparent-lavender)"}; 
    padding: 60px;
    width: calc(100vw / 100 * 70);
    display: flex;
    justify-content: center;
    align-items: center;
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
`;
const StyledHeader = styled.h1`
    margin-bottom: 16px;
    color: ${props => props.$mode === "Light" ? "var(--black)" : "var(--dark-mode-white-text)"};
    font-family: "Roboto";
    font-size: 57px;
    font-style: normal;
    font-weight: 400;
    line-height: 64px;
    letter-spacing: -0.25px;
`;
const StyledSubHeader = styled.h2`
    margin-bottom: 100px;
    color: ${props => props.$mode === "Light" ? "var(--primary-purple-light-variant)" : "var(--dark-mode-primary-purple-light-variant)"};
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
`;