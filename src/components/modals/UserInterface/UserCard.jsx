import React, { useContext } from "react";
import { togglePanelandChangeIsSigningOut } from "../../../store/actionCreators/userPanelActionCreators";
import { useDispatch } from "react-redux";
import Button from "../../../ui/Button";
import { AppContext } from "../../../context/context";
import StyledHeader from "../../../styled/StyledHeader";
import StyledSubHeader from "../../../styled/StyledSubHeader";
import FlexColumnWrapper from "../../../styled/FlexColumnWrapper";
import UserPicture from "../../../styled/UserPicture";

const UserCard = () => {

    const dispatch = useDispatch();
    const context = useContext(AppContext);

    return (
        <FlexColumnWrapper $smallPaddingTop $center>
            <UserPicture $large $mode={context.mode}>{context.userInitials}</UserPicture>
            <FlexColumnWrapper $center $margin={"0px 0px 12px 0px"}>
                <StyledHeader $zeroMargin $large $mode={context.mode}>{context.userName}</StyledHeader>
                <StyledSubHeader $dark $mode={context.mode}>{context.userEmail}</StyledSubHeader>
            </FlexColumnWrapper>
            <Button 
                $coralColor 
                $ClearBackground 
                $paddingSmall 
                $margin={"0px 0px 12px 0px"}
                $mode={context.mode} 
                onClick={() => {dispatch(togglePanelandChangeIsSigningOut())}}
            >Sign Out</Button>
        </FlexColumnWrapper>
    )
};

export default UserCard;
