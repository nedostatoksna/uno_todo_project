import React, { useContext } from "react";
import ModalBackground from "../../ui/ModalBackground";
import ContentBox from "../../ui/ContentBox";
import { AppContext } from "../../context/context";
import ModalBtnsGroup from "./ModalBtnsGroup";
import ModalHeader from "./ModalHeader";

const Modal = ({ 
    settings,
    calendar,
    addDueDate,
    boxWidth,   
    onCancelClickHandler, 
    onСonfirmationClick, 
    whitePlusForBtn, 
    paddingForPlusBtn, 
    buttonText, 
    children, 
    breakModal,
    primarySaveBtn,
    smallUppercase,
    saveModal,
    header,
    signOut }) => {

    const context = useContext(AppContext);

    return (
        <ModalBackground $secondLayerModal={signOut}>
            <ContentBox 
                $primary 
                $width={boxWidth} 
                $mode={context.mode} 
                $sizeLargeStandartPadding={saveModal}
                $smallSize={calendar}
                $mediumSize={addDueDate}
                $sizeLargeSmallPadding={settings}
                $minimumSize={breakModal}
            >
            <ModalHeader    
                settings={settings}
                addDueDate={addDueDate}
                header={header}
                onCancelClickHandler={onCancelClickHandler}
                smallUppercase={smallUppercase}
            />
                <div>{children}</div>
            <ModalBtnsGroup
                calendar={calendar}
                addDueDate={addDueDate}
                onCancelClickHandler={onCancelClickHandler}
                onСonfirmationClick={onСonfirmationClick}
                whitePlusForBtn={whitePlusForBtn}
                paddingForPlusBtn={paddingForPlusBtn}
                buttonText={buttonText}
                breakModal={breakModal}
                primarySaveBtn={primarySaveBtn} 
            />
            </ContentBox>
        </ModalBackground>
    )
};

export default Modal;

