import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import PostItem from "../components/PostItem";
import db from "../db/firestore";

export default function Tab1() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log(new Date().toUTCString());
    //.orderBy("createdAt", "desc")
    db.collection("Posts")
      .where("topic", "==", "1")
      .onSnapshot({
        next: (querySnapshot) => {
          const posts = querySnapshot.docs.map((docSnapshot) => ({
            id: docSnapshot.id,
            title: docSnapshot.data().title,
            content: docSnapshot.data().content,
            topic: docSnapshot.data().topic,
            createdAt: docSnapshot.data().createdAt,
          }));

          const sortedPosts = posts.sort(function (a, b) {
            if (a.createdAt.seconds > b.createdAt.seconds) return -1;
            if (a.createdAt.seconds < b.createdAt.seconds) return 1;
            return 0;
          });
          setPosts(sortedPosts);
        },
        error: (error) => console.log(error),
      });
  }, [setPosts]);

  return (
    <ScrollView>
      <View style={styles.center}>
        {posts?.map((post, index) => (
          <PostItem
            key={index}
            tabname={post.topic}
            title={post.title}
            content={post.content}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
  },
});
