import React from "react";
import style from "./UserSettings.module.css";
import SettingButton from "../../ui/SettingsButton";

const SettingsBar = ({ setting, name, dynamicContext, setDynamicContext }) => {

    return (
        <>
            <div className={style.radio_group_box}>
                <h4 className={style.settings_subheader}>{setting.header}</h4>
                <div className={style.radio_btns_wrapper}>
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
                </div>
                { setting.header === "Language" ? <p className={style.notice}>Change will be applied at next app restart</p> : undefined }
            </div>
        </>
    )
};

export default SettingsBar;