import { 
    TOGGLE_MODAL, 
    IS_LOGGING_OUT, 
    SAVE_SETTINGS } from "../actions/userPanelActions";

const toggleUserPanel = () => ({ type: TOGGLE_MODAL });
const changeIsLoggingOut = () => ({ type: IS_LOGGING_OUT });
const saveSettings = (dynamicContext) => ({ type: SAVE_SETTINGS, payload: { dynamicContext } });

const save = (dynamicContext) => {
    return (dispatch) => {
        dispatch(saveSettings(dynamicContext))
        dispatch(toggleUserPanel())
    }
};

export { 
    toggleUserPanel, 
    changeIsLoggingOut, 
    save 
};