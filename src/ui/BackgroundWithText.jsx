import React, { useContext } from "react";
import StyledHeader from "./Header";
import FlexColumnWrapper from "../ui/FlexColumnWrapper";
import StyledSubHeader from "./SubHeader";
import { AppContext } from "../context/context";

const BackgroundWithText = ({ 
    headerText, 
    subHeaderText, 
    white, 
    mediumGrey }) => {

    const context = useContext(AppContext);

    return (
        <FlexColumnWrapper $height100 $center $width100 $smallPaddingTop>
            <StyledHeader 
                $mediumLineHeight 
                $white={white} 
                $mediumGrey={mediumGrey}
                $smallMargin 
                $Xlarge
                $mode={context.mode}
            >
                {headerText}
            </StyledHeader>
            <StyledSubHeader 
                $marginBottom60 
                $white={white}
                $mode={context.mode}
            >
                {subHeaderText}
            </StyledSubHeader>
        </FlexColumnWrapper>
    )
};

export default BackgroundWithText;


