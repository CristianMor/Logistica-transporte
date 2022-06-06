import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainStack} from './Stacks';

const AppNav = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}

export default AppNav;
