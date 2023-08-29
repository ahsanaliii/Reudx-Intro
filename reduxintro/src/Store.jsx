import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./features/customers/CustomerSlice";
import accountReducer from "./features/accounts/AccountSlice";

const store = configureStore({
  reducer: {
    customer: customerReducer,
    account: accountReducer,
  },
});

// const rootReducer = combineReducers({
//   account: accountReducer,
//   customer: customerReducer,
// });
// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

export default store;
