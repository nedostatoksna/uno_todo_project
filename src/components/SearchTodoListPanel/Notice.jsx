import React, { useContext } from "react";
import { AppContext } from "../../context/context";
import StyledHeader from "../../styled/StyledHeader";
import FlexColumnWrapper from "../../styled/FlexColumnWrapper";
import StyledSubHeader from "../../styled/StyledSubHeader";

const Notice = () => {

    const context = useContext(AppContext);

    return (
        <FlexColumnWrapper $height $center $width={"100%"} $smallPaddingTop>
            <StyledHeader $mode={context.mode} $mediumLineHeight $smallMargin $mediumGrey $Xlarge>Task not found</StyledHeader>
            <StyledSubHeader $mode={context.mode}>We searched high and low but couldn't find what you're looking for</StyledSubHeader>
        </FlexColumnWrapper>
    )
};

export default Notice;

