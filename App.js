import "react-native-gesture-handler";
// Must be first import
// Navigation Container
import { NavigationContainer } from "@react-navigation/native";

// Import the react library
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();
// Import the custom homescreen
import HomeScreen from "./screens/HomeScreen";

// Set the constant Stack to the createStackNavigator function
const Stack = createStackNavigator();
// Imports: All imports are components
// Stylesheet - Allows CSS stylesheets
// Platform - Allows setting styles for iOS and Android
import { Platform } from "react-native";

// Import createStackNavigator from react-navigation/stack module
import { createStackNavigator } from "@react-navigation/stack";

// Import Planet screens
import CelestialObjectsScreen from "./screens/CelestialObjects";

// Import the Sun screen
import Sun from "./screens/Sun";
import GoogleMaps from "./components/GoogleMaps";
// Export the App function
export default function App() {
  // Return is always required
  return (
    // Navigation Container
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />

        <Drawer.Screen name="Sun" component={Sun} />
        <Drawer.Screen name="Mercury" component={CelestialObjectsScreen} />
        <Drawer.Screen name="Venus" component={CelestialObjectsScreen} />
        <Drawer.Screen name="Earth" component={CelestialObjectsScreen} />

        <Drawer.Screen name="Mars" component={CelestialObjectsScreen} />

        <Drawer.Screen name="Jupiter" component={CelestialObjectsScreen} />
        <Drawer.Screen name="Saturn" component={CelestialObjectsScreen} />

        <Drawer.Screen name="Uranus" component={CelestialObjectsScreen} />
        <Drawer.Screen name="Neptune" component={CelestialObjectsScreen} />
        <Drawer.Screen name="GoogleMaps" component={GoogleMaps} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
