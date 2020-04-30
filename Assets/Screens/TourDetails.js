import React from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  ActivityIndicator,
} from "react-native";

import GloabalHeader from "../Components/GlobalHeader";

import LinearGradient from "react-native-linear-gradient";
import { ScrollView } from "react-native-gesture-handler";

export default class Home extends React.Component {
  state = {
    LocalBrand: [
      {
        ProductName: "Shirts",

        image: require("../Photos/Icons/six.jpg"),
      },
    ],
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}>
          <GloabalHeader
            navigation={this.props.navigation}
            // BlueDrawerIcon={true}
            //  backgroundColor={this.props.reduxState.theme.backgroundColor}
            RightCart={true}
            headingText=" Tour Details"
          />

          {this.state.LocalBrand.map((Item, data) => {
            return (
              <TouchableOpacity
                style={{
                  elevation: 0,
                  // height: 100,
                  alignSelf: "center",
                  backgroundColor: "white",
                  // alignItems: "center",
                  justifyContent: "center",
                  marginVertical: 2,
                  width: "90%",
                  borderRadius: 10,
                  paddingVertical: 10,
                  overflow: "hidden",
                  shadowColor: "#f3f3f3",
                  marginBottom: 17,
                  height: 400,

                  shadowOffset: {
                    width: 0,
                    height: 4,
                  },
                  shadowOpacity: 0.52,
                  shadowRadius: 20,

                  elevation: 4,
                }}
                onPress={() => this.props.navigation.navigate("")}
              >
                <View
                  style={{
                    height: "100%",
                    width: "100%",
                    borderWidth: 0,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={(source = Item.image)}
                    style={{ width: "100%", height: "100%" }}
                    resizeMode="cover"
                  />
                </View>
              </TouchableOpacity>
            );
          })}

          <View style={{ paddingLeft: 5, paddingRight: 5 }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "300",
                color: "black",
              }}
            >
              {" "}
              WINTER HILLS CAMP{" "}
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "300",
                color: "black",
              }}
            >
              {" "}
              Rs. 330
            </Text>
            <Text>-10 days</Text>
            <Text>-From: Karachi </Text>
            <Text>-From: Naran </Text>
            <Text>-Max 40 people</Text>
            <Text>-Details: </Text>
            <Text>-Terms and Conditions: </Text>
            <Text>-Price Include: </Text>
            <Text>-Price Exclude: </Text>
            <Text>-Complementaries: </Text>
            <Text>-Attractions: </Text>
            <Text>-Days: </Text>
            <Text>-Itenerary: </Text>

            <View
              style={{
                paddingVertical: 20,
                justifyContent: "center",
                paddingHorizontal: 10,
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderColor: "#060606",
                marginVertical: 20,
              }}
            >
              <Text style={{ color: "black", fontSize: 18 }}> Total </Text>
              <View style={{ position: "absolute", right: 0 }}>
                <Text> Rs :330</Text>
                <Text style={{ color: "#a5a5a5", fontSize: 10 }}>
                  {" "}
                  (inclusive all taxes )
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={{
                width: "80%",
                alignSelf: "center",
              }}
              onPress={() => this.props.navigation.navigate("Bookingdetails")}
            >
              <LinearGradient
                colors={["#203546", "#203546"]}
                style={{
                  alignItems: "center",
                  borderRadius: 5,
                  height: 50,
                  justifyContent: "center",
                }}
                start={{ x: 0, y: 0 }}
                end={{ x: 1.1, y: 0 }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "300",
                    color: "white",
                    marginLeft: 5,
                  }}
                >
                  {" "}
                  Book Tour{" "}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
