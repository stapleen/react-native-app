import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/app';
import Header from './containers/Header';
import App from './containers/App';


const store = createStore(reducer);

const Main = () => {
  return (
    <Provider store={store}>
      <Header />
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Main);
