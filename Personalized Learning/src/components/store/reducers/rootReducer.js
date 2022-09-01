import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import moduleReducer from "components/store/reducers/moduleReducer";
import authReducer from "components/store/reducers/authReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  modules: moduleReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
