import React from 'react';
import Counter from './components/Counter'
import { Provider } from 'react-redux'
import store from './store';

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