import React, { useContext } from "react";
import Button from "../ui/Button";
import styled, { css } from "styled-components";
import TransparentBackground from "../ui/TransparentBackground";
import ContentBox from "../ui/ContentBox";
import IconButton from "./IconButton";
import { AppContext } from "../context/context";

const Modal = ({ 
    boxWidth,   
    header, 
    onCancelClickHandler, 
    onСonfirmationClick, 
    whitePlusForBtn, 
    paddingForPlusBtn, 
    buttonText, 
    okButton, 
    children, 
    breakModal,
    primarySaveBtn,
    smallUppercase,
    saveModal,
    signOut }) => {

    const context = useContext(AppContext);

    return (
        <TransparentBackground $secondLayerModal={signOut}>
            <ContentBox 
                $primary 
                $width={boxWidth} 
                $mode={context.mode} 
                $sizeLargeStandartPadding={saveModal}
                $smallSize={header === "select date"}
                $mediumSize={header === "Add due date"}
                $sizeLargeSmallPadding={header === "Settings"}
                $minimumSize={breakModal}
            >
            {  
                header === "Settings" || header === "Add due date"
                    ?
                        <StyledContainerHeader $paddingTopSmall={header === "Add due date"}>
                            <IconButton
                                $large
                                $type={"cross"} 
                                alt="close icon" 
                                onClick={onCancelClickHandler}
                                $mode={context.mode}></IconButton>
                            <ModalHeader 
                                $mode={context.mode} 
                                $marginLeft={header === "Add due date" || header === "Settings"}
                                $marginBottom={header !== "Add due date" && header !== "Settings"}
                            >
                                {header}
                            </ModalHeader>
                        </StyledContainerHeader> 
                    : 
                        <ModalHeader 
                            $mode={context.mode} 
                            $smallUppercase={smallUppercase}
                            $marginBottom={header !== "Add due date" && header !== "Settings"}
                        >
                            {header}
                        </ModalHeader>
            }
                <div>{children}</div>
            { 
                header !== "Add due date" &&
                <ButtonGroupWrapper>
                        <Button 
                            $mode={context.mode}
                            $white 
                            $ClearBackground 
                            $paddingSmall 
                            $purpleColor
                            $MarginSides
                            $purpleHover
                            onClick={onCancelClickHandler}
                        >
                            Cancel
                        </Button>
                        <Button 
                            $mode={context.mode}
                            $whitePlus={whitePlusForBtn} 
                            $paddingForPlus={paddingForPlusBtn}
                            onClick={onСonfirmationClick}
                            $coral={breakModal}
                            $primary={primarySaveBtn}
                            $white={okButton}
                            $ClearBackground={okButton}
                            $paddingSmall={okButton}
                            $purpleColor={okButton}
                            $purpleHover={okButton}
                        >
                            {buttonText}
                        </Button>
                </ButtonGroupWrapper>
            }
            </ContentBox>
        </TransparentBackground>
    )
};

export default Modal;

const ButtonGroupWrapper = styled.div`
    padding: 20px 4px 0px 4px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    ${props => props.$okButton && css `
        padding: 6px 2px 2px 2px;
    `}
`;
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