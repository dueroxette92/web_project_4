export default class UserInfo {
    constructor({ profileName, profileDescription }) {
        this._profileName = profileName;
        this._profileDescription = profileDescription;

    }

    getUserInfo() {
        const userInfo = { name: this._profileName.textContent, description: this._profileDescription.textContent }
        return userInfo;
    }
    setUserInfo({ inputName, inputDescription }) {
        this._profileName.textContent = inputName;
        this._profileDescription.textContent = inputDescription;
    }
}