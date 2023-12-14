import React, { useContext } from "react";
import { AppContext } from "../../context/context";
import StyledHeader from "../../ui/StyledHeader";
import FlexColumnWrapper from "../../ui/FlexColumnWrapper";
import StyledSubHeader from "../../ui/StyledSubHeader";

const Notice = () => {

    const context = useContext(AppContext);

    return (
        <FlexColumnWrapper $height $center $width100 $smallPaddingTop>
            <StyledHeader $mode={context.mode} $mediumLineHeight $smallMargin $mediumGrey $Xlarge>Task not found</StyledHeader>
            <StyledSubHeader $marginBottom60 $mode={context.mode}>We searched high and low but couldn't find what you're looking for</StyledSubHeader>
        </FlexColumnWrapper>
    )
};

export default Notice;

