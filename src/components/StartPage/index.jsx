import React, { useContext } from "react";
import startPageIllustration from "../../images/startPageIlustration.svg";
import Button from "../../ui/buttons/Button";
import Wrapper from "../../ui/divs/Wrapper";
import { AppContext } from "../../context/context";
import logoLightMode from "../../images/logoUnoMD.svg";
import logoDarkMode from "../../images/logoUnoWhite.svg";
import Logo from "../../ui/styledImages/Logo";
import Header from "../../ui/headers/Header";
import SubHeader from "../../ui/headers/SubHeader";
import Illustration from "../../ui/styledImages/Illustration";
import Flex from "../../ui/divs/Flex";

const StartPage = ({ setIsVisible }) => {

    const context = useContext(AppContext);

    return (
        <Wrapper $mode={context.mode} $primary $width={"1512px"}>
            <Flex $flexDir={"row"}>
                <Wrapper $width={"450px"} $padding={"20px 60px"}>
                    <Logo src={context.mode === "Light" ? logoLightMode : logoDarkMode} />
                    <Header $mode={context.mode}>Welcome to Uno To Do!</Header>
                    <SubHeader $mode={context.mode}>
                        Start using the best to-do app, you can
                        create and manage your To Do lists to
                        improve your organization.
                    </SubHeader>
                    <Button onClick={() => setIsVisible(false)} $primary $width={"330px"} $mode={context.mode}>Get started</Button>
                </Wrapper>
                <Wrapper $padding={"60px"} $transparent $width={"1062px"} $mode={context.mode}>
                    <Illustration src={startPageIllustration} alt="uno starting page illustration" />
                </Wrapper>
            </Flex>
        </Wrapper>
    )
};

export default StartPage;