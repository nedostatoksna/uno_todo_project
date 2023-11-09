import React from "react";
import styled from "styled-components";

const Illustration = ( props ) => {

    return (
        <>
            <StyledIllustration {...props}>{props.children}</StyledIllustration>
        </>
    )
};
export default Illustration;

const StyledIllustration = styled.img` 
    width: "942px";
    height: "862px";
`;