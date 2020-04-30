import React, { Component } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default class OrderStatus extends React.Component {
  state = {
    orderStatus: 4,
    data: [
      {
        firstPic: require("../Photos/Icons/os1.png"),
        secondPic: require("../Photos/Icons/2.png"),
        text: "Your order has been accepted by the restaurant.",
      },
      {
        firstPic: require("../Photos/Icons/os2.png"),
        secondPic: require("../Photos/Icons/3.png"),
        text: "Your order is in the kitchen.",
      },
      {
        firstPic: require("../Photos/Icons/os3.png"),
        secondPic: require("../Photos/Icons/4.png"),
        text: "Your order is picked by  livery rider.",
      },
      {
        firstPic: require("../Photos/Icons/os4.png"),
        secondPic: require("../Photos/Icons/4.png"),
        text: "Your order is on the way.",
      },
      {
        firstPic: require("../Photos/Icons/os5.png"),
        secondPic: require("../Photos/Icons/5.png"),
        text: "Delivered",
      },
    ],
  };
  render() {
    return (
      <View style={styles.upperContainer}>
        <View style={{ position: "absolute", width: "100%", height: "100%" }}>
          <Image
            style={{
              width: "100%",
              height: "100%",
            }}
            source={require("../Photos/Icons/backyWhite.png")}
          />
        </View>
        <Image
          style={{
            position: "absolute",
            top: 30,
            resizeMode: "contain",
            width: "90%",
          }}
          source={
            this.state.data[this.props.navigation.getParam("orderStatus")]
              .firstPic
          }
        />
        <Image
          style={styles.secondPic}
          source={
            this.state.data[this.props.navigation.getParam("orderStatus")]
              .secondPic
          }
        />
        <Text
          style={{
            fontSize: RFPercentage(2),
            marginTop: 10,
            width: "50%",
            textAlign: "center",
            color: "#505050",
            fontWeight: "bold",
          }}
        >
          {this.state.data[this.props.navigation.getParam("orderStatus")].text}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  upperContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  secondPic: {
    height: 300,
    width: 300,
    resizeMode: "contain",
  },
});
