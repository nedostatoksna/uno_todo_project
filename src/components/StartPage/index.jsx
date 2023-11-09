import React, { useContext } from "react";
import style from "./StartPage.module.css";
import startPageIllustration from "../../images/startPageIlustration.svg";
import PrimaryButton from "../../ui/PrimaryButton";
import Wrapper from "../../ui/Wrapper";
import { AppContext } from "../../context/context";
import logoLightMode from "../../images/logoUnoMD.svg";
import logoDarkMode from "../../images/logoUnoWhite.svg";
import Logo from "../../ui/Logo";
import Header from "../../ui/Header";
import SubHeader from "../../ui/SubHeader";
import Illustration from "../../ui/Illustration";

const StartPage = ({ setIsVisible }) => {

    const context = useContext(AppContext);

    return (
        <>
            <Wrapper $margin={"auto"} $display={"flex"} $flexDir={"row"} $width={"1512px"} $background={context.mode === "Light" ? "#fff" : "#201F24"}>
                <Wrapper $padding={"248px 60px"} $mode={context.mode}>
                    <Logo src={context.mode === "Light" ? logoLightMode : logoDarkMode} />
                    <Header $mode={context.mode}>Welcome to Uno To Do!</Header>
                    <SubHeader $mode={context.mode}>
                        Start using the best to-do app, you can
                        create and manage your To Do lists to
                        improve your organization.
                    </SubHeader>
                    <PrimaryButton onClick={() => setIsVisible(false)} $text={"Get started"} $width={"330px"} $margin={"0px"} $mode={context.mode} />
                </Wrapper>
                <Wrapper $padding={"60px"} $background={context.mode === "Light" ? "rgba(89, 70, 210, 0.08)" : "rgba(200, 191, 255, 0.08)"} $mode={context.mode}>
                <Illustration src={startPageIllustration} alt="uno starting page illustration" />
                </Wrapper>
            </Wrapper>
        </>
    )
};

export default StartPage;