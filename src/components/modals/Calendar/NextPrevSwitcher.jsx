import React, { useContext } from "react";
import styled from "styled-components";
import IconButton from "../../../ui/IconButton";
import { AppContext } from "../../../context/context";

const NextPrevSwitcher = () => {

    const context = useContext(AppContext);

    return (
        <SwitcherWrapper>
                <IconButton $mode={context.mode} $type={"arrowLeft"} $large ></IconButton>
                <IconButton $mode={context.mode} $type={"arrowRight"} $large ></IconButton>
        </SwitcherWrapper>
    )
};

export default NextPrevSwitcher;

const SwitcherWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;


