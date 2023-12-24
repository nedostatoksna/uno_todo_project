import React, { useContext } from "react";
import UserSettingsButton from "./UserSettingsButton";
import styled, { css } from "styled-components";
import { AppContext } from "../../../context/context";

const SettingsBar = ({ setting, 
                       name, 
                       dynamicContext, 
                       setDynamicContext }) => {

    const context = useContext(AppContext);

    return (
        <RadioGroupContainer>
            <RadioGroupHeader $mode={context.mode}>
                {setting.header}
            </RadioGroupHeader>
            <RadioButtonsWrapper>
                {
                    setting.options.map(option => (
                        <UserSettingsButton
                            option={option} 
                            name={name}                   
                            dynamicContext={dynamicContext}
                            setDynamicContext={setDynamicContext}
                            key={option}
                        />
                    ))
                }
            </RadioButtonsWrapper>
            { setting.header === "Language" 
                && <StyledNotice $mode={context.mode}>
                        Change will be applied at next app restart
                   </StyledNotice> }
        </RadioGroupContainer>
    )
};

export default SettingsBar;

const RadioGroupContainer = styled.div`
    margin-bottom: 20px;
`;
const RadioGroupHeader = styled.h4`
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 0.4px;
    margin-bottom: 5px;
    ${props => props.$mode === "Light" && css`
        color: var(--black);
    `} 
    ${props => props.$mode === "Dark" && css`
        color: var(--dark-mode-transparent-grey-text-medium-variant);
    `} 
`;
const RadioButtonsWrapper = styled.h5`
    display: flex;
    flex-direction: row;
`;
const StyledNotice = styled.h6`
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 0.4px;
    margin-top: 5px;
    ${props => props.$mode === "Light" && css`
        color: var(--transparent-grey-text-medium-variant);
    `} 
    ${props => props.$mode === "Dark" && css`
        color: var(--dark-mode-transparent-grey-text-medium-variant);
    `} 
`;