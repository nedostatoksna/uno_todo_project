import React from "react";
import styled from "styled-components";

const Logo = ( props ) => {

    return (
        <>
            <StyledLogo {...props} />
        </>
    )
};
export default Logo;

const StyledLogo = styled.img` 
    margin-bottom: 100px;
    width: "103px";
    height: "30px";
`;