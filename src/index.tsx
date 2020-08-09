import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Switch,Route, BrowserRouter} from 'react-router-dom'
import { DisplayMainScreen } from './Screen/MainScreen/MainScreen';

declare global { namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DisplayMainScreen/>
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
