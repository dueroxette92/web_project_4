export default class UserInfo {
    constructor({ profileName, profileDes }) {
        this._profileName = profileName;
        this._profileDes = profileDes;

    }

    getUserInfo() {
        const userInfo = { name: this._profileName.textContent, description: this._profileDes.textContent }
        return userInfo;
    }
    setUserInfo({ inputName, inputDescription }) {
        this._profileName.textContent = inputName;
        this._profileDes.textContent = inputDescription;
    }
}