import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TailwindProvider } from "tailwindcss-react-native";
import Dashboard from "./screens/Dashboard/Index.js";
import OnboardingScreen from "./screens/Starting-Screen/OnboardingScreen";
import User from "./screens/UserInFo/User";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={OnboardingScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="OnboardingScreen"
            component={Dashboard}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Users"
            component={User}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}
