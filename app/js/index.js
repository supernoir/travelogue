import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

export default class Index extends React.Component {
  render() {
    return <div><App /></div>;
  }
}

ReactDOM.render(<Index />, document.getElementById('app'));
