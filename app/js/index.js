import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import travelogueApp from './reducers/index';

let store = createStore(
  travelogueApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default class Index extends React.Component {
  render() {
    return <Provider store={store}><App store={store} /></Provider>;
  }
}

ReactDOM.render(<Index />, document.getElementById('app'));
