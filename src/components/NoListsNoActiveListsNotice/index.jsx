import React, { useContext } from "react";
import Background from "../../ui/Background";
import { AppContext } from "../../context/context";
import { useSelector } from "react-redux";
import NoticeCase from "../NoticeCase";

const NoListsNoActiveListsNotice = () => {

    const context = useContext(AppContext);
    const lists = useSelector(state => state.dataLists);

    return (
        <Background $primary $mode={context.mode} $widthLarge>
            <NoticeCase noticeCase={lists.length ? "noActiveList" : "noList"} />
        </Background>
    )
};

export default NoListsNoActiveListsNotice;

