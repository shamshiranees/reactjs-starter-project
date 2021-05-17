import { combineReducers } from "redux"
import HomeReducer from "./HomeReducer"
import APIReducer from "./APIReducer"
import AuthReducer from "./AuthReducer"

export default combineReducers({
  home: HomeReducer,
  apiReducer: APIReducer,
  authReducer: AuthReducer,
})
