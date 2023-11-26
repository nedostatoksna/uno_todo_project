import { useContext } from "react";
import { AppContext } from "../../../context/context";
import SettingsButton from "../../../ui/SettingsButton";

const UserSettingsButton = ({option, name, setDynamicContext, dynamicContext }) => {

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
        <SettingsButton 
            onChange={() => changeHandler()} 
            checked={isChecked()} 
            $option={option} 
            $mode={context.mode}
        />
    )
};

export default UserSettingsButton;
