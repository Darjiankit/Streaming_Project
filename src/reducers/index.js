import { combineReducers } from "redux";
import { reducer as formreducer } from "redux-form";
import authReducer from "../reducers/authReducer";
import StreamReducer from "./StreamReducer";
export default combineReducers({
  auth: authReducer,
  form: formreducer,
  streams: StreamReducer
});
