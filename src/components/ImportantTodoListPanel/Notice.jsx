import React from "react";
import StyledHeader from "../../ui/StyledHeader";
import FlexColumnWrapper from "../../ui/FlexColumnWrapper";
import StyledSubHeader from "../../ui/StyledSubHeader";

const Notice = () => {

    return (
        <FlexColumnWrapper $height $center $width100 $smallPaddingTop>
            <StyledHeader $mediumLineHeight $white $smallMargin $Xlarge>Important Tasks</StyledHeader>
            <StyledSubHeader $marginBottom60 $white>Try starring some tasks to see them here.</StyledSubHeader>
        </FlexColumnWrapper>
    )
};

export default Notice;

