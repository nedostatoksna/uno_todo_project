import { 
    TOGGLE_MODAL, 
    IS_SIGNING_OUT, 
    SAVE_SETTINGS } from "../actions/userPanelActions";

const toggleUserPanel = () => ({ type: TOGGLE_MODAL });
const changeIsSigningOut = () => ({ type: IS_SIGNING_OUT });
const saveSettings = (dynamicContext) => ({ type: SAVE_SETTINGS, payload: { dynamicContext } });

const save = (dynamicContext) => {
    return (dispatch) => {
        dispatch(saveSettings(dynamicContext))
        dispatch(toggleUserPanel())
    }
}; 
const togglePanelandChangeIsSigningOut = (dynamicContext) => {
    return (dispatch) => {
        dispatch(toggleUserPanel())
        dispatch(changeIsSigningOut())
    }
}; 

export { 
    toggleUserPanel, 
    changeIsSigningOut, 
    togglePanelandChangeIsSigningOut,
    save 
};