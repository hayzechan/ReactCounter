import { createStore } from 'redux';
import './App.css';
import MultiCounter from './component/MultiCounter';
import {Provider} from 'react-redux';
import counterReducer from './counterReducer';

function App() {
  const store = createStore(counterReducer)
  return (
    <div className="App">
      <Provider store = {store}>
        <MultiCounter/>
      </Provider>
    </div>
  );
}

export default App;
