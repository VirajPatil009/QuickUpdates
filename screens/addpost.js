import React, { useState } from "react";
import {
  TextInput,
  SafeAreaView,
  StyleSheet,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  ScrollView,
  Text,
} from "react-native";

import { Picker } from "@react-native-community/picker";
import * as yup from "yup";
import { Formik } from "formik";
import FormButton from "../components/FormButton";
import db from "../db/firestore";
import { useNavigation } from "@react-navigation/native";
import CustomImagePicker, { onImagePicked } from "../components/ImagePicker";
import uuid from "uuid";

export default function ContentForm({ route, navigation }) {
  // const { params } = route.state;
  // const navigation = useNavigation();

  // const setPostImage = (image) => {
  //   props.handleChange("imageURI", image.uri);
  // };
  setUploadedImage = (image) => {
    const fileExt = image.split(".").pop();
    console.log("submit");
    console.log("ext", fileExt);
  };
  // const uploadImage = (imageURI) => {

  // };
  return (
    <Formik
      initialValues={{ title: "", content: "", topic: "0", imageURI: null }}
      onSubmit={(values) => {
        uploadImage(imageURI);
        db.collection("Posts")
          .add({
            title: values.title,
            content: values.content,
            topic: values.topic,
            createdAt: new Date(),
          })
          .then(
            Alert.alert(
              "Congrats",
              "Your post published successfully!",
              [
                {
                  text: "Ok",
                  onPress: () => navigation.goBack(),
                  style: "Ok",
                },
              ],
              {
                cancelable: true,
                onDismiss: () => navigation.goBack(),
              }
            )
          );
      }}
    >
      {(props) => {
        return (
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView>
              <SafeAreaView style={styles.formContainer}>
                <View style={styles.pickerContainer}>
                  <Picker
                    onValueChange={props.handleChange("topic")}
                    selectedValue={props.values.topic}
                  >
                    <Picker.Item label="Select Tab" value="0"></Picker.Item>
                    <Picker.Item label="Topic1" value="1"></Picker.Item>
                    <Picker.Item label="Topic2" value="2"></Picker.Item>
                    <Picker.Item label="Topic3" value="3"></Picker.Item>
                  </Picker>
                </View>
                <TextInput
                  name="title"
                  placeholder="Enter title"
                  autoCapitalize="none"
                  onChangeText={props.handleChange("title")}
                  value={props.values.title}
                  style={styles.input}
                  maxLength={255}
                />
                <TextInput
                  name="content"
                  multiline
                  numberOfLines={6}
                  placeholder="Enter content"
                  maxLength={5000}
                  onChangeText={props.handleChange("content")}
                  value={props.values.content}
                  style={[styles.multilineInput, styles.input]}
                />
                <View style={styles.imageContainer}>
                  <CustomImagePicker
                    image={props.values.image}
                    // onImagePicked=({ image }) =>
                    //   props.handleChange("imageURI", image.uri)
                    onImagePicked={setUploadedImage}
                  />
                </View>
                <View style={styles.buttonContainer}>
                  <FormButton
                    buttonType="outline"
                    onPress={props.handleSubmit}
                    title="Post"
                    buttonColor="#039BE5"
                  />
                </View>
              </SafeAreaView>
            </ScrollView>
          </TouchableWithoutFeedback>
        );
      }}
    </Formik>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    padding: 20,
    backgroundColor: "#fff",
    flex: 1,
  },
  buttonContainer: {
    margin: 15,
    justifyContent: "flex-start",
  },
  imageContainer: {
    margin: 15,
    //width: 100,
    // backgroundColor: "black",
    borderColor: "black",
    // color: black,
    justifyContent: "flex-start",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    margin: 10,
  },
  multilineInput: {
    textAlignVertical: "top",
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ddd",
    fontSize: 18,
    borderRadius: 6,
    margin: 10,
  },
});
