import React from 'react';
import AuthStack from './stacks/authStack';
import {NavigationContainer} from '@react-navigation/native';

const Route: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default Route;
