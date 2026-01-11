import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/components/screens/HomeScreen";
import TestScreen from "./src/components/screens/TestScreen";
import ViewScreen from "./src/components/screens/ViewScreen";
import ProfileScreen from "./src/components/screens/ProfileScreen";

const Stack = createNativeStackNavigator();

export const App = () => {
  //Initialisations----------------------
  //State--------------------------------
  //Hanlders-----------------------------
  //View---------------------------------
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
        }}
      >
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="TestScreen"
          component={TestScreen}
          options={{ title: "Test" }}
        />
        <Stack.Screen
          name="ViewScreen"
          component={ViewScreen}
          options={{ title: "View" }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ title: "Profile" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
