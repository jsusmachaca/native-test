import React, { useState } from "react"
import { Modal, View, Text, Pressable, Image, StyleSheet } from "react-native"
import { useModalVisibleStore } from "../store/ModalVisible";


export const PostModal = (props) => {
  // const [modalVisible, setModalVisible] = useState(false);
  const modalVisible = useModalVisibleStore((state) => state.modalVisible)
  const fetchVisible = useModalVisibleStore((state) => state.fetchVisible)

    return (
        <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
      >
      <View >
        <View >
              <Pressable
                  onPress={() => fetchVisible()}>
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
    </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
      padding: 5,
      paddingBottom: 20
    },
    posts: {
      fontSize: 22.7
    },
    postImage: {
      width: 300,
      height: 200 
    }
  })