import * as React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import MainScreen from "./screens/Main";
import HomeScreen from "./screens/Home";
import MatchScreen from "./screens/Match";
import WriteScreen from "./screens/Write";
import TrainScreen from "./screens/Train";
import CountScreen from "./screens/Count";

const Stack= createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Write" component={WriteScreen} />
        <Stack.Screen name="Match" component={MatchScreen} />
        <Stack.Screen name="Train" component={TrainScreen} />
        <Stack.Screen name="Count" component={CountScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App ;
