/* jshint esversion:6 */

import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import todoApp from './reducers';
// import App from './App';
import PlayerApp from './PlayerApp';

// let store = createStore(todoApp);
// export const store = createStore(todoApp, {},
//     window.devToolsExtension && window.devToolsExtension()
// );

render(
  // <Provider store={store}>
  //   <App />
  // </Provider>,
  <PlayerApp />,
  document.getElementById('app')
)


// To test without react (server side):
// console.log('window.devToolsExtension', window.devToolsExtension);

// import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './actions';

// console.log('initial state:', store.getState());


// let unsubscribe = store.subscribe( () => console.log('current state:', store.getState()));

// store.dispatch(addTodo('Learn about actions'));
// store.dispatch(addTodo('Learn about reducers'));
// store.dispatch(addTodo('Learn about store'));
// store.dispatch(toggleTodo(0));
// store.dispatch(toggleTodo(1));
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

// unsubscribe();