import React from 'react';
import Route from '@navigation/index';
import {AlertProvider} from '@components';

const App = () => {
  return (
    <AlertProvider>
      <Route />
    </AlertProvider>
  );
};

export default App;
