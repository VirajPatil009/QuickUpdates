import db from "../db/firestore";

export const fetchPosts = async (topic) => {
  const querySnapshot = await db
    .collection("Posts")
    .where("topic", "==", topic)
    .where("approved", "==", true)
    .limit(5)
    .orderBy("createdAt", "desc")
    .get();

  const posts = querySnapshot.docs.map((docSnapshot) => ({
    id: docSnapshot.id,
    title: docSnapshot.data().title,
    content: docSnapshot.data().content,
    topic: docSnapshot.data().topic,
    createdAt: docSnapshot.data().createdAt,
  }));

  const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];

  return { posts, lastVisible };
};

export const fetchMorePosts = async (topic, startAfter) => {
  const querySnapshot = await db
    .collection("Posts")
    .where("topic", "==", topic)
    .where("approved", "==", true)
    .orderBy("createdAt", "desc")
    .startAfter(startAfter)
    .limit(5)
    .get();

  const posts = querySnapshot.docs.map((docSnapshot) => ({
    id: docSnapshot.id,
    title: docSnapshot.data().title,
    content: docSnapshot.data().content,
    topic: docSnapshot.data().topic,
    createdAt: docSnapshot.data().createdAt,
  }));

  const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];

  return { posts, lastVisible };
};
