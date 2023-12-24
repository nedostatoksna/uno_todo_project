import React, { useContext } from "react";
import { changeIsSigningOut } from "../../../store/actionCreators/userPanelActionCreators";
import { useDispatch } from "react-redux";
import Button from "../../../ui/Button";
import { AppContext } from "../../../context/context";
import StyledHeader from "../../../ui/Header";
import StyledSubHeader from "../../../ui/SubHeader";
import FlexColumnWrapper from "../../../ui/FlexColumnWrapper";
import Picture from "../../../ui/Picture";

const UserCard = () => {

    const dispatch = useDispatch();
    const context = useContext(AppContext);

    return (
        <FlexColumnWrapper $smallPaddingTop $center>
            <Picture 
                $large 
                $mode={context.mode}>{context.userInitials}
            </Picture>
            <FlexColumnWrapper $center $marginBottomLarge>
                <StyledHeader 
                    $zeroMargin 
                    $large 
                    $mode={context.mode}>{context.userName}
                </StyledHeader>
                <StyledSubHeader 
                    $dark 
                    $mode={context.mode}
                >{context.userEmail}</StyledSubHeader>
            </FlexColumnWrapper>
            <Button 
                $coralColor 
                $ClearBackground 
                $paddingSmall 
                $MarginBottom
                $mode={context.mode} 
                onClick={() => {dispatch(changeIsSigningOut())}}
            >
                Sign Out
            </Button>
        </FlexColumnWrapper>
    )
};

export default UserCard;
