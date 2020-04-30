import React from "react";
import {
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Entypo from "react-native-vector-icons/dist/Entypo";
import GloabalHeader from "../Components/GlobalHeader";
import GlobalButton from "../Components/GlobalButton";
import { bindActionCreators } from "redux";
import * as reduxActions from "../redux/actions/actions";
import { connect } from "react-redux";
import Ionicons from "react-native-vector-icons/dist/Ionicons";
import FontAwesome from "react-native-vector-icons/dist/FontAwesome";
import stripe from "tipsi-stripe";

class Profile extends React.Component {
  state = {
    flights: [
      {
        Cost: "Rs. 14,928",
        Destination: "ISB",
        DurationFlight: "2 hr 0 min",
        Fleet: "Screne",
        Source: "KHI",
        Stops: "NONstop",
        Ways: "one Way",
        Source_Time: "7:00",
        Destination_Time: "09:00",
      },
      {
        Cost: "Rs. 14,928",
        Destination: "ISB",
        DurationFlight: "2 hr 0 min",
        Fleet: "AFGANI",
        Source: "KHI",
        Stops: "NONstop",
        Ways: "one Way",
        Source_Time: "7:00",
        Destination_Time: "09:00",
      },
      {
        Cost: "Rs. 14,928",
        Destination: "ISB",
        DurationFlight: "2 hr 0 min",
        Fleet: "JAPANI",
        Source: "KHI",
        Stops: "NONstop",
        Ways: "one Way",
        Source_Time: "7:00",
        Destination_Time: "09:00",
      },
      {
        Cost: "Rs. 14,928",
        Destination: "ISB",
        DurationFlight: "2 hr 0 min",
        Fleet: "PIA",
        Source: "KHI",
        Stops: "NONstop",
        Ways: "one Way",
        Source_Time: "7:00",
        Destination_Time: "09:00",
      },
      {
        Cost: "Rs. 14,928",
        Destination: "ISB",
        Duration_Flight: "2 hr 0 min",
        Fleet: "Airblue",
        Source: "KHI",
        Stops: "NONstop",
        Ways: "one Way",
        Source_Time: "7:00",
        Destination_Time: "09:00",
      },
    ],
    filteredData: [],
  };
  componentDidMount() {
    this.setState({ filteredData: this.props.reduxState.flights });
  }
  handleTextChange = (searchedText) => {
    const lowercasedFilter = searchedText.toLowerCase();
    const filteredData = this.props.reduxState.flights.filter((item) => {
      if (item.Fleet.toLowerCase().includes(lowercasedFilter)) {
        return Object.keys(item);
      }
    });
    this.setState({ filteredData });
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#203546" }}>
        <ScrollView>
          <GloabalHeader
            twoWords={true}
            backArrow={true}
            navigation={this.props.navigation}
            backgroundColor="white"
            headingText="FLIGHTS"
          />
          <View
            style={{
              alignSelf: "center",
              borderWidth: 1,
              backgroundColor: "white",
              width: "95%",
              borderRadius: 5,
              height: 40,
              marginTop: 10,
            }}
          >
            <TextInput
              style={{
                width: "100%",
                color: "black",
                marginLeft: 5,
                paddingRight: 30,
              }}
              onChangeText={this.handleTextChange}
              placeholder="Search Flights By Name"
              placeholderTextColor="black"
            />
            <FontAwesome
              size={20}
              color="black"
              name="search"
              style={{ position: "absolute", right: 3, top: 7 }}
            />
          </View>
          {this.state.filteredData.map((item, i) => {
            return (
              <View
                key={i}
                style={{
                  width: "90%",
                  alignSelf: "center",
                  borderRadius: 15,
                  marginVertical: 10,
                  elevation: 5,
                  backgroundColor: "white",
                  opacity: 30,
                  justifyContent: "center",
                  paddingHorizontal: 20,
                  paddingVertical: 12,
                }}
              >
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <View>
                    <Text
                      style={{
                        color: "black",
                        fontSize: 20,
                        fontWeight: "bold",
                      }}
                    >
                      {item.Source}
                    </Text>
                    <Text
                      style={{
                        color: "black",
                        fontSize: 12,
                      }}
                    >
                      {item.Source_Time}
                    </Text>
                  </View>
                  <Ionicons size={25} color="black" name="ios-airplane" />
                  <View>
                    <Text
                      style={{
                        color: "black",
                        fontSize: 20,
                        fontWeight: "bold",
                      }}
                    >
                      {item.Destination}
                    </Text>
                    <Text
                      style={{
                        color: "black",
                        fontSize: 12,
                      }}
                    >
                      {item.Destination_Time}
                    </Text>
                  </View>
                  {/* <View
                    style={{
                      position: "absolute",
                      height: 20,
                      width: 20,
                      left: 0,
                      top: 10,
                    }}
                  >
                    <Image
                      source={require("../Photos/Icons/about.png")}
                      style={{ width: "100%", height: "100%" }}
                      resizeMode="contain"
                    />
                  </View> */}
                </View>
                <View
                  style={{
                    borderTopWidth: 1,
                    borderColor: "black",
                    marginTop: 5,
                    paddingHorizontal: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      width: "100%",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text style={{ color: "black", fontSize: 10 }}>
                      {item.Fleet}
                    </Text>
                    <Text style={{ color: "black", fontSize: 10 }}>
                      {item.Cost}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      width: "100%",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text style={{ color: "black", fontSize: 10 }}>
                      {item.Stops}
                    </Text>
                    <Text style={{ color: "black", fontSize: 10 }}>
                      {item.Ways}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      width: "100%",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text style={{ color: "black", fontSize: 10 }}>
                      {item.Duration_Flight}
                    </Text>
                    <TouchableOpacity
                      style={{
                        backgroundColor: "#203546",
                        paddingVertical: 3,
                        paddingHorizontal: 10,
                        borderRadius: 3,
                      }}
                      // onPress={async () => {
                      //   stripe.setOptions({
                      //     publishableKey: "PUBLISHABLE_KEY",
                      //     merchantId: "MERCHANT_ID", // Optional
                      //     androidPayMode: "test", // Android only
                      //   });
                      //   const options = {
                      //     requiredBillingAddressFields: "full",
                      //     prefilledInformation: {
                      //       billingAddress: {
                      //         name: "Gunilla Haugeh",
                      //         line1: "Canary Place",
                      //         line2: "3",
                      //         city: "Macon",
                      //         state: "Georgia",
                      //         country: "US",
                      //         postalCode: "31217",
                      //       },
                      //     },
                      //   };

                      //   const token = await stripe.paymentRequestWithCardForm(
                      //     options
                      //   );
                      // }}
                    >
                      <Text style={{ color: "white" }}>Book</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  reduxState: state.reducers,
});

const mapDispatchToProps = (dispatch) => ({
  reduxActions: bindActionCreators(reduxActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
