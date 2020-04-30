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
  Keyboard,
  Linking,
  Button,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";

import { Container, Content } from "native-base";
import { bindActionCreators } from "redux";
import * as reduxActions from "../redux/actions/actions";
import { connect } from "react-redux";
import Toast from "react-native-easy-toast";
import Loader from "../Components/Loader";
class Login extends Component {
  state = {
    emailAddress: "",
    password: "",
    error: false,
    validEmail: false,
  };
  // componentDidMount() {
  //   this.props.reduxActions.internetListener(
  //     this.props.navigation,
  //     this.checkUser
  //   );
  // }

  // checkUser = () => {
  //   this.props.reduxActions.checkUser(this.props.navigation, this.refs.toast);
  // };

  signin = () => {
    if (this.state.emailAddress === "" || this.state.password === "") {
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
        };
        this.props.reduxActions.signin(
          this.props.navigation,
          userdata,
          this.refs.toast
        );
      });
    }
  };

  render() {
    return (
      <Container style={styles.container}>
        <StatusBar barStyle="light-content" />

        <TouchableWithoutFeedback
          style={styles.container}
          onPress={Keyboard.dismiss}
        >
          <View style={styles.logoContainer}>
            <View style={{ paddingVertical: 20 }}>
              <Image
                style={styles.logo}
                source={require("../Photos/Icons/logo1.png")}
              ></Image>
              <Text style={styles.title}>Your Online Travel Partner</Text>
            </View>

            <View style={styles.infoContainer}>
              <TextInput
                style={styles.input}
                placeholder="Enter email"
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
                onPress={
                  // () => this.signin()
                  () => this.props.navigation.navigate("DrawerNavigator")
                }
              >
                <Text style={styles.buttonText}>SIGN IN</Text>
              </TouchableOpacity>
              <Text
                style={styles.titleDonthavesignupaccount}
                onPress={() => this.props.navigation.navigate("register2")}
              >
                Don't have an account.? SIGN UP{" "}
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
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
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(32, 53, 70)",
    flexDirection: "column",
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginTop: 50,
  },
  logo: {
    width: 165,
    height: 56,
  },
  title: {
    color: "#f7c744",
    fontSize: 15,
    textAlign: "center",
    marginTop: 5,
    opacity: 0.9,
  },
  titleDonthavesignupaccount: {
    color: "#ffffff",
    fontSize: 15,
    textAlign: "center",
    marginTop: 10,
    opacity: 0.9,
  },
  infoContainer: {
    height: 300,
    alignItems: "center",
  },
  input: {
    borderRadius: 20,
    height: 40,
    width: 300,
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "#FFF",
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    backgroundColor: "#f7c744",
    paddingVertical: 15,
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
export default connect(mapStateToProps, mapDispatchToProps)(Login);
