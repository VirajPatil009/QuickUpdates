import React, { useState } from "react";
import {
  Alert, // alerts whatever text is passed to it
  SafeAreaView, // renders content within the safe area boundaries of a device
  StyleSheet, // adds styles to components
  View, // most fundamental component for building the UI. It acts as a container that supports layout with Flexbox, style, some touch handling, and accessibility controls
} from "react-native";
import {
  Button, // wrapper around React Native's own `Button` component with some additional styling and props
  Input, // wrapper around React Native's `Text` component with additional styling and props
  Text, // wrapper around `TextInput` component from React Native containing additional styles and props
} from "react-native-elements";
import * as yup from "yup";
import { Formik } from "formik";
import FormButton from "../components/FormButton";

export default function Header() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (title) => {
    setTitle({ title });
  };

  const handleContentChange = (content) => {
    setContent({ content });
  };

  const handlepost = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <Input
          name="title"
          placeholder="Enter title"
          autoCapitalize="none"
          onChangeText={() => handleTitleChange}
        />
        <Input
          name="content"
          multiline
          numberOfLines={22}
          placeholder="Enter content"
          onChangeText={handleContentChange}
          style={styles.multiline}
        />
      </View>
      <View style={styles.buttonContainer}>
        <FormButton
          buttonType="outline"
          onPress={handlepost}
          title="Post"
          buttonColor="#039BE5"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  buttonContainer: {
    margin: 15,
    justifyContent: "flex-start",
  },
  inputContainer: {
    margin: 15,
    flex: 1,
    justifyContent: "flex-start",
  },
  multiline: {
    marginTop: -180,
  },
});
