import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList} from "react-native";
import { Post } from "./PostItem.jsx";

export const Posts = () => {
  const [posts, setPosts] = useState([])
    
  useEffect(() => {
      fetch('http://192.168.187.37:1234/api/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
        .catch(err => console.error(err))
  }, [])

  return (
    <FlatList
      data={posts}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item: post }) => (
        <Post {...post}/>
      )}
    />
  )
}