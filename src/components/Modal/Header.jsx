import React, { useContext } from "react";
import styled, { css } from "styled-components";
import IconButton from "../../ui/IconButton";
import { AppContext } from "../../context/context";

const Header = ({ 
    settings,
    addDueDate,
    header, 
    onCancelClickHandler, 
    smallUppercase }) => {

    const context = useContext(AppContext);

    return (
        <>
            {  
                settings || addDueDate
                    ?
                        <StyledContainerHeader $paddingTopSmall={addDueDate}>
                            <IconButton
                                $large
                                $type={"cross"} 
                                alt="close icon" 
                                onClick={onCancelClickHandler}
                                $mode={context.mode}></IconButton>
                            <ModalHeader 
                                $mode={context.mode} 
                                $marginLeft={addDueDate || settings}
                                $marginBottom={!addDueDate && !settings}
                            >
                                {header}
                            </ModalHeader>
                        </StyledContainerHeader> 
                    : 
                        <ModalHeader 
                            $mode={context.mode} 
                            $smallUppercase={smallUppercase}
                            $marginBottom={!addDueDate && !settings}
                        >
                            {header}
                        </ModalHeader>
            }
        </>
    )
};

export default Header;

const ModalHeader = styled.h1`
    font-size: 22px;
    line-height: 28px; 
    ${props => props.$mode === "Light" && css`
        color: var(--black);
    `} 
    ${props => props.$mode === "Dark" && css`
        color: var(--dark-mode-white-text);
    `} 
    ${props => props.$smallUppercase && css `
        font-size: 10px;
        font-weight: 600;
        line-height: 16px; 
        letter-spacing: 1.5px;
        text-transform: uppercase;
        padding: 12px 20px 0px 20px;
    `}
    ${props => props.$marginLeft && css `
        margin-left: 24px;
    `}
    ${props => props.$marginBottom && css `
        margin-bottom: 16px;
    `}
`;
const StyledContainerHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 16px;
    ${props => props.$paddingTopSmall && css`
        padding-top: 6px;
    `} 
`;
