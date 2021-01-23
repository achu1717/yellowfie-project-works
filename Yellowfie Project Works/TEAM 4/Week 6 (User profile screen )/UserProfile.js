import React, { Component, useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

const UserProfile = (props) => {
  const [user,setUser] = useState({_id:'1',url:"https://bit.ly/2HnWhMe",username:"USER NAME"});
  return (
    
<View style={styles.container}>
      <View style={styles.mainbox}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.itemico}
            source={{ uri:user.url}}
          />
        </View>
        <View style={styles.detailsContainer}>
          <View>
            <Text style={styles.uname}>
              {user.username}
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {props.navigation.navigate('Home')}}>
        <Text>My Orders</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {props.navigation.navigate('Home')}}>
        <Text>My Wishlist</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {props.navigation.navigate('Home')}}>
        <Text>Addresses</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {props.navigation.navigate('Home')}}>
        <Text>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {props.navigation.navigate('Home')}}>
        <Text>Profile Details</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {props.navigation.navigate('Home')}}>
        <Text>Terms and Privacy</Text>
      </TouchableOpacity>
      </View>


  );
}
const styles = StyleSheet.create({
  container:{
    flex:1
  },
  button: {
    padding: 15,
    borderTopWidth:1,
    borderTopColor: "#DDDDDD"
  },
  mainbox: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    width: "100%",
    paddingLeft: "6%",
  },
  imageContainer: {
    height: "80%",
    width: "40%",
  },
  itemico: {
    height: "100%",
    width: "100%",
  },
  detailsContainer: {
    height: "95%",
    width: "62%",
    marginLeft: "1%",
    flexDirection: "column",
    alignItems:"center"
  },
  uname: {
    fontSize: 20,
    paddingTop: 10,
    fontWeight:"bold",
    marginTop:1
  },
   
  });
  export default UserProfile