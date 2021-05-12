import { combineReducers } from "redux"
import HomeReducer from "./HomeReducer"
import APIReducer from "./APIReducer"
import AuthReducer from "./AuthReducer"
import ProfileReducer from "./ProfileReducer"

export default combineReducers({
  home: HomeReducer,
  apiReducer: APIReducer,
  authReducer: AuthReducer,
  profile: ProfileReducer
})
