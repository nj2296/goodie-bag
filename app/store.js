import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import axios from 'axios';
import rootReducer from './reducers';
import loggingMiddleware from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk

// // In case of using Combine reducer when we have 2 or more reducers (probably for 2 or more models):
// import candyReducer from '';
// import userReducer from '';
// const rootReducer = combineReducers({
//   candies: candyReducer,
//   users: userReducer,
// });
// // And then in mapState, we will dot off of states twice!! So it qould be candies: state.candies.candies

export default createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      // `withExtraArgument` gives us access to axios in our async action creators!
      // https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument
      thunkMiddleware.withExtraArgument({ axios }),
      loggingMiddleware
    )
  )
);
