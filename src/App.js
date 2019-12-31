import React from 'react';
import Counter from './Counter'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const initialState = {
  count: 0
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      }
    case "DECREMENT":
      return {
        count: state.count - 1
      }
    default:
      return state
  }
}

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Counter />
        </header>
      </div>
    </Provider>
  );
}

export default App;
