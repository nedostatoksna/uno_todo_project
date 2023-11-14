import React, { useContext } from "react";
import startPageIllustration from "../../images/startPageIlustration.svg";
import Button from "../../ui/buttons/Button";
import { AppContext } from "../../context/context";
import logoLightMode from "../../images/logoUnoMD.svg";
import logoDarkMode from "../../images/logoUnoWhite.svg";
import Header from "../../ui/headers/Header";
import SubHeader from "../../ui/headers/SubHeader";
import styled from "styled-components";

const StartPage = ({ setIsVisible }) => {

    const context = useContext(AppContext);

    return (
        <StartPageWrapper $mode={context.mode}>
            <StartPageTextWrapper>
                <StartPageText $mode={context.mode}>
                    <StyledLogo src={context.mode === "Light" ? logoLightMode : logoDarkMode} width={"103px"} />
                    <Header $mode={context.mode}>Welcome to Uno To Do!</Header>
                    <SubHeader $mode={context.mode}>
                        Start using the best to-do app, you can
                        create and manage your To Do lists to
                        improve your organization.
                    </SubHeader>
                    <Button onClick={() => setIsVisible(false)} $primary $width={"330px"} $mode={context.mode}>Get started</Button>
                </StartPageText>
            </StartPageTextWrapper>
            <ImageWrapper $mode={context.mode}>
                <StyledIllustration src={startPageIllustration} alt="uno starting page illustration" />
            </ImageWrapper>
        </StartPageWrapper>
    )
};

export default StartPage;

const StartPageWrapper = styled.div`
    background-color: ${props => props.$mode === "Light" ? "#fff" : "#201F24"};
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
`;
const StartPageTextWrapper = styled.div`
    padding: 20px 60px;
    max-width: 450px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;
const ImageWrapper = styled.div`
    background-color: ${props => props.$mode === "Light" ? "rgba(89, 70, 210, 0.08)" : "rgba(200, 191, 255, 0.08)"}; 
    padding: 60px;
    width: calc(100vw - 450px);
    display: flex;
    justify-content: center;
    align-items: center;
`;
const StartPageText = styled.div`
    background-color: ${props => props.$mode === "Light" ? "#fff" : "#201F24"};
    min-width: 330px;
`;
const StyledIllustration = styled.img` 
    max-width: 100%;
`;
const StyledLogo = styled.img` 
    margin-bottom: 100px;
`;