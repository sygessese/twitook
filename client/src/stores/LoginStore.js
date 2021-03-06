import URLS from "../constants/LoginConstants";
const { LOGIN_USER, LOGOUT_USER, UPDATE_USERNAME } = URLS;

import BaseStore from "./BaseStore";
// import jwt_decode from 'jwt-decode';

class LoginStore extends BaseStore {
  constructor() {
    super();
    this.subscribe(() => this._registerToActions.bind(this));
    this._user = null;
    this._jwt = null;
    this._route = "/";
  }

  _registerToActions(action) {
    switch (action.actionType) {
      case LOGIN_USER:
        this._jwt = action.jwt.token;
        this._user = action.jwt.username;
        this._route = action.route;
        this.emitChange();
        break;
      case LOGOUT_USER:
        this._user = null;
        this._route = action.route;
        this.emitChange();
        break;
      case UPDATE_USERNAME:
        this._user = action.username;
        this.emitChange();
        break;
      default:
        break;
    }
  }

  get user() {
    return this._user;
  }

  get jwt() {
    return this._jwt;
  }

  get route() {
    return this._route;
  }

  isLoggedIn() {
    return !!this._user;
  }
}

export default new LoginStore();
