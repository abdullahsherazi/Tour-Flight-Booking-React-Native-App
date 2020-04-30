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
  ImageBackground,
} from "react-native";
import Entypo from "react-native-vector-icons/dist/Entypo";
import GloabalHeader from "../Components/GlobalHeader";
import GlobalButton from "../Components/GlobalButton";
import { bindActionCreators } from "redux";
import * as reduxActions from "../redux/actions/actions";
import { connect } from "react-redux";
import Ionicons from "react-native-vector-icons/dist/Ionicons";
import FontAwesome from "react-native-vector-icons/dist/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ModalDropdown from "react-native-modal-dropdown";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import Toast from "react-native-easy-toast";
import Loader from "../Components/Loader";

class SearchFlights extends React.Component {
  state = {
    cities: ["KHI", "ISB", "LHR"],
    departureDate: "",
    isDatePickerVisible: false,
    source: "",
    destination: "",
    class: "",
    adults: "",
    children: "",
    infants: "",
  };

  hideDatePicker = () => {
    this.setState({ isDatePickerVisible: false });
  };

  handleConfirm = (date) => {
    this.setState({
      departureDate: moment(date).format("MM/DD/YYYY"),
      isDatePickerVisible: false,
    });
  };
  searchFlights = () => {
    if (
      this.state.adults === "" ||
      this.state.children === "" ||
      this.state.infants === "" ||
      this.state.departureDate === "" ||
      this.state.source === "" ||
      this.state.destination === "" ||
      this.state.class === ""
    ) {
      this.refs.toast.show("All Fields Must Be Filled !", 1500);
    } else if (this.state.source === this.state.destination) {
      this.refs.toast.show("Source And Destination Can't be Same !", 1500);
    } else {
      flightSearchData = {
        adults: this.state.adults,
        children: this.state.children,
        infants: this.state.infants,
        departureDate: this.state.departureDate,
        source: this.state.source,
        destination: this.state.destination,
        class: this.state.class,
        routeType: "ONEWAY",
      };
      this.props.reduxActions.searchFlights(
        this.props.navigation,
        this.refs.toast,
        flightSearchData
      );
    }
  };
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <ScrollView>
          <GloabalHeader
            twoWords={1}
            backArrow={true}
            navigation={this.props.navigation}
            backgroundColor="white"
            headingText="SEARCH FLIGHTS"
          />

          <ModalDropdown
            options={["ECONOMY", "BUSINESS"]}
            defaultValue="Select Class"
            style={{
              width: "90%",
              backgroundColor: "#203546",
              borderRadius: 5,
              height: 40,
              marginTop: 20,
              justifyContent: "center",
              alignSelf: "center",
            }}
            textStyle={{ color: "white", textAlign: "center" }}
            dropdownStyle={{
              width: "90%",
              borderWidth: 1,
              height: 72,
              marginTop: 3,
            }}
            dropdownTextStyle={{
              color: "black",
            }}
            onSelect={(i, val) => {
              this.setState({ class: val });
            }}
          />
          <ModalDropdown
            options={this.state.cities}
            defaultValue="Select Source"
            style={{
              width: "90%",
              backgroundColor: "#203546",
              borderRadius: 5,
              height: 40,
              alignSelf: "center",
              marginTop: 20,
              justifyContent: "center",
            }}
            textStyle={{ color: "white", textAlign: "center" }}
            dropdownStyle={{
              width: "90%",
              borderWidth: 1,
              height: 100,
              marginTop: 3,
            }}
            dropdownTextStyle={{
              color: "black",
            }}
            onSelect={(i, val) => {
              this.setState({ source: val });
            }}
          />
          <ModalDropdown
            options={this.state.cities}
            defaultValue="Select Destination"
            style={{
              width: "90%",
              backgroundColor: "#203546",
              borderRadius: 5,
              height: 40,
              alignSelf: "center",
              marginTop: 20,
              justifyContent: "center",
            }}
            textStyle={{ color: "white", textAlign: "center" }}
            dropdownStyle={{
              width: "90%",
              borderWidth: 1,
              height: 100,
              marginTop: 3,
            }}
            dropdownTextStyle={{
              color: "black",
            }}
            onSelect={(i, val) => {
              this.setState({ destination: val });
            }}
          />

          <TouchableOpacity
            style={{
              width: "90%",
              backgroundColor: "#203546",
              borderRadius: 5,
              height: 40,
              marginTop: 20,
              justifyContent: "center",
              alignSelf: "center",
              alignItems: "center",
            }}
            onPress={() => {
              this.setState({ isDatePickerVisible: true });
            }}
          >
            <Text style={{ color: "white" }}>
              {this.state.departureDate
                ? "Departure Date"
                : "Select Departure Date"}
            </Text>
            {this.state.departureDate ? (
              <Text style={{ color: "white" }}>{this.state.departureDate}</Text>
            ) : null}
          </TouchableOpacity>
          <View
            style={{
              width: "90%",
              alignSelf: "center",
              borderWidth: 2,
              borderRadius: 5,
              marginTop: 20,
            }}
          >
            <TextInput
              style={{ width: "100%", height: 40, paddingLeft: 30 }}
              placeholder="No of Adults"
              placeholderTextColor="black"
              keyboardType="numeric"
              onChangeText={(val) => {
                this.setState({ adults: val });
              }}
            />
            <Ionicons
              name="ios-person"
              size={20}
              color="black"
              style={{ position: "absolute", left: 5, top: 10 }}
            />
          </View>

          <View
            style={{
              width: "90%",
              alignSelf: "center",
              borderWidth: 2,
              borderRadius: 5,
              marginTop: 20,
            }}
          >
            <TextInput
              style={{ width: "100%", height: 40, paddingLeft: 30 }}
              placeholder="No of Children"
              placeholderTextColor="black"
              keyboardType="numeric"
              onChangeText={(val) => {
                this.setState({ children: val });
              }}
            />
            <Ionicons
              name="ios-person"
              size={20}
              color="black"
              style={{ position: "absolute", left: 5, top: 10 }}
            />
          </View>
          <View
            style={{
              width: "90%",
              alignSelf: "center",
              borderWidth: 2,
              borderRadius: 5,
              marginTop: 20,
            }}
          >
            <TextInput
              style={{ width: "100%", height: 40, paddingLeft: 30 }}
              placeholder="No of Infants"
              placeholderTextColor="black"
              keyboardType="numeric"
              onChangeText={(val) => {
                this.setState({ infants: val });
              }}
            />
            <Ionicons
              name="ios-person"
              size={20}
              color="black"
              style={{ position: "absolute", left: 5, top: 10 }}
            />
          </View>

          <TouchableOpacity
            style={{
              width: "90%",
              backgroundColor: "#203546",
              borderRadius: 5,
              height: 40,
              marginTop: 20,
              justifyContent: "center",
              alignSelf: "center",
              alignItems: "center",
            }}
            onPress={() => {
              this.searchFlights();
            }}
          >
            <Text
              style={{
                fontFamily: "sans-serif-condensed",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Search
            </Text>
          </TouchableOpacity>
        </ScrollView>
        <DateTimePickerModal
          isVisible={this.state.isDatePickerVisible}
          mode="date"
          onConfirm={this.handleConfirm}
          onCancel={this.hideDatePicker}
          minimumDate={new Date()}
        />
        <Toast
          ref="toast"
          style={{
            backgroundColor: "black",
            justifyContent: "center",
            width: "90%",
            alignSelf: "center",
          }}
          position="center"
          positionValue={200}
          fadeInDuration={750}
          fadeOutDuration={1000}
          opacity={0.8}
          textStyle={{
            color: "white",
            textAlign: "center",
            fontSize: 10,
            fontWeight: "bold",
          }}
        />
        {this.props.reduxState.loading ? <Loader /> : null}
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchFlights);
