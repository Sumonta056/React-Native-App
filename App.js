import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TailwindProvider } from "tailwindcss-react-native";
import Dashboard from "./screens/Dashboard/Index";
import OnboardingScreen from "./screens/Starting-Screen/OnboardingScreen";
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
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}
