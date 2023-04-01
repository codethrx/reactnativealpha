import * as React from "react";
import { View, Text, Button, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import tw from "twrnc";
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        onPress={() => {
          navigation.push("Items", { payload: "Title payload..." });
        }}
        title="Push to a new screen baby"
      />
    </View>
  );
}
function Items({ route, navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Text style={tw`text-xl text-black`}>{route.params.payload}</Text>
        {[
          "a",
          "b",
          "c",
          "d",
          "e",
          "f",
          "g",
          1,
          2,
          3,
          5,
          6,
          7,
          "az",
          "de",
          "ss",
        ].map((elem) => (
          <Text style={{ backgroundColor: "gray", padding: 20 }} key={elem}>
            {elem}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Items" component={Items} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
