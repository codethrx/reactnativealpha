import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Route from "./screens/route";
const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Route />
    </SafeAreaView>
  );
};

export default App;
