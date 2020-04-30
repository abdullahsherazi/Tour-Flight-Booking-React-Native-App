import React from "react";
import { View, ImageBackground, Animated, Text } from "react-native";

export default class SplashScreen extends React.Component {
  constructor() {
    super();
    this.springValue = new Animated.Value(0.4);
  }

  componentWillMount() {
    this.spring();
  }

  spring() {
    Animated.spring(this.springValue, {
      toValue: 1,
      friction: 1,
    }).start();
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgb(32, 53, 70)",
        }}
      >
        <Animated.Image
          style={{
            width: 165,
            height: 56,
            transform: [{ scale: this.springValue }],
          }}
          source={require("../Photos/Icons/logo1.png")}
        />

        <Text
          style={{
            color: "#f7c744",
            fontSize: 15,
            textAlign: "center",
            marginTop: 5,
            opacity: 0.9,
          }}
        >
          Your Online Travel Partner
        </Text>

        <Text
          style={{
            color: "#f7c744",
            fontSize: 25,
            textAlign: "center",
            marginTop: 40,
            opacity: 0.9,
            fontWeight: "bold",
          }}
        >
          Welcome
        </Text>
      </View>
    );
  }
}
