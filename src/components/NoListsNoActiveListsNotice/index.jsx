import React, { useContext } from "react";
import StyledHeader from "../../ui/StyledHeader";
import FlexColumnWrapper from "../../ui/FlexColumnWrapper";
import StyledSubHeader from "../../ui/StyledSubHeader";
import Background from "../../ui/Background";
import { AppContext } from "../../context/context";
import { useSelector } from "react-redux";

const NoListsNoActiveListsNotice = () => {

    const context = useContext(AppContext);
    const lists = useSelector(state => state.dataLists);

    return (
        <Background $primary $mode={context.mode} $widthLarge>
            <FlexColumnWrapper $center $height100 $smallPaddingTop>
                <StyledHeader $mediumLineHeight $white $smallMargin $Xlarge>{lists.length ? "There is no active task list" : "There are no task lists yet"}</StyledHeader>
                <StyledSubHeader $marginBottom60 $white>{lists.length ? "Click on one of the lists to see it here" : "Try creating one by clicking the 'New List' button"}</StyledSubHeader>
            </FlexColumnWrapper>
        </Background>
    )
};

export default NoListsNoActiveListsNotice;