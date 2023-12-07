import React, { useContext } from "react";
import Button from "../ui/Button";
import styled, { css } from "styled-components";
import TransparentBackground from "../styled/TransparentBackground";
import ContentBox from "../styled/ContentBox";
import IconButton from "./IconButton";
import { AppContext } from "../context/context";

const Modal = ({ boxWidth, 
                 boxPadding, 
                 header, 
                 onCancelClickHandler, 
                 onСonfirmationClick, 
                 whitePlusForBtn, 
                 paddingForPlusBtn, 
                 buttonText, 
                 okButton, 
                 children, 
                 smallUppercase }) => {

    const context = useContext(AppContext);

    return (
        <TransparentBackground>
            <ContentBox $primary $width={boxWidth} $padding={boxPadding} $mode={context.mode}>
            {  
                header === "Settings" || header === "Add due date"
                    ?
                        <StyledContainerHeader>
                            <IconButton
                                $large
                                $type={"cross"} 
                                alt="close icon" 
                                onClick={onCancelClickHandler}
                                $mode={context.mode}></IconButton>
                            <ModalHeader $mode={context.mode} $margin={"0px 0px 0px 24px"}>{header}</ModalHeader>
                        </StyledContainerHeader> 
                    : 
                        <ModalHeader $mode={context.mode} $smallUppercase={smallUppercase}>{header}</ModalHeader>
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
                            $margin={"0px 10px"}
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
    margin: ${props => props.$margin || "0px 0px 16px 0px"};
    font-size: 22px;
    line-height: 28px; 
    color: ${props => props.$mode === "Light" ? "var(--black)" : "var(--dark-mode-white-text)"};
    ${props => props.$smallUppercase && css `
        font-size: 10px;
        font-weight: 600;
        line-height: 16px; 
        letter-spacing: 1.5px;
        text-transform: uppercase;
        padding: 0px 20px;
    `}
`;
const StyledContainerHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;