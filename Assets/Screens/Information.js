import React from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from "react-native";

import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Container, Content } from "native-base";

import GloabalHeader from "../Components/GlobalHeader";
import LinearGradient from "react-native-linear-gradient";
import Button from "../Components/Button";

export default class Information extends React.Component {
  state = {
    MyBookings: [
      {
        dealKey: 0,
        dealPhoto: require("../Photos/nine.jpg"),
        dealName: "Dubai place Sharja",
        dealprice: "50.00",
        quantity: 1,
      },
      {
        dealKey: 1,
        dealPhoto: require("../Photos/Icons/22.jpg"),
        dealName: "Dubai place Sharja",
        dealprice: "50.00",
        quantity: 1,
      },

      {
        dealKey: 2,
        dealPhoto: require("../Photos/Icons/19.jpg"),
        dealName: "Dubai place Sharja",
        dealprice: "50.00",
        quantity: 1,
      },

      {
        dealKey: 3,
        dealPhoto: require("../Photos/Icons/17.jpg"),
        dealName: "Dubai place Sharja",
        dealprice: "50.00",
        quantity: 1,
      },
      {
        dealKey: 4,
        dealPhoto: require("../Photos/Icons/12.jpg"),
        dealName: "Dubai place Sharja",
        dealprice: "50.00",
        dealstatus: "Pick by rider",
        dealStatusCode: 2,
        Addreview: "Add Review",
      },
      {
        dealKey: 5,
        dealPhoto: require("../Photos/Icons/24.jpg"),
        dealName: "Dubai place Sharja",
        dealprice: "50.00",
        quantity: 1,
      },
    ],
  };
  render() {
    return (
      <Container>
        <GloabalHeader
          backgroundColor={"white"}
          elevation={1}
          arrow={true}
          navigation={this.props.navigation}
        />
        <Content
          style={styles.content}
          contentContainerStyle={{ paddingHorizontal: "5%" }}
        >
          <Text style={styles.orderSummary}> Tour Details </Text>

          {this.state.MyBookings.map((data, index) => {
            return (
              <View style={styles.mapView} key={data.dealKey}>
                <TouchableOpacity style={styles.mapImageView}>
                  <Image
                    source={data.dealPhoto}
                    style={styles.mapImage}
                    resizeMode="cover"
                  />
                </TouchableOpacity>

                <View style={{ justifyContent: "center" }}>
                  <Text style={styles.mapdealName}>{data.dealName}</Text>
                  <View style={styles.mapRightSecondRowView}>
                    <View style={styles.$_View}>
                      <Text style={styles.$}>$</Text>
                    </View>
                    <Text style={styles.mapdealPrice}>
                      EUR: {data.dealprice}
                    </Text>
                    <Text style={styles.orderText}>Orders</Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.mapQuantity}>Qty {data.quantity}</Text>
                  </View>
                </View>
              </View>
            );
          })}
          <View style={styles.costView}>
            <View style={styles.costInnerView}>
              <Text style={styles.costText}>Subtotal</Text>
              <Text style={[styles.costText, { marginLeft: "auto" }]}>
                Euro 200.00{" "}
              </Text>
            </View>
            <View style={styles.costInnerView}>
              <Text style={styles.costText}>Discount</Text>
              <Text style={[styles.costText, { marginLeft: "auto" }]}>
                Euro 200.00{" "}
              </Text>
            </View>
            <View style={styles.costInnerView}>
              <Text style={styles.costText}>Delivery Fee</Text>
              <Text style={[styles.costText, { marginLeft: "auto" }]}>
                Euro 200.00{" "}
              </Text>
            </View>

            <View style={styles.costInnerView}>
              <Text style={styles.totalcostText}>Total</Text>
              <Text style={[styles.totalcostText, { marginLeft: "auto" }]}>
                Euro 200.00{" "}
              </Text>
            </View>
            <Button
              width={"100%"}
              backgroundColor="white"
              borderColor="#22abd7"
              borderWidth={1}
              marginBottom={12}
              textColor={"#22abd7"}
              text="TAKEOUt"
              fontSize={16}
              marginTop={10}
              navigation={this.props.navigation}
              navigateTo={"MyBookings"}
            />
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("PaymentOption")}
              style={{
                overflow: "hidden",
                height: 50,
                marginTop: 10,
                marginBottom: 10,
                width: "100%",
                alignSelf: "center",
                borderRadius: 8,
              }}
            >
              <LinearGradient
                start={{ x: 0, y: 3 }}
                end={{ x: 0, y: 0 }}
                colors={["black", "#1caace"]}
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
                  Next
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    height: "100%",
    backgroundColor: "black",
  },

  Card: {
    height: 210,
    marginTop: 10,
    width: "100%",
    borderRadius: 5,
    elevation: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 0.5,
    backgroundColor: "white",
  },
  personInfo: { height: "80%", width: "100%" },
  upperNameAddressView: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  personInfoText: { lineHeight: 30, color: "#979797" },
  CardImage: { height: 20, width: 20, tintColor: "#15aac0" },
  cardText: { color: "black", fontSize: RFPercentage(3.5), marginLeft: 20 },
  personInfoTextView: { width: "80%", marginLeft: 42, paddingVertical: 10 },
  changeAddressView: {
    height: "20%",
    width: "100%",
    justifyContent: "flex-end",
  },
  content: { backgroundColor: "white", width: "100%" },
  orderSummary: {
    color: "#4e4c4c",
    marginTop: 20,
    fontSize: RFPercentage(3.1),
  },
  costView: {
    borderColor: "#c1c1c1",
    borderTopWidth: 0.5,
  },
  costInnerView: { flexDirection: "row", marginVertical: 5 },
  costText: { color: "#494949", fontSize: 15, fontWeight: "200" },
  totalcostText: { color: "#22abd7", fontSize: 15, fontWeight: "bold" },
  mapView: {
    width: "100%",
    height: 120,
    borderColor: "#eeeded",
    flexDirection: "row",
  },
  mapImageView: {
    width: "25%",
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#dbdcdf",
  },
  mapImage: { width: "100%", height: "100%" },
  mapdealName: { color: "#494949", fontSize: 15, fontWeight: "bold" },
  mapRightSecondRowView: {
    flexDirection: "row",
    marginTop: 5,
    alignItems: "center",
  },
  $_View: {
    backgroundColor: "#3f3f3f",
    width: 20,
    height: 20,
    borderRadius: 20,
    alignItems: "center",
  },
  $: { fontWeight: "bold", color: "white" },
  mapdealPrice: {
    marginLeft: 10,
    color: "#494949",
    fontSize: 13,
  },
  orderText: {
    marginLeft: 10,
    fontSize: 13,
    color: "#b6b5b6",
  },
  mapQuantity: {
    color: "#494949",
    fontSize: 13,
    marginTop: 5,
  },
});
