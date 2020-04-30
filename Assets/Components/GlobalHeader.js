import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, Text, Image, View } from "react-native";
import { Header, Body, Left, Right } from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default class GlobalHeader extends Component {
  render() {
    return (
      <Header
        style={{
          backgroundColor: this.props.backgroundColor,
        }}
      >
        <Left style={{ flex: 1 }}>
          {this.props.backArrow ? (
            <TouchableOpacity
              style={{
                marginLeft: 10,
              }}
              onPress={() => this.props.navigation.goBack()}
            >
              <MaterialCommunityIcons
                name="keyboard-backspace"
                size={20}
                color="black"
              />
            </TouchableOpacity>
          ) : null}
        </Left>

        <Body
          style={
            this.props.twoWords === 1
              ? { flex: 2, alignItems: "center" }
              : { flex: 1, alignItems: "center" }
          }
        >
          {this.props.headingText !== "" ? (
            <Text numberOfLines={1} style={styles.Text}>
              {this.props.headingText}
            </Text>
          ) : null}
        </Body>

        <Right style={{ flex: 1, justifyContent: "center" }} />
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  avatarImage: {
    width: 40,
    height: 40,
    alignSelf: "flex-end",
    borderRadius: 20,
    overflow: "hidden",
  },
  searchImage: {
    width: 20,
    height: 20,
    tintColor: "white",
    alignSelf: "flex-end",
  },
  Text: {
    color: "black",
    fontSize: 17,
    fontWeight: "bold",
  },
});
