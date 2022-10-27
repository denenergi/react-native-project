import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Todo from './screens/Todo';
import Posts from './screens/Posts';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Todo') {
              iconName = focused
                ? 'ios-create-outline'
                : 'ios-create';
            } else if (route.name === 'Films') {
              iconName = focused
              ? 'ios-images-outline' 
              : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color}/>;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen
          name="Todo"
          component={Todo}
          options={{
            headerTitleAlign: "center",
          }}
        />
        <Tab.Screen
          name="Films"
          component={Posts}
          options={{
            headerTitleAlign: "center",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  head: {
    justifyContent: "center",
    alignItems: "center",
    color: "red"
  },
})