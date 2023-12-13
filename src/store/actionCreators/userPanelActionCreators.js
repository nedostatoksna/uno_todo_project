import { 
    TOGGLE_MODAL, 
    IS_SIGNING_OUT, 
    SAVE_SETTINGS } from "../actions/userPanelActions";

const toggleUserPanel = () => ({ type: TOGGLE_MODAL });
const changeIsSigningOut = () => ({ type: IS_SIGNING_OUT });
const saveSettings = (payload) => ({ type: SAVE_SETTINGS, payload });

export { 
    toggleUserPanel, 
    changeIsSigningOut, 
    saveSettings
};