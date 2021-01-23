import React, { Component, useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

export default class CartItem extends Component {
  state = { count: 1 };
  //count increase
  increase = () =>
    this.setState((prevState) => ({
      ...prevState,
      count: this.state.count + 1,
    }));
  // count decrease
  decrease = () =>
    this.setState((prevState) => ({
      ...prevState,
      count: this.state.count - 1,
    }));

  render() {
    const { count } = this.state;
    return (
      <View style={styles.mainbox}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.itemico}
            source={require("./assets/cartitemimg.png")}
          />
        </View>
        <View style={styles.detailsContainer}>
          <View>
            <Text style={styles.productname}>
              Brigitte brianna ruffle skirt
            </Text>
            <Text style={styles.price}>{"\u20B9"}3,500.00</Text>
          </View>
          <View style={styles.increaseqty}>
            <View style={styles.incdecbtn}>
              <TouchableOpacity style={styles.button} onPress={this.decrease}>
                <Text style={styles.incdectext}>-</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.qtytextbx}>
              <Text style={styles.qtytext}>{count}</Text>
            </View>
            <View style={styles.incdecbtn}>
              <TouchableOpacity style={styles.button} onPress={this.increase}>
                <Text style={styles.incdectext}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainbox: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    width: "95%",
    borderWidth: 1,
    borderColor: "#C0C0C0",
  },
  imageContainer: {
    height: "95%",
    width: "35%",
    marginLeft: "1%",
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
  },
  productname: {
    fontSize: 18,
    paddingTop: 10,
    marginLeft: 3,
  },
  price: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 3,
  },
  increaseqty: {
    backgroundColor: "white",
    height: "60%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  incdecbtn: {
    width: 40,
    height: 40,
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  incdectext: {
    fontSize: 30,
    fontWeight: "bold",
    paddingLeft: 7,
    paddingBottom: 4,
  },
  qtytextbx: {
    width: 40,
    height: 40,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  qtytext: {
    fontSize: 15,
  },
  button: {
    height: "100%",
    width: "100%",
  },
});
