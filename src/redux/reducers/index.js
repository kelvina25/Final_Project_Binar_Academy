import { combineReducers } from "@reduxjs/toolkit";

import home from "./home";
import auth from "./auth";
import search from "./search";
import history from "./history";
import notif from "./notif";
import booking from "./booking";
import user from "./user";

export default combineReducers({
  home,
  auth,
  search,
  booking,
  user,
  history,
  notif,
});
