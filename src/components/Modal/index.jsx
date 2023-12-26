import React, { useContext } from "react";
import ModalBackground from "../../ui/ModalBackground";
import ContentBox from "../../ui/ContentBox";
import { AppContext } from "../../context/context";
import Header from "./Header";
import ButtonsGroup from "./ButtonsGroup";

const Modal = ({ 
    settings,
    calendar,
    addDueDate,
    boxWidth,   
    header, 
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
                <Header 
                    settings={settings}
                    addDueDate={addDueDate}
                    header={header}
                    onCancelClickHandler={onCancelClickHandler}
                    smallUppercase={smallUppercase}
                />
                <div>{children}</div>
                <ButtonsGroup     
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



