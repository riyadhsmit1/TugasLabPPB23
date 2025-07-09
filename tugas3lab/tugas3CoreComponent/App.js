import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import CenteredNode from './components/1';
import RCCandRFC from './components/2';
import SplashScreen from './components/3';
import UserProfile from './components/4';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <UserProfile/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
