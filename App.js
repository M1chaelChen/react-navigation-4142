import React, { Component } from 'react';
import { Text } from 'react-native';

import { TabNavigator, StackNavigator, SafeAreaView } from 'react-navigation';
import Primary from './primary';
import Secondary from './secondary';

const PrimaryStack = StackNavigator({
  PrimaryScreen: {
    screen: Primary,
    navigationOptions: {
      title: "Primary"
    }
  }
});

const SecondaryStack = StackNavigator({
  SecondaryScreen: {
    screen: Secondary,
    navigationOptions: {
      header:
        <SafeAreaView>
          <Text>Secondary</Text>
        </SafeAreaView>
    }
  }
});

const RootNavigation = TabNavigator({
  PrimaryTab: { screen: PrimaryStack },
  SecondaryTab: { screen: SecondaryStack },
}, { 
    tabBarPosition: 'bottom',
    lazy: false,
});

export default class App extends Component {
  render() {
    return (
      <RootNavigation />
    );
  }
}
