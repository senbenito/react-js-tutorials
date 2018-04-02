import {combineReducers, createStore} from 'redux';

// const reducer = (state, action)=>{
//   return action.type === 'INC' ? state + action.payload :
//           action.type === 'DEC' ? state - action.payload :
//           state
// };

const counterReducer = (state={}, action) => {
  switch (action.type) {
    case "INC": {
      state.counter += action.payload;
      break;
    }
    case "DEC": {
      state.counter -= action.payload;
      break;
    }
  }
  return state;
};

const userReducer = (state={}, action) => {
  return action.type === 'CHANGE_NAME' ?
  state.name = action.payload
  : state;
};

const postReducer = (state=[], action) => {
  return state;
};

const reducers = combineReducers({
  counter: counterReducer,
  user: userReducer,
  posts: postReducer
});

const store = createStore(reducers);

store.subscribe(()=>{
  console.log('store changed!', store.getState());
});

store.dispatch({type: 'INC', payload: 1});
store.dispatch({type: 'CHANGE_NAME', payload: 'Shannon'})
// store.dispatch({type: 'DEC', payload: 22});
