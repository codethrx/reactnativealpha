import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { StatusBar } from "expo-status-bar";
const App = () => {
  const [text, setText] = React.useState("");
  const [goals, setGoals] = React.useState([]);
  console.log(goals);
  return (
    <View style={styles.appContainer}>
      <View style={tw`flex-1 items-center justify-evenly`}>
        <View style={styles.inputContainer}>
          <TextInput
            value={text}
            onChangeText={(val) => setText(val)}
            style={tw`px-2 flex-1 border-[0.5] border-[#cccccc]`}
            placeholder="Goal..."
            color="#ccc"
            cursorColor={`#ccc`}
            placeholderTextColor="#ccc"
          />
          <Pressable
            style={tw`flex items-center justify-center `}
            onPress={() => {
              setGoals([...new Set([...goals, text])]);
              setText("");
            }}
          >
            <Text style={tw`bg-[#23d996] text-base h-8 text-white p-1`}>
              Add a Goal
            </Text>
          </Pressable>
        </View>
        <View style={tw`h-[0.5] w-full bg-[#ccc]`} />
      </View>
      <View style={tw`flex-5 bg-red-500 `}>
        <Text style={tw`text-xl text-[#ccc]`}>Your List of Goals...</Text>
        <ScrollView>
          {goals.map((item) => (
            <TouchableOpacity
              style={tw`rounded-lg`}
              onPress={() => setGoals(goals.filter((g) => g !== item))}
            >
              <Text
                style={tw`flex text-base text-white my-4 p-4 border-[0.5] border-[#cccccc] rounded-lg`}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        {/* {goals.length > 0 ? (
          <FlatList
            data={goals}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={tw`rounded-lg`}
                onPress={() => setGoals(goals.filter((g) => g !== item))}
              >
                <Text
                  style={tw` flex text-base text-white my-1 p-2 border-[0.5] border-[#cccccc] rounded-lg`}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item}
          />
        ) : (
          <Text style={tw`text-base text-white`}>No goals rn</Text>
        )} */}
      </View>
      <StatusBar />
    </View>
  );
};
const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 15,
    backgroundColor: "#1b1b1b",
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",

    // backgroundColor: "pink",
  },
});
export default App;
