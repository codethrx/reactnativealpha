import React from "react";
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
  ScrollView,
} from "react-native";

const KeyboardAvoidingComponent = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView>
        <Text style={styles.header}>Header</Text>
        <TextInput
          placeholder="Username"
          style={styles.textInput}
          placeholderTextColor="#ccc"
        />
        <TextInput
          placeholder="Username"
          style={styles.textInput}
          placeholderTextColor="#ccc"
        />
        <TextInput
          placeholder="Username"
          style={styles.textInput}
          placeholderTextColor="#ccc"
        />
        <TextInput
          placeholder="Username"
          style={styles.textInput}
          placeholderTextColor="#ccc"
        />
        <TextInput
          placeholder="Username"
          style={styles.textInput}
          placeholderTextColor="#ccc"
        />
        <TextInput
          placeholder="Username"
          style={styles.textInput}
          placeholderTextColor="#ccc"
        />
        <TextInput placeholder="Username" style={styles.textInput} />
        <TextInput placeholder="Username" style={styles.textInput} />
        <TextInput placeholder="Username" style={styles.textInput} />
        <Button title="lolx" />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 50,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around",
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 26,
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12,
  },
});

export default KeyboardAvoidingComponent;
