import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  StatusBar,
  TextInput,
  SafeAreaView,
  ScrollView,
  Keyboard,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

import { bindActionCreators } from "redux";
import * as reduxActions from "../redux/actions/actions";
import { connect } from "react-redux";
import Toast from "react-native-easy-toast";
import Loader from "../Components/Loader";

class Register extends Component {
  state = {
    emailAddress: "",
    password: "",
    error: false,
    validEmail: false,
    userName: "",
  };
  signup = () => {
    if (
      this.state.emailAddress === "" ||
      this.state.password === "" ||
      this.state.userName === ""
    ) {
      this.setState({ error: "Kindly Fill All The Fields" });
    } else if (this.state.validEmail === false) {
      this.setState({ error: "Kindly Enter Correct Email" });
    } else if (this.state.password.length < 8) {
      this.setState({ error: "Password length should be 8 or greater" });
    } else {
      this.setState({ error: false }, () => {
        let userdata = {
          emailAddress: this.state.emailAddress.trim(),
          password: this.state.password.trim(),
          userName: this.state.userName,
        };
        this.props.reduxActions.signup(
          this.props.navigation,
          userdata,
          this.refs.toast
        );
      });
    }
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <ScrollView>
          {/* <KeyboardAvoidingView behavior="padding" style={styles.container}> */}
          <TouchableWithoutFeedback
            style={styles.container}
            onPress={Keyboard.dismiss}
          >
            <View style={styles.logoContainer}>
              <View style={styles.infoContainer}>
                <View style={styles.regform}>
                  <Text style={styles.header}>Registration</Text>
                </View>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Username"
                  placeholderTextColor="rgba(255,255,255,0.8)"
                  keyboardType="email-address"
                  returnKeyType="next"
                  underlineColorAndroid="transparent"
                  autoCorrect={false}
                  onChangeText={(userName) => this.setState({ userName })}
                  onSubmitEditing={() => this.refs.txtPassword.focus()}
                />

                <TextInput
                  style={styles.input}
                  placeholder="Enter Email"
                  underlineColorAndroid="transparent"
                  placeholderTextColor="rgba(255,255,255,0.8)"
                  keyboardType="email-address"
                  returnKeyType="next"
                  autoCorrect={false}
                  onChangeText={(email) => {
                    const emailCheckRegex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
                    this.setState({ emailAddress: email });
                    if (emailCheckRegex.test(String(email)) === true) {
                      this.setState({ validEmail: true });
                    } else if (emailCheckRegex.test(String(email)) === false) {
                      this.setState({ validEmail: false });
                    }
                  }}
                  onSubmitEditing={() => this.refs.txtPassword.focus()}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Enter password"
                  underlineColorAndroid="transparent"
                  placeholderTextColor="rgba(255,255,255,0.8)"
                  returnKeyType="go"
                  secureTextEntry
                  autoCorrect={false}
                  onChangeText={(password) => this.setState({ password })}
                  ref={"txtPassword"}
                />
                {this.state.error ? (
                  <Text
                    style={{
                      color: "red",
                      marginVertical: 10,
                      alignSelf: "center",
                    }}
                  >
                    {this.state.error}
                  </Text>
                ) : null}
                <TouchableOpacity
                  style={styles.buttonContainer}
                  onPress={this.signup}
                >
                  <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={{
                  // width: 50,
                  alignSelf: "center",
                  // borde//rWidth: 1
                  //position: "absolute",
                  //  bottom: 0
                }}
                onPress={() => this.props.navigation.navigate("login2")}
              >
                <Text style={styles.titlealreadyhavesignupaccount}>
                  Aleady have an account.? SIGN IN{" "}
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(32, 53, 70)",
    flexDirection: "column",
  },
  header: {
    fontSize: 24,
    color: "#ffffff",
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: "#f7c744",
    borderBottomWidth: 1,
    height: 40,
    width: 300,
    borderRadius: 20,
  },

  titlealreadyhavesignupaccount: {
    color: "#ffffff",
    fontSize: 15,
    textAlign: "center",
    marginTop: 10,
    opacity: 0.9,
    paddingVertical: 20,
  },
  regform: {
    marginTop: -50,
  },
  infoContainer: {
    marginTop: 200,
    left: 0,
    right: 0,
    bottom: 0,
    height: 300,
    alignItems: "center",
  },
  input: {
    borderRadius: 20,
    height: 40,
    width: 300,

    color: "#FFF",
    marginBottom: 30,
    borderBottomColor: "#f8f8f8",
    borderBottomWidth: 1,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    backgroundColor: "#f7c744",
    paddingVertical: 10,
    width: 100,
    borderRadius: 25,
  },
  buttonText: {
    textAlign: "center",
    color: "rgb(32, 53, 70)",
    fontWeight: "bold",
    fontSize: 18,
  },
});
const mapStateToProps = (state) => ({
  reduxState: state.reducers,
});
const mapDispatchToProps = (dispatch) => ({
  reduxActions: bindActionCreators(reduxActions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(Register);
