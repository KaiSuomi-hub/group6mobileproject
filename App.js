import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
import Chat from "./screens/Chat";
import Login from "./screens/Login";
import RegisterScreen from "./screens/Register";
import Settings from "./screens/Settings";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider } from "react-native-paper";
import CustomNavigationBar from "./component/CustomNavigationBar";
import { ThemeProvider } from "./context/ThemeContext";

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <ThemeProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
              header: (props) => <CustomNavigationBar {...props} />,
            }}
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Settings" component={Settings} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});