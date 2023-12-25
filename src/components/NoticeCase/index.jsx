import React from "react";
import BackgroundWithText from "../../ui/BackgroundWithText";
import { noticeOptions } from "../../data/noticeOptions";

const NoticeCase = ({ noticeCase }) => {

    const option = noticeOptions.filter(option => option.title === noticeCase);

    return (
        <BackgroundWithText
            white={noticeCase !== "noFoundTasks"}
            mediumGrey={noticeCase === "noFoundTasks"}
            headerText={option[0].header}
            subHeaderText={option[0].subHeader}
        />
    )
};

export default NoticeCase;

