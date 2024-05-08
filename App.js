import React, { useState, useEffect } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TailwindProvider } from "tailwindcss-react-native";
import Dashboard from "./screens/Dashboard/Index.js";
import OnboardingScreen from "./screens/Starting-Screen/OnboardingScreen";
import User from "./screens/UserInFo/User";
import Login from "./screens/Login/Login";
import Register from "./screens/Register/Register";
import SplashScreen from "./screens/SplashScreen.js";
const Stack = createNativeStackNavigator();

export default function App() {
  const [isShowSplashScreen, setIsShowSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsShowSplashScreen(false);
    }, 3000);
  }, []);

  if (isShowSplashScreen) {
    return <SplashScreen />;
  }

  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={Login}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="OnboardingScreen"
            component={OnboardingScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Dashboard"
            component={Dashboard}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Users"
            component={User}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Register"
            component={Register}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}