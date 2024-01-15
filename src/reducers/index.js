import { combineReducers } from "redux";
import aziendaReducers from "./aziendaReducers";

const rootReducer = combineReducers({
  azienda: aziendaReducers,
});

export default rootReducer;
