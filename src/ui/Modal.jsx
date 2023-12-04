import React from "react";
import Button from "../ui/Button";
import styled, { css } from "styled-components";
import Background from "../styled/Background";
import ContentBox from "../styled/ContentBox";
import IconButton from "./IconButton";

const Modal = ( props ) => {

    return (
        <Background {...props} $darkTransparent $zIndex={props.$zIndex}>
            <ContentBox {...props} $primary $width={props.$boxWidth} $padding={props.$boxPadding}>

            {  
                props.$header === "Settings" || props.$header === "Add due date"
                    ?
                        <StyledContainerHeader {...props}>
                            <IconButton
                                $large
                                $type={"cross"} 
                                alt="close icon" 
                                onClick={props.$onCancelClickHandler}
                                $mode={props.$mode}></IconButton>
                            <ModalHeader {...props} $margin={"0px 0px 0px 24px"}>{props.$header}</ModalHeader>
                        </StyledContainerHeader> 
                    : 
                        <ModalHeader {...props}>{props.$header}</ModalHeader>
            }
                <div {...props}>{props.children}</div>
            { 
                props.$header !== "Add due date" &&
                <ButtonGroupWrapper {...props}>
                        <Button 
                            {...props}
                            $white 
                            $ClearBackground 
                            $paddingSmall 
                            $purpleColor
                            $margin={"0px 10px"}
                            $purpleHover
                            onClick={props.$onCancelClickHandler}
                        >
                            Cancel
                        </Button>
                        <Button 
                            {...props} 
                            $whitePlus={props.$whitePlusForBtn} 
                            $paddingForPlus={props.$paddingForPlusBtn}
                            onClick={props.$onСonfirmationClick}
                            $white={props.$okButton}
                            $ClearBackground={props.$okButton}
                            $paddingSmall={props.$okButton}
                            $purpleColor={props.$okButton}
                            $purpleHover={props.$okButton}
                        >
                            {props.$buttonText}
                        </Button>
                </ButtonGroupWrapper>
            }
            </ContentBox>
        </Background>
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