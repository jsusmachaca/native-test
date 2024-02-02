import React from "react"
import { Text, View, StatusBar } from "react-native"
import { Posts } from "./Posts"

export const Main = () => {
  console.log('Hola')
  return (
    <>
    <StatusBar />
    <View>
        <Text>Hola mi brobrobro</Text>
        <Posts />
    </View>
    </>
  )
}