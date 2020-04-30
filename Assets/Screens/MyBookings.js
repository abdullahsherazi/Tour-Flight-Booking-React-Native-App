import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";
import GloabalHeader from "../Components/GlobalHeader";
import { Input, Item } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import { Overlay } from "react-native-elements";
import StarRating from "react-native-star-rating";

const ScreenWidth = Dimensions.get("window").width;
const ScreenHeight = Dimensions.get("window").height;

export default class MyBookings extends Component {
  state = {
    isVisble: false,
    MyBookings: [
      {
        Images: require("../Photos/Icons/19.jpg"),
        dealKey: 0,
        dealPhoto: require("../Photos/burger.jpg"),
        dealName: "Winter Tour",
        dealprice: "Rs: 50.00",
        dealstatus: "Active",
        dealStatusCode: 1,
      },
      {
        Images: require("../Photos/Icons/town.jpg"),
        dealKey: 1,
        dealPhoto: require("../Photos/burger.jpg"),
        dealName: "Winter Tour",
        dealprice: "Rs: 50.00",
        dealstatus: "D",
        dealStatusCode: 4,
        Addreview: "Add Review",
      },

      {
        Images: require("../Photos/Icons/22.jpg"),
        dealKey: 2,
        dealPhoto: require("../Photos/burger.jpg"),
        dealName: "Winter Tour",
        dealprice: "Rs: 50.00",
        dealstatus: "Actiive",
        dealStatusCode: 0,
        Addreview: "Add Review",
      },

      {
        Images: require("../Photos/Icons/24.jpg"),
        dealKey: 3,
        dealPhoto: require("../Photos/burger.jpg"),
        dealName: "Winter Tour",
        dealprice: "Rs: 50.00",
        dealstatus: "Actiive",
        dealStatusCode: 3,
        Addreview: "Add Review",
      },
      {
        Images: require("../Photos/Icons/five.jpg"),
        dealKey: 4,
        dealPhoto: require("../Photos/burger.jpg"),
        dealName: "Winter Tour",
        dealprice: "Rs: 50.00",
        dealstatus: "Cancel ",
        dealStatusCode: 2,
        Addreview: "Add Review",
      },
      {
        Images: require("../Photos/Icons/seven.jpg"),
        dealKey: 5,
        dealPhoto: require("../Photos/burger.jpg"),
        dealName: "Winter Tour",
        dealprice: "Rs: 50.00",
        dealstatus: "Pending",
        dealStatusCode: 1,
      },
    ],
  };
  render() {
    return (
      <View style={styles.container}>
        <GloabalHeader
          backgroundColor={"white"}
          // elevation={50}
          arrow={true}
          // styledArrow={true}
          // styledArrowColor={"white"}
          headingText={"My Booking "}
          navigation={this.props.navigation}
          // heartSearch={true}
          // search={true}
          // avatar={true}
          // avatarImage={require('../Photos/Icons/profilepic.jpg')}
        />

        <ScrollView>
          {this.state.MyBookings.map((data, index) => {
            return (
              <TouchableOpacity
                style={{
                  width: "100%",
                  height: 120,
                  borderBottomWidth: 2,
                  borderTopWidth: 2,
                  borderColor: "#eeeded",
                  flexDirection: "row",
                }}
                key={data.dealKey}
                // onPress={() => {
                //   this.props.navigation.navigate("OrderStatus", {
                //     orderStatus: data.dealStatusCode
                //   });
                // }}
              >
                <View
                  style={{
                    width: "25%",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: 15,
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: "#dbdcdf",
                  }}
                >
                  <Image
                    source={data.Images}
                    style={{ width: "100%", height: "100%" }}
                    resizeMode="contain"
                  />
                </View>

                <View style={{ justifyContent: "center" }}>
                  <Text style={{ color: "#494949", fontSize: 15 }}>
                    {data.dealName}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 5,
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "#20abd2",
                        width: 20,
                        height: 20,
                        borderRadius: 20,
                        alignItems: "center",
                      }}
                    >
                      <Text style={{ fontWeight: "bold", color: "white" }}>
                        €
                      </Text>
                    </View>
                    <Text
                      style={{
                        marginLeft: 10,
                        color: "#696969",
                        fontSize: 13,
                        fontWeight: "bold",
                      }}
                    >
                      {data.dealprice}
                    </Text>
                    <Text
                      style={{
                        marginLeft: 10,
                        fontSize: 13,
                        color: "#b6b5b6",
                        fontWeight: "bold",
                      }}
                    >
                      Orders
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <View
                      style={{
                        width: 130,
                        borderRightWidth: 1,
                        height: 20,
                        borderColor: "#6d6d6d",
                      }}
                    >
                      <Text
                        style={{
                          color: "#20abd2",
                          fontSize: 12,
                          marginTop: 5,
                          fontWeight: "bold",
                        }}
                      >
                        {" "}
                        status :{data.dealstatus}
                      </Text>
                    </View>

                    <Text
                      style={{
                        color: "#20abd2",
                        fontSize: 13,
                        marginTop: 5,
                        fontWeight: "bold",
                        backgroundColor: "red,",
                        width: 100,
                        marginLeft: 10,
                      }}
                      onPress={() => {
                        this.setState({ isVisible: true });
                      }}
                    >
                      {" "}
                      {data.Addreview}{" "}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        <Overlay
          isVisible={this.state.isVisible}
          width="80%"
          height={0.5 * ScreenHeight}
          onBackdropPress={() => {
            this.setState({ isVisible: false });
          }}
          windowBackgroundColor="rgba(0,0,0,0.7)"
          animated={true}
          animationType="fade"
          overlayStyle={{ borderRadius: 10, padding: 0 }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "#000",
              fontWeight: "500",
              textAlign: "center",
              flex: 1,
              marginTop: 8,
            }}
          >
            Add Review
          </Text>
          <StarRating
            maxStars={5}
            rating={this.state.rating}
            fullStarColor="#20abd2"
            emptyStarColor="#ddd"
            starSize={36}
            containerStyle={{ alignSelf: "center", marginTop: 16, flex: 1 }}
            starStyle={{ marginHorizontal: 4 }}
            emptyStar="star"
            selectedStar={(rating) => {
              this.setState({ rating: rating });
            }}
          />
          <Item
            style={{
              borderTopWidth: 1,
              borderLeftWidth: 1,
              borderBottomWidth: 1,
              borderRightWidth: 1,
              borderColor: "#ddd",
              flex: 4,
              marginTop: 25,
              justifyContent: "flex-start",
              marginLeft: 12,
              marginRight: 12,
              alignSelf: "center",
            }}
          >
            <Input
              placeholder="Enter Your Review Here"
              multiline
              placeholderTextColor="#aaa"
              style={{
                fontSize: 14,
                padding: 0,
                alignSelf: "flex-start",
                height: "100%",
                textAlignVertical: "top",
                paddingLeft: 6,
                padding: 4,
              }}
            />
          </Item>
          <View
            style={{
              borderTopWidth: 0.5,
              borderColor: "#ddd",
              flexDirection: "row",
              width: "100%",
              minHeight: 20,
              flex: 1,
              marginTop: 25,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                this.setState({ isVisible: false });
              }}
              style={{ flex: 1, height: "100%", justifyContent: "center" }}
            >
              <Text style={{ textAlign: "center" }}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                this.setState({ isVisible: false });
              }}
              style={{ flex: 1, height: "100%", justifyContent: "center" }}
            >
              <Text style={{ textAlign: "center", color: "#20abd2" }}>
                Save
              </Text>
            </TouchableOpacity>
          </View>
        </Overlay>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

// <Image
// source={require("../Photos/Icons/dollar2.jpg")}
// style={{ width: "100%", height: "100%" }}
// resizeMode="contain"
// />
