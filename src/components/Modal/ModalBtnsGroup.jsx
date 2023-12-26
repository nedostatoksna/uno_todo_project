import React, { useContext } from "react";
import Button from "../../ui/Button";
import styled, { css } from "styled-components";
import { AppContext } from "../../context/context";

const ModalBtnsGroup = ({ 
    calendar,
    addDueDate,
    onCancelClickHandler, 
    onСonfirmationClick, 
    whitePlusForBtn, 
    paddingForPlusBtn, 
    buttonText, 
    breakModal,
    primarySaveBtn }) => {

    const context = useContext(AppContext);

    return (
        <>
            { !addDueDate &&
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
                        $white={calendar}
                        $ClearBackground={calendar}
                        $paddingSmall={calendar}
                        $purpleColor={calendar}
                        $purpleHover={calendar}
                    >
                        {buttonText}
                    </Button>
                </ButtonGroupWrapper>
            }
        </>
    )
};

export default ModalBtnsGroup;

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

