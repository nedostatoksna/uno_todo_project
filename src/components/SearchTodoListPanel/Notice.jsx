import React from "react";
import BackgroundWithText from "../../ui/BackgroundWithText";

const Notice = () => {

    return (
        <BackgroundWithText
            mediumGrey
            headerText={"Task not found"}
            subHeaderText={"We searched high and low but couldn't find what you're looking for"}
        />
    )
};

export default Notice;

