import React, { useEffect } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function CustomImagePicker({ image, onImagePicked }) {
  const [selectedImage, setSelectedImage] = React.useState(null);
  // const onImagePicked = () => {
  //   selectedImage;
  // };
  useEffect(() => {
    if (image) {
      console.log("useEffect: " + image);
      setSelectedImage({ uri: image });
    }
  }, [image]);

  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    } else {
      console.log("Image: " + pickerResult.uri);
      setSelectedImage({ uri: pickerResult.uri });
      console.log("SelectedImageImage: " + selectedImage);
      onImagePicked = () => {
        uri: pickerResult.uri;
      };
    }
  };

  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image source={selectedImage} style={styles.thumbnail} />
        <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
          <Text style={styles.buttonText}>Change Photo</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* <Image
        onPress={openImagePickerAsync}
        source={{ uri: "https://i.imgur.com/TkIrScD.png" }}
        style={styles.logo}
      /> */}

      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Pick a Photo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
});
