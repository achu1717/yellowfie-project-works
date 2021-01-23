import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import RoundCheckbox from "rn-round-checkbox";
export default class SelectAddress extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.banner}>Select Delivery address</Text>
        <View style={styles.mainbox}>
          <View style={styles.headbox1}>
            <View style={styles.namebx}>
              <Text style={styles.nametext}>John Usermock</Text>
            </View>
            <View style={styles.checkbox}>
              <RoundCheckbox
                size={24}
                checked={true}
                backgroundColor="#6DDC3D"
              />
            </View>
          </View>
          <View style={styles.headbox2}>
            <Text style={styles.addresstxt}>Address Line 1</Text>
            <Text style={styles.addresstxt}>Address Line 2</Text>
            <Text style={styles.addresstxt}>City</Text>
          </View>
          <View style={styles.headbox3}>
            <View style={styles.statebx}>
              <Text style={styles.addresstxt}>State</Text>
            </View>
            <View style={styles.pincodebx}>
              <Text style={styles.nametext}>666000</Text>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.addressbtn}>
            <Button title="Add address" color="black"/>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 0.6,
  },
  banner: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 20,
  },
  mainbox: {
    height: "40%",
    justifyContent: "flex-start",
    width: "90%",
    borderWidth: 1,
    borderColor: "black",
  },
  headbox1: {
    flexDirection: "row",
    height: "25%",
    marginTop: 5,
  },
  namebx: {
    width: "86%",
    height: "100%",
    marginLeft: 5,
  },
  checkbox: {
    marginTop: 4,
  },
  statebx: {
    width: "65%",
    height: "100%",
    marginLeft: 5,
  },
  pincodebx: {
    alignItems: "flex-end",
    marginRight: 5,
  },
  headbox2: {
    flexDirection: "row",
    height: "48%",
    width: "100%",
    flexDirection: "column",
  },
  headbox3: {
    flexDirection: "row",
    height: "22%",
    width: "100%",
  },

  nametext: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: "2.5%",
    marginLeft: "5%",
  },
  addresstxt: {
    fontSize: 18,
    marginLeft: "5%",
  },
  addressbtn: {
    borderColor: "#C0C0C0",
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "white",
    height: 55,
    marginTop: "3%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.65,
    elevation: 1,
  },
  btntext: {
    fontWeight: "bold",
    fontSize: 3,
  },
});
