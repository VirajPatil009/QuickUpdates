import React, { useEffect, useState } from "react";
import { StyleSheet, ActivityIndicator, RefreshControl } from "react-native";
import { ListItem } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import PostItem from "../components/PostItem";
import { fetchPosts, fetchMorePosts } from "./fetchApi";

export default function Tab1() {
  const [posts, setPosts] = useState([]);
  const [startAfter, setStartAfter] = React.useState(Object);
  const [lastPost, setLastPost] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  useEffect(() => {
    console.log(new Date().toUTCString());
    getPosts();
  }, []);

  async function getPosts() {
    setIsLoading(true);
    const postData = await fetchPosts("2");
    setPosts([...posts, ...postData.posts]);
    setStartAfter(postData.lastVisible);
    setIsLoading(false);
  }

  async function getMorePosts() {
    setIsLoading(true);
    if (!lastPost) {
      const postData = await fetchMorePosts("2", startAfter);
      setPosts([...posts, ...postData.posts]);
      setStartAfter(postData.lastVisible);
      postData.posts.length == 0 ? setLastPost(true) : setLastPost(false);
    }
    setIsLoading(false);
  }

  function renderPosts({ item }) {
    return (
      <ListItem key={item.index} bottomDivider>
        <PostItem
          key={item.index}
          tabname={item.topic}
          title={item.title}
          content={item.content}
        />
      </ListItem>
    );
  }
  return (
    <SafeAreaView style={styles.center}>
      {isLoading ? <ActivityIndicator /> : null}
      <FlatList
        data={posts}
        renderItem={renderPosts}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        onEndReached={getMorePosts}
        onEndReachedThreshold={0.01}
        enableEmptySections={true}
        scrollEventThrottle={150}
        ListFooterComponent={() => !lastPost && <ActivityIndicator />}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={getPosts} />
        }
      ></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    marginTop: -30,
  },
  title: {
    fontSize: 12,
    margin: 10,
  },
});
