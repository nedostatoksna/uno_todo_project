import React from "react";
import StyledHeader from "../../styled/StyledHeader";
import FlexColumnWrapper from "../../styled/FlexColumnWrapper";
import StyledSubHeader from "../../styled/StyledSubHeader";

const Notice = () => {

    return (
        <FlexColumnWrapper $height $center $width={"100%"} $smallPaddingTop>
            <StyledHeader $mediumLineHeight $white $smallMargin $Xlarge>Important Tasks</StyledHeader>
            <StyledSubHeader $marginBottom60 $white>Try starring some tasks to see them here.</StyledSubHeader>
        </FlexColumnWrapper>
    )
};

export default Notice;

