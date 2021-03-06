import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import PostItem from "../components/PostItem";
import db from "../db/firestore";
//import stringsofLang from "../db/stringSettings";

export default function Tab3() {
  //const [posts, setPosts] = useState([]);
  const lang = [
    { shortform: "hi", longform: "Hindi" },
    { shortform: "ma", longform: "Marathi" },
    { shortform: "en", longform: "English" },
  ];
  global.lang = lang;
  setText(Value);
  {
    //   stringsofLang.setLanguage(value);
  }
  // useEffect(() => {
  //   console.log(new Date().toUTCString());
  //   //.orderBy("createdAt", "desc")
  //   db.collection("Posts")
  //     .where("topic", "==", "3")
  //     .onSnapshot({
  //       next: (querySnapshot) => {
  //         const posts = querySnapshot.docs.map((docSnapshot) => ({
  //           id: docSnapshot.id,
  //           title: docSnapshot.data().title,
  //           content: docSnapshot.data().content,
  //           topic: docSnapshot.data().topic,
  //           createdAt: docSnapshot.data().createdAt,
  //         }));

  //         const sortedPosts = posts.sort(function (a, b) {
  //           if (a.createdAt.seconds > b.createdAt.seconds) return -1;
  //           if (a.createdAt.seconds < b.createdAt.seconds) return 1;
  //           return 0;
  //         });
  //         setPosts(sortedPosts);
  //       },
  //       error: (error) => console.log(error),
  //     });
  // }, [setPosts]);

  return (
    // <ScrollView>
    //   <View style={styles.center}>
    //     {posts?.map((post, index) => (
    //       <PostItem
    //         key={index}
    //         tabname={post.topic}
    //         title={post.title}
    //         content={post.content}
    //       />
    //     ))}
    //   </View>
    // </ScrollView>
    <ScrollView>
      {global.lang.map((item, key) => (
        <View key={key}>
          <Text
            ref={item.shortform}
            onPress={() => this.setText(item.shortform)}
          >
            {item.longform}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
  },
});
