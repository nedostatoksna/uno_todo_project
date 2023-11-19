import sunIcon from "../../images/sunIcon.svg";
import sunIconDark from "../../images/sunIconForDark.svg";
import moonIcon from "../../images/moonIcon.svg";
import moonIconDark from "../../images/moonIconForDark.svg";
import styled from "styled-components";
import { useContext } from "react";
import { AppContext } from "../../context/context";

const SettingButton = ({option, name, setDynamicContext, dynamicContext }) => {

    const context = useContext(AppContext);

    const changeHandler = function() {
        switch (name) {
            case "color": return setDynamicContext({...dynamicContext, palette: option});
            case "lang": return setDynamicContext({...dynamicContext, lang: option});
            default: return setDynamicContext({...dynamicContext, mode: option});      
        }
    };
    const isChecked = function() {
        switch (name) {
            case "color": return dynamicContext.palette === option;
            case "lang": return dynamicContext.lang === option;
            default: return dynamicContext.mode === option;      
        }
    };

    return (
        <StyledContainer $mode={context.mode}>
            <StyledInput 
                $mode={context.mode}
                type="radio"
                name={name} 
                value={option}
                id={option} 
                onChange={ () => changeHandler() }
                checked={ isChecked() }
            />
            <StyledLabel 
                $mode={context.mode}
                htmlFor={option}
            >  
            {
                (option === "Light") 
                    ? <img src={context.mode === "Light" ? sunIcon : sunIconDark} alt="sun" /> 
                    : option === "Dark" ? <img src={context.mode === "Light" ? moonIcon : moonIconDark} alt="moon" /> 
                    : undefined
            }
                <StyledMark>{option}</StyledMark>
            </StyledLabel>
        </StyledContainer>

    )
};

export default SettingButton;


const StyledInput = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 32px;
    width: 74px;
`;
const StyledLabel = styled.label`
    top: 0;
    left: 0;
    height: 32px;
    display: flex;
    border: 1px solid;
    border-color: ${props => props.$mode === "Light" ? "#79747E" : "#79747E"};
    color: ${props => props.$mode === "Light" ? "#A5A0AC" : "#CAC4D0"};
    font-family: "Roboto";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; 
    letter-spacing: 0.1px;
    border-radius: 8px;
    padding: 6px 8px;
`;
const StyledMark = styled.span`
    padding: 0px 8px;
`;
const StyledContainer = styled.div`
    display: block;
    position: relative;
    margin-right: 5px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    &:hover ${StyledInput} ~ ${StyledLabel} {
        background-color: ${props => props.$mode === "Light" ? "rgba(28, 27, 31, 0.08)" : "rgba(230, 225, 229, 0.08)"};
    };
    & ${StyledInput}:checked ~ ${StyledLabel} {
        background-color: ${props => props.$mode === "Light" ? "#E5DFF9" : "#474459"};
        color: ${props => props.$mode === "Light" ? "#160067" : "#E5DEFF"};
        border: 1px solid;
        border-color: ${props => props.$mode === "Light" ? "#E5DFF9" : "#474459"};
    };
`;
