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
  SafeAreaView,
  ScrollView,
} from "react-native";
// import GlobalHeader from "../components/GlobalHeader";
import { bindActionCreators } from "redux";
import * as reduxActions from "../redux/actions/actions";
import { connect } from "react-redux";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

class NoInternetErrorScreen extends React.Component {
  state = {};
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#ffff" }}>
        {/* <GlobalHeader
          // arrow={true}
          // RedDrawerIcon={true}
          // twoWords={1}
          // navigation={this.props.navigation}
          //  BlueDrawerIcon={true}
          backgroundColor="white"
          //RightCart={true}
          // headingText="Order Summary"
        /> */}
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <MaterialCommunityIcons
            name="wifi-off"
            size={50}
            color="red"
            style={{ marginTop: -40 }}
          />
          <View
            style={{
              width: "80%",
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "center",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                color: "black",
                fontSize: 25,
                textTransform: "capitalize",
                textAlign: "center",
                fontFamily: "sans-serif-condensed",
              }}
            >
              Network Error
            </Text>
            <Text
              style={{
                color: "black",
                fontSize: 20,
                textTransform: "capitalize",
                textAlign: "center",
                fontFamily: "sans-serif-condensed",
              }}
            >
              Please Check your network connection and try again
            </Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    // borderBottomColor: "#000",
    backgroundColor: "white",
    alignSelf: "center",
    width: "90%",
    borderRadius: 15,
    elevation: 1,
  },
});
const mapStateToProps = (state) => ({
  reduxState: state.reducers,
});

const mapDispatchToProps = (dispatch) => ({
  reduxActions: bindActionCreators(reduxActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoInternetErrorScreen);
