import React, { Component } from "react";
import GloabalHeader from "../Components/GlobalHeader";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Font from "react-native-vector-icons/FontAwesome";
import LinearGradient from "react-native-linear-gradient";

export default class PaymentOption extends React.Component {
  state = {
    payOnline: true,
    Bank: false,
    CreditCard: true,
  };
  render() {
    return (
      <View>
        <GloabalHeader
          backgroundColor={"white"}
          elevation={0}
          styledArrow={true}
          styledArrowColor={"black"}
          navigation={this.props.navigation}
          headingText={"Payment "}
        />

        <View
          style={{
            width: "95%",
            backgroundColor: "#ffff",
            alignSelf: "center",
            borderRadius: 10,
            marginVertical: 15,
            paddingVertical: 15,
            overflow: "hidden",
            flexDirection: "row",
            elevation: 4,
          }}
        >
          <View style={{ width: "20%", borderWidth: 0, alignItems: "center" }}>
            <View
              style={{
                height: 35,
                width: 35,
                marginTop: 0,
                borderRadius: 35,

                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Font name="bank" size={35} />
            </View>
          </View>
          <View
            style={{
              width: "80%",
              borderWidth: 0,
              paddingLeft: 5,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 14,
                color: "#585858",
                marginVertical: 5,
                fontWeight: "bold",
              }}
            >
              Use a CreditCard/Debit Card{" "}
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "#6b6b6b",
                width: 130,
                fontWeight: "300",
              }}
            >
              Anthony Moslov
            </Text>
            <View style={{ flexDirection: "row", paddingVertical: 2 }}>
              <Text style={{ fontSize: 14, color: "#6b6b6b", width: 130 }}>
                12345678
              </Text>
              <Text style={{ fontSize: 14, color: "#6b6b6b" }}>12/24</Text>
            </View>
            <View style={{ flexDirection: "row", paddingVertical: 0 }}>
              <Text
                style={{
                  fontSize: 14,
                  color: "#6b6b6b",
                  width: 130,
                  borderWidth: 0,
                }}
                onPress={() => this.props.navigation.navigate("")}
              >
                City
              </Text>
              <Text style={{ fontSize: 14, color: "#6b6b6b" }}>12</Text>
            </View>

            <TouchableOpacity
              style={{
                borderWidth: 1.5,
                width: 20,
                alignItems: "center",
                borderColor: "#707070",
                justifyContent: "center",
                height: 20,
                borderRadius: 20,
                position: "absolute",
                right: 20,
                top: 5,
              }}
              onPress={() => this.setState({ CreditCard: true, Bank: false })}
            >
              {this.state.CreditCard == true ? (
                <View
                  style={{
                    width: 13,
                    height: 13,
                    borderRadius: 13,
                    backgroundColor: "#707070",
                  }}
                ></View>
              ) : null}
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            width: "95%",
            backgroundColor: "#ffff",
            alignSelf: "center",
            borderRadius: 10,
            marginVertical: 15,
            paddingVertical: 15,
            overflow: "hidden",
            flexDirection: "row",
            elevation: 4,
          }}
        >
          <View style={{ width: "20%", borderWidth: 0, alignItems: "center" }}>
            <View
              style={{
                height: 35,
                width: 35,
                marginTop: 0,
                borderRadius: 35,

                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MaterialCommunityIcons name="cash" size={35} />
            </View>
          </View>
          <View
            style={{
              width: "80%",
              borderWidth: 0,
              paddingLeft: 5,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "#585858",
                marginVertical: 5,
                fontWeight: "bold",
              }}
            >
              Cash by Hand{" "}
            </Text>

            <TouchableOpacity
              style={{
                borderWidth: 1.5,
                width: 20,
                alignItems: "center",
                borderColor: "#707070",
                justifyContent: "center",
                height: 20,
                borderRadius: 20,
                position: "absolute",
                right: 20,
                top: 5,
              }}
              onPress={() => this.setState({ Bank: true, CreditCard: false })}
            >
              {this.state.Bank ? (
                <View
                  style={{
                    width: 13,
                    height: 13,
                    borderRadius: 13,
                    backgroundColor: "#06a9a7",
                  }}
                ></View>
              ) : null}
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Confirmpage")}
          style={{
            overflow: "hidden",
            height: 50,
            marginTop: 10,
            marginBottom: 10,
            width: "90%",
            alignSelf: "center",
            borderRadius: 8,
          }}
        >
          <LinearGradient
            start={{ x: 0, y: 3 }}
            end={{ x: 0, y: 0 }}
            colors={["#203546", "#203546"]}
            style={{
              backgroundColor: "black",
              height: "100%",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
              }}
            >
              Done
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  }
}
