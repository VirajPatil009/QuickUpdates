import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Card from "./card";

export default function PostItem({ title, content }) {
  return (
    <View style={styles.postContainer}>
      <Card>
        <Text style={styles.title}>Post title : {title}</Text>
        <Text style={styles.title}>Post Content : {content}</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    margin: 5,
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 12,
    margin: 10,
  },
});
