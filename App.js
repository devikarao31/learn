import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer,DarkTheme } from '@react-navigation/native';

import {DrawerS} from './screens/DrawerS' 
import BookMark from './screens/BookMark';
import Home from './screens/Home';
import Settings from './screens/Settings';


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}



const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Drawer.Navigator initialRouteName="Home"
        drawerContent={props => <DrawerS {...props}/>}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="BookMark" component={BookMark} />
        <Drawer.Screen name="Settings" component={Settings} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}