import React, { useContext } from "react";
import SettingButton from "./SettingButton";
import styled from "styled-components";
import { AppContext } from "../../context/context";

const SettingsBar = ({ setting, name, dynamicContext, setDynamicContext }) => {

    const context = useContext(AppContext);

    return (
        <>
            <RadioGroupContainer>
                <RadioGroupHeader $mode={context.mode}>{setting.header}</RadioGroupHeader>
                <RadioButtonsWrapper>
                    {
                        setting.options.map(option => (
                            <SettingButton
                                option={option} 
                                name={name}                   
                                dynamicContext={dynamicContext}
                                setDynamicContext={setDynamicContext}
                                key={option}
                            />
                        ))
                    }
                </RadioButtonsWrapper>
                { setting.header === "Language" ? <StyledNotice $mode={context.mode}>Change will be applied at next app restart</StyledNotice> : undefined }
            </RadioGroupContainer>
        </>
    )
};

export default SettingsBar;

const RadioGroupContainer = styled.div`
    margin-bottom: 20px;
`;
const RadioGroupHeader = styled.h4`
    font-family: "Roboto";
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 0.4px;
    margin-bottom: 5px;
    color: ${props => props.$mode === "Light" ? "rgba(28, 27, 31, 1)" : "rgba(230, 225, 229, 0.38)"};
`;
const RadioButtonsWrapper = styled.h4`
    display: flex;
    flex-direction: row;
`;
const StyledNotice = styled.h4`
    font-family: "Roboto";
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 0.4px;
    color: ${props => props.$mode === "Light" ? "rgba(28, 27, 31, 0.38)" : "rgba(230, 225, 229, 0.38)"};
    margin-top: 5px;
`;