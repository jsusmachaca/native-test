import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Modal, TouchableWithoutFeedback, Pressable, FlatList, ScrollView } from "react-native";


export const Post = (props) => {
  const [modalVisible, setModalVisible] = useState(false);


  return (
    <>
      <View
        style={styles.container}
        key={props.id}
      >
        <View style={styles.date_name}>
          <View style={styles.profile}>
            <Image style={styles.imageProfile} 
              source={{
                uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
              }}
            />
            <Text style={styles.username}>{props.username}</Text>
          </View>
          <Text style={styles.date}>{props.date_publish.slice(0, 10)}</Text>
        </View>
        {props.post && props.image && (
            <View>
              <Text style={styles.posts}>
                {props.post.length <= 100
                  ? props.post 
                  : `${props.post.slice(0, 120)}...`}
                {props.post.length > 120 && (
                  <TouchableWithoutFeedback onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.showMore}>Ver más</Text>
                  </TouchableWithoutFeedback>
                )}
              </Text>
              <Image 
                style={styles.postImage}
                source={{
                  uri: props.image
                }} 
              />
            </View>
        )} 
        {props.post && !props.image && ( 
            <View>
              <Text style={styles.posts}>
                {props.post}
              </Text>      
            </View>
        )}
        {!props.post && props.image && (
          <View>
     
          <Image 
            style={styles.postImage}
            source={{
              uri: props.image
            }} 
          />
        </View>
        )}
      </View>

      {
      modalVisible ?
        <Modal
          animationType="slide"
          transparent={false}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
          visible={modalVisible}
        >
          <ScrollView>
          <View >
            <View >
                  <Pressable
                      onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text >Hide Modal</Text>
                  </Pressable>
            </View>
            <View
                style={styles.container}
                key={props.id}
              >
              <Text>{props.username}</Text>
              <Text style={styles.posts}>{props.post}</Text>
              {
              props.image ?
                <Image 
                  style={styles.postImage}
                  source={{
                    uri: props.image
                  }} 
                />
                : <></>
              }
            </View>
          </View>
          </ScrollView>
        </Modal>
      : <></>
      }
    </>
  )
}


const styles = StyleSheet.create({
  container: {
    padding: 5,
    paddingBottom: 20,
    borderWidth: 1,
    borderColor: '#000'
  },
  posts: {
    fontSize: 22.6
  },
  postImage: {
    maxWidth: '100%',
    height: 280 
  },
  username: {
    fontWeight: "bold",
    fontSize: 18.5
  },
  date: {
    fontSize: 18.5
  },
  showMore: {
    color: '#858585'
  },
  date_name: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageProfile: {
    width: 45,
    height: 45,
    borderRadius: 50,
    marginRight: 10
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})