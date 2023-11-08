import style from "./SettingButton.module.css";
import sunIcon from "../../images/sunIcon.svg";
import moonIcon from "../../images/moonIcon.svg";

const SettingBtn = ({option, name, setDynamicContext, dynamicContext }) => {

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
        <div className={style.container}>
            <input 
                type="radio"
                name={name} 
                value={option}
                id={option} 
                className={style.radio_input}
                onChange={ () => changeHandler() }
                checked={ isChecked() }
            />
            <label 
                className={style.mark_label} 
                htmlFor={option}
            >  
            {
                (option === "Light") 
                    ? <img src={sunIcon} alt="sun" className={style.mode_icon} /> 
                    : option === "Dark" ? <img src={moonIcon} alt="moon" className={style.mode_icon} /> 
                    : undefined
            }
                <span className={style.mark_label_text}>{option}</span>
            </label>
        </div>

    )
};

export default SettingBtn;