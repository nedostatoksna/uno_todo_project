import React, { useContext } from "react";
import Background from "../../ui/Background";
import { AppContext } from "../../context/context";
import { useSelector } from "react-redux";
import BackgroundWithText from "../../ui/BackgroundWithText";

const NoListsNoActiveListsNotice = () => {

    const context = useContext(AppContext);
    const lists = useSelector(state => state.dataLists);

    return (
        <Background $primary $mode={context.mode} $widthLarge>
            <BackgroundWithText
                white
                headerText={lists.length ? "There is no active task list" 
                                         : "There are no task lists yet"}
                subHeaderText={lists.length ? "Click on one of the lists to see it here" 
                                            : "Try creating one by clicking the 'New List' button"}
            />
        </Background>
    )
};

export default NoListsNoActiveListsNotice;

