import React from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  ScrollView,
  SafeAreaView,
} from "react-native";
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Thumbnail,
} from "native-base";
import { CheckBox } from "react-native-elements";
// import Loader from "../components/Loader";
import GloabalHeader from "../Components/GlobalHeader";

import LinearGradient from "react-native-linear-gradient";

export default class Signup extends React.Component {
  state = {
    check: true,
    firstName: "",
    Lastname: "",
    emailAddress: "",
    password: "",
    StreetAddress: "",
    country: "",
    city: "",
    ContactNo: "",
    checked: true,

    error: false,
    validEmail: false,
  };

  emailChange = (email) => {
    const emailCheckRegex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    this.setState({ emailAddress: email });
    if (emailCheckRegex.test(String(email)) === true) {
      this.setState({ validEmail: true });
    } else if (emailCheckRegex.test(String(email)) === false) {
      this.setState({ validEmail: false });
    }
  };

  onsubmit = () => {
    if (
      (this.state.firstName === "" ||
        this.state.emailAddress === "" ||
        this.state.password === "" ||
        this.state.Lastname === "",
      this.state.StreetAddress === "" ||
        this.state.country === "" ||
        this.state.city === "" ||
        this.state.ContactNo === "" ||
        this.state.noofadults === "" ||
        this.state.noofchildrens === "" ||
        this.state.noofinfants === "")
    ) {
      this.setState({ error: "Kindly Fill All The Fields" });
    } else if (this.state.validEmail === false) {
      this.setState({ error: "Kindly Enter Correct Email" });
    } else {
      this.setState({ error: false });
      this.props.navigation.navigate("Specialinstructions");
      //   let userData = {
      //     firstName: this.state.firstName,
      //     Lastname: this.state.Lastname,
      //     emailAddress: this.state.emailAddress,
      //     password: this.state.password
      //   };
      // this.props.reduxActions.signup(this.props.navigation, userData);
    }
  };

  render() {
    return (
      <Container
        style={{
          flex: 1,
        }}
      >
        <Content>
          <GloabalHeader headingText="Booking Details" arrow={true} />
          <View style={{ paddingLeft: 10, paddingRight: 10 }}>
            <Text
              style={{
                // textAlign: "center",
                fontSize: 16,
                color: "#a3a3a3",
                fontWeight: "500",
                marginVertical: 13,

                paddingBottom: 10,
                borderBottomWidth: 1,
                borderColor: "#eeeeee",
              }}
            >
              Enter valid details{" "}
            </Text>

            <View
              style={{
                flexDirection: "row",
                width: "100%",
                // paddingVertical: 20,
                //   borderBottomWidth: 1,
                height: 70,
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  width: "42%",
                  borderBottomWidth: 0.5,
                  height: "100%",
                  borderColor: "#e0e0e0",
                }}
              >
                <Text>First Name </Text>
                <TextInput
                  placeholder="Enter first name "
                  style={{ borderBottomWidth: 0, marginTop: 0 }}
                  onChangeText={(text) => this.setState({ firstName: text })}
                  // onChangeText={text => this.setState({ firstName: text })}
                />
              </View>
              <View
                style={{
                  width: "42%",
                  borderBottomWidth: 0.5,
                  height: "100%",
                  borderColor: "#e0e0e0",
                }}
              >
                <Text>Last Name </Text>
                <TextInput
                  placeholder="Enter first name "
                  style={{ borderBottomWidth: 0, marginTop: 0 }}
                  onChangeText={(LastText) =>
                    this.setState({ Lastname: LastText })
                  }
                />
              </View>
            </View>

            <View
              style={{
                width: "100%",
                borderBottomWidth: 0.5,
                //   height: "100%",
                borderColor: "#e0e0e0",
                marginTop: 15,
              }}
            >
              <Text style={{ color: "black" }}>Email </Text>
              <TextInput
                placeholder="Ahtisham@gmail.com"
                style={{
                  borderBottomWidth: 0,
                  marginTop: 2,
                  marginLeft: 0,
                  padding: 0,
                }}
                onChangeText={(text) => this.emailChange(text)}
              />
            </View>
            <View
              style={{
                width: "100%",
                borderBottomWidth: 0.5,
                //   height: "100%",
                borderColor: "#e0e0e0",
                marginTop: 15,
              }}
            >
              <Text style={{ color: "black" }}>Address </Text>
              <TextInput
                placeholder="Lahore Road 21 A block defence"
                style={{
                  borderBottomWidth: 0,
                  marginTop: 2,
                  marginLeft: 0,
                  padding: 0,
                }}
                onChangeText={(text) => this.setState({ StreetAddress: text })}
              />
            </View>
            <View
              style={{
                width: "100%",
                borderBottomWidth: 0.5,
                //   height: "100%",
                borderColor: "#e0e0e0",
                marginTop: 15,
              }}
            >
              <Text style={{ color: "black" }}> select Country </Text>
              <TextInput
                placeholder="enter Country"
                style={{
                  borderBottomWidth: 0,
                  marginTop: 2,
                  marginLeft: 0,
                  padding: 0,
                }}
                onChangeText={(text) => this.setState({ country: text })}
              />
            </View>
            <View
              style={{
                width: "100%",
                borderBottomWidth: 0.5,
                //   height: "100%",
                borderColor: "#e0e0e0",
                marginTop: 15,
              }}
            >
              <Text style={{ color: "black" }}> city </Text>
              <TextInput
                placeholder="enter Country"
                style={{
                  borderBottomWidth: 0,
                  marginTop: 2,
                  marginLeft: 0,
                  padding: 0,
                }}
                onChangeText={(text) => this.setState({ city: text })}
              />
            </View>

            <View
              style={{
                width: "100%",
                borderBottomWidth: 0.5,
                //   height: "100%",
                borderColor: "#e0e0e0",
                marginTop: 15,
              }}
            >
              <Text style={{ color: "black" }}> Contact no </Text>
              <TextInput
                placeholder="1234567"
                style={{
                  borderBottomWidth: 0,
                  marginTop: 2,
                  marginLeft: 0,
                  padding: 0,
                }}
                onChangeText={(text) => this.setState({ ContactNo: text })}
              />
            </View>

            <View
              style={{
                width: "100%",
                borderBottomWidth: 0.5,
                //   height: "100%",
                borderColor: "#e0e0e0",
                marginTop: 15,
              }}
            >
              <Text style={{ color: "black" }}> No of adults </Text>
              <TextInput
                placeholder="0"
                style={{
                  borderBottomWidth: 0,
                  marginTop: 2,
                  marginLeft: 0,
                  padding: 0,
                }}
                onChangeText={(text) => this.setState({ ContactNo: text })}
              />
            </View>

            <View
              style={{
                width: "100%",
                borderBottomWidth: 0.5,
                //   height: "100%",
                borderColor: "#e0e0e0",
                marginTop: 15,
              }}
            >
              <Text style={{ color: "black" }}> No of childrens </Text>
              <TextInput
                placeholder="0"
                style={{
                  borderBottomWidth: 0,
                  marginTop: 2,
                  marginLeft: 0,
                  padding: 0,
                }}
                onChangeText={(text) => this.setState({ ContactNo: text })}
              />
            </View>

            <View
              style={{
                width: "100%",
                borderBottomWidth: 0.5,
                //   height: "100%",
                borderColor: "#e0e0e0",
                marginTop: 15,
              }}
            >
              <Text style={{ color: "black" }}> No of infants </Text>
              <TextInput
                placeholder="0"
                style={{
                  borderBottomWidth: 0,
                  marginTop: 2,
                  marginLeft: 0,
                  padding: 0,
                }}
                onChangeText={(text) => this.setState({ ContactNo: text })}
              />
            </View>

            <View
              style={{
                width: "100%",
                borderBottomWidth: 0.5,
                //   height: "100%",
                borderColor: "#e0e0e0",
                marginTop: 20,
              }}
            >
              <Text style={{ color: "black", fontSize: 18, fontWeight: "400" }}>
                {" "}
                Addition information {""}{" "}
                <Text style={{ color: "#e0e0e0", fontSize: 13 }}>
                  {" "}
                  Optional *
                </Text>
              </Text>
              <View
                style={{
                  width: "100%",
                  height: 80,
                  borderRadius: 5,
                  borderWidth: 0.7,
                  borderColor: "#e0e0e0",
                }}
              >
                <TextInput
                  placeholder="write any thing for the taylor"
                  style={{
                    borderBottomWidth: 0,
                    marginTop: 2,
                    marginLeft: 0,
                    padding: 0,
                  }}
                  // onChangeText={text => this.setState({ ContactNo: text })}
                />
              </View>
            </View>

            <TouchableOpacity
              style={{
                width: "80%",
                alignSelf: "center",
                marginTop: 20,
              }}
              // onPress={() => this.onsubmit()}
              onPress={() => this.props.navigation.navigate("PaymentOption")}
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
                  Done
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            <Text
              style={{ marginTop: 10, color: "black", textAlign: "center" }}
            >
              {this.state.error ? this.state.error : null}
            </Text>
          </View>

          {/* */}
          {/* <ScrollView>
          <View style={styles.item}>
            <View
              style={{
                width: "10%",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <MaterialCommunityIcons
                name={"account"}
                size={20}
                color="#74cbff"
              />
            </View>

            <TextInput
              placeholder="Full Name"
              style={{ width: "80%" }}
              onChangeText={text => this.setState({ firstName: text })}
            />
          </View>

          <View style={styles.item}>
            <View
              style={{
                width: "10%",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text
                style={{ fontSize: 15, color: "#39b5ff", fontWeight: "bold" }}
              >
                @
              </Text>
            </View>

            <TextInput
              placeholder="Email Address"
              style={{ width: "80%" }}
              onChangeText={email => this.emailChange(email)}
            />
          </View>

          <View style={[styles.item]}>
            <View
              style={{
                width: "10%",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <FontAwesome5 name={"lock"} size={17} color="#74cbff" />
            </View>

            <TextInput
              placeholder="Password"
              style={{ width: "80%" }}
              maxLength={30}
              secureTextEntry={this.state.check}
              onChangeText={password => this.setState({ password: password })}
            />
            <TouchableOpacity
              style={{ position: "absolute", right: 15 }}
              onPress={() => this.setState({ check: !this.state.check })}
            >
              {this.state.check ? (
                <Entypo name={"eye-with-line"} size={20} />
              ) : (
                <Entypo name={"eye"} size={20} />
              )}
            </TouchableOpacity>
          </View>

          
        </ScrollView>
        
     */}
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    // borderBottomColor: "#000",
    width: "90%",
    flexDirection: "row",
    marginTop: 10,
    backgroundColor: "white",
    marginBottom: 5,

    alignSelf: "center",
    borderRadius: 20,
    alignItems: "center",
    height: 38,
    shadowColor: "#f1f1f1",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.52,
    shadowRadius: 5,

    elevation: 5,
  },
});
