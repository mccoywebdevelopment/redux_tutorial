import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import allReducer from './reducers';
import {provider, Provider} from 'react-redux';

const store = createStore(allReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


//STORE -> GLOBALIZED STATE
//ACTION -> Descibes what we want to do (count++)
// const increment = () =>{
//   return {
//     type: 'INCREMENT'
//   }
// }
// const decrement = () =>{
//   return {
//     type: 'DECREMENT'
//   }
// }
// //REDUCER -> Describes how your actions effect the state
// const counter = (state = 0, action) =>{
//   switch(action.type){
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//     default:
//       return state;
//   }
// }

// let store = createStore(counter);

// store.subscribe(()=>console.log(store.getState()));

// store.dispatch(decrement());

//DISPATCH -> How to EXECUTE THE ACTION
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
