import React, { useContext, useState } from "react";
import style from "./UserSettings.module.css";
import { settings } from "../../context/settings";
import SettingsBar from "./SettingsBar";
import SaveCancelBtns from "./SaveCancelBtns";
import About from "../UserInterface/About";
import { useDispatch } from "react-redux";
import { AppContext } from "../../context/context";

const UserSettings = () => {
    const dispatch = useDispatch();
    const context = useContext(AppContext);

    const [dynamicContext, setDynamicContext] = useState(context);
    console.log(dynamicContext);

    return (
        <div className={style.settings_box}>
            <h3 className={style.settings_header}>General</h3>
            {
                settings.map(setting => (
                <SettingsBar 
                    setting={setting} 
                    name={setting.name} 
                    dynamicContext={dynamicContext}
                    setDynamicContext={setDynamicContext}
                    key={setting.name}
                />
                ))
            }
            <hr className={style.divider} width="460px" />
            <About />
            <SaveCancelBtns dispatch={dispatch} dynamicContext={dynamicContext} />
        </div> 
    )
};

export default UserSettings;