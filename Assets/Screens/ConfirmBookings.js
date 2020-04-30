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
  ScrollView,
} from "react-native";

// import GloabalHeader from "../Components/GlobalHeader";
import GloabalHeader from "../Components/GlobalHeader";

import Fontisto from "react-native-vector-icons/Fontisto";
import Entypo from "react-native-vector-icons/Entypo";

export default class Home extends React.Component {
  state = {};

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}>
          <GloabalHeader
            headingText="Confirm Booking"
            arrow={true}
            navigation={this.props.navigation}
          />
          <TouchableOpacity
            style={{
              width: "90%",
              backgroundColor: "#ffff",
              alignSelf: "center",
              borderRadius: 10,
              marginVertical: 8,
              paddingVertical: 15,
              overflow: "hidden",

              elevation: 4,
              height: 315,
            }}
          >
            <View
              style={{
                width: 80,
                height: 80,
                borderRadius: 10,
                alignSelf: "center",

                elevation: 0.5,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Fontisto name={"heart-eyes"} size={30} color="#eb274b" />
            </View>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: "90%",
                alignSelf: "center",
              }}
            >
              <Text style={{ color: "black", fontSize: 15, marginTop: 20 }}>
                {" "}
                Thank you for confirming your booking
              </Text>
              <Text
                style={{ color: "#e0e0e0", fontSize: 14, marginVertical: 10 }}
              >
                {" "}
                Your order no is: 1111223
              </Text>
              <Text
                style={{
                  color: "#e0e0e0",
                  fontSize: 14,
                  textAlign: "center",
                  marginBottom: 20,
                }}
              >
                {" "}
                Your order no is: 1111223 you will recsve an email
              </Text>
              <Text
                style={{
                  color: "black",
                  fontSize: 14,
                  textAlign: "center",
                  marginBottom: 20,
                }}
              >
                {" "}
                book again
              </Text>
              <TouchableOpacity
                style={{ alignItems: "center" }}
                onPress={() =>
                  this.props.navigation.navigate("DrawerNavigator")
                }
              >
                <Entypo name={"shopping-cart"} color="#eb274b" size={20} />
                <Text
                  style={{ color: "black", fontSize: 14, textAlign: "center" }}
                >
                  {" "}
                  Home
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
