import React, { useEffect } from 'react'
import { Alert, BackHandler, LogBox, StatusBar } from 'react-native'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { RootNavigator } from '@navdeep/router/RootNavigator';
import { persistor, store } from '@navdeep/store';
import RNExitApp from 'react-native-exit-app';

function App() {

  LogBox.ignoreAllLogs(true)

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar backgroundColor="#121212" barStyle="light-content" />
        <RootNavigator />
      </PersistGate>
    </Provider>
  )
}

export default App