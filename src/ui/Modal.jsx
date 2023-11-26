import React from "react";
import Button from "../ui/Button";
import styled from "styled-components";
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
                <ButtonGroupWrapper>
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
`;
const ModalHeader = styled.h1`
    margin: ${props => props.$margin || "0px 0px 16px 0px"};
    font-size: 22px;
    line-height: 28px; 
    color: ${props => props.$mode === "Light" ? "var(--black)" : "var(--dark-mode-white-text)"};
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
`;
const StyledContainerHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;