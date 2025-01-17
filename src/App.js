import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import HomePage from "./components/HomePage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home";
import stadiums from "./data";
function HomeScreen() {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
}
function login() {
  return (
    <View>
      <Text>Login</Text>
    </View>
  );
}

function SignUp() {
  return (
    <View>
      <Text>SignUp</Text>
    </View>
  );
}

function Homee() {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}
{
  stadiums.map((element, index) => {
    return (
      <ScrollView>
        <View key={index} style={{ margin: 10 }}>
          <Image
            source={{ uri: element.image }}
            style={{ width: 330, height: 100 }}
          />
          <Text>{element.name}</Text>
          <Text>{element.adress}</Text>
          <Text>price :{element.price} DT</Text>
          <Text>{element.contact}</Text>
        </View>
      </ScrollView>
    );
  });
}

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="SignUp" component={SignIn} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "73%",
  },
  category: {
    fontSize: 25,
    bottom: 85,
    right: 10,
    color: "#0C4488",
  },

  sign: {
    left: 270,
    bottom: 45,
    fontSize: 17,
    color: "#0C4488",
  },
  log: {
    left: 335,
    bottom: 65,
    fontSize: 17,
    color: "#0C4488",
  },
});
