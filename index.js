/**
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import store from './Store/Store';

const Main = () => (
    <Provider store={store}>
        <PaperProvider>
            <App />
        </PaperProvider>
    </Provider>
);

AppRegistry.registerComponent(appName, () => Main);
