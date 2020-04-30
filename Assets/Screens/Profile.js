import React from "react";
import {
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

class Profile extends React.Component {
  state = {};

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#ffff" }}>
        <ScrollView>
          <GloabalHeader
            twoWords={true}
            backArrow={true}
            navigation={this.props.navigation}
            backgroundColor="white"
            headingText="Profile"
          />

          <View
            style={{
              width: "90%",
              alignSelf: "center",
              borderRadius: 15,
              flexDirection: "row",
              marginVertical: 10,
              flex: 1,
              elevation: 5,
              backgroundColor: "white",
              opacity: 30,
              justifyContent: "center",
              paddingLeft: 20,
              paddingVertical: 12,
            }}
          >
            <View style={{ width: "70%", justifyContent: "center" }}>
              <Text style={{ fontSize: 17, color: "#a6a6a6" }}>Welcome </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: "#61b1ff",
                  textTransform: "capitalize",
                  fontFamily: "sans-serif-condensed",
                }}
              >
                {/* {this.props.reduxState.userdata.userName} */}
              </Text>
            </View>
            <View style={{ width: "30%" }}>
              <View
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 70,
                  borderWidth: 0.5,
                  borderColor: "#dcdcdc",
                  overflow: "hidden",
                  backgroundColor: "grey",
                }}
              >
                <Image
                  source={{
                    uri:
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQG-GWp9R0p9UrshUAZRiOiH-62eKWwyBOlInissnsMS3PeiPp0",
                  }}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  resizeMode="cover"
                />
              </View>
            </View>
          </View>

          <View
            style={{
              width: "90%",
              alignSelf: "center",
              borderRadius: 10,
              marginVertical: 10,
              paddingVertical: 15,
              overflow: "hidden",
              flexDirection: "row",
              elevation: 5,
              backgroundColor: "white",
            }}
          >
            <View
              style={{
                width: "20%",
                borderWidth: 0,
                alignItems: "center",
                paddingLeft: 10,
              }}
            >
              <Image
                source={require("../Photos/Icons/user.png")}
                style={{
                  height: 20,
                  width: 20,
                  marginTop: 5,
                  tintColor: "#203546",
                }}
                resizeMode="contain"
              />
            </View>
            <View
              style={{
                width: "80%",
                borderWidth: 0,
                paddingLeft: 0,
                justifyContent: "center",
                paddingRight: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: "#203546",
                  marginVertical: 5,
                  fontWeight: "bold",
                }}
              >
                Your Information{" "}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: "#585858",
                  marginTop: 2,
                }}
              >
                {/* {this.props.reduxState.userdata.userName} */}
              </Text>
              <View style={{ paddingVertical: 2 }}>
                <Text style={{ fontSize: 14, color: "#6b6b6b" }}>
                  {/* {this.props.reduxState.userdata.emailAddresss} */}
                </Text>
              </View>
            </View>
          </View>
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
