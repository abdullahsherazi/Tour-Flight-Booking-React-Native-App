import React, { Component } from "react";
import GloabalHeader from "../Components/GlobalHeader";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default class Button extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: this.props.backgroundColor
            ? this.props.backgroundColor
            : "#ffbe00",
          width: this.props.width ? this.props.width : "50%",
          height: this.props.height ? this.props.height : 50,
          borderRadius: this.props.borderRadius ? this.props.borderRadius : 8,
          alignItems: "center",
          justifyContent: "center",
          borderColor: this.props.borderColor ? this.props.borderColor : null,
          borderWidth: this.props.borderWidth ? this.props.borderWidth : null,
          marginBottom: this.props.marginBottom
            ? this.props.marginBottom
            : null,
          marginTop: this.props.marginTop ? this.props.marginTop : null
        }}
        onPress={() => this.props.navigation.navigate(this.props.navigateTo)}
      >
        <Text
          style={{
            color: this.props.textColor ? this.props.textColor : "white",
            textAlign: "center",
            textTransform: "uppercase",
            fontSize: RFPercentage(2.5),
            fontWeight: this.props.fontWeight ? this.props.fontWeight : null,
            fontSize: this.props.fontSize ? this.props.fontSize : null
          }}
        >
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
}
