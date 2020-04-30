import React from "react";
import { createDrawerNavigator } from "react-navigation";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

import Inspiration from "./Home";
import Bag from "./Home";
import Favorites from "./Home";

import SignIn from "./Home";
import BottomTabNavigator from "./Home";
import More from "./Home";
import CustomerSupport from "./Home";

const WIDTH = Dimensions.get("window").width;

const DrawerConfig = {
  drawerWidth: WIDTH * 0.73,
  contentComponent: ({ navigation }) => {
    return <MenuDrawer navigation={navigation} />;
  },
};

export default createDrawerNavigator(
  {
    Shop: {
      screen: BottomTabNavigator,
    },

    Inspiration: {
      screen: Inspiration,
    },
    Bag: {
      screen: Bag,
    },
    Favorites: {
      screen: Favorites,
    },
    My_Account: {
      screen: More,
    },
    Customer_Support: {
      screen: CustomerSupport,
    },
    Logout: {
      screen: SignIn,
    },
  },
  DrawerConfig
);

class MenuDrawer extends React.Component {
  state = {
    switchValue: true,
  };
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          start={{ x: 0, y: 2 }}
          end={{ x: 0, y: 0 }}
          colors={["#203546", "#203546"]}
          style={{ height: "100%" }}
        >
          <View style={styles.View1}>
            <View style={styles.ProfilePic}>
              <TouchableOpacity
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: 90,
                  borderWidth: 1,
                  borderColor: "#f7c744",
                  backgroundColor: "grey",
                  overflow: "hidden",
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
              </TouchableOpacity>
            </View>

            <View
              style={{
                width: "55%",
                height: "100%",
                justifyContent: "center",
                paddingLeft: 10,
              }}
            >
              <Text style={{ fontSize: 19, color: "white", marginTop: 10 }}>
                Peter Malark
              </Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.ContentView}
            style={styles.ContentView}
            onPress={() => {
              this.props.navigation.navigate("Shop");
            }}
          >
            <View style={styles.ContentViewInside1}>
              <Image
                source={require("../Photos/Icons/hoem.png")}
                style={{
                  width: "40%",
                  height: "40%",
                  marginLeft: 5,
                }}
                resizeMode="contain"
              />
            </View>

            <View style={styles.ContentViewInside2}>
              <Text style={styles.ContentViewText}>Home</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.ContentView}
            style={styles.ContentView}
            onPress={() => {
              this.props.navigation.navigate("Profile");
            }}
          >
            <View style={styles.ContentViewInside1}>
              <Image
                source={require("../Photos/Icons/about.png")}
                style={{
                  width: "40%",
                  height: "40%",
                  borderRadius: 0,
                  marginLeft: 5,
                }}
                resizeMode="contain"
              />
            </View>

            <View style={styles.ContentViewInside2}>
              <Text style={styles.ContentViewText}>View Profile</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.ContentView}
            style={styles.ContentView}
            onPress={() => {
              this.props.navigation.navigate("SearchFlights");
            }}
          >
            <View style={styles.ContentViewInside1}>
              <Image
                source={require("../Photos/Icons/about.png")}
                style={{
                  width: "40%",
                  height: "40%",
                  borderRadius: 0,
                  marginLeft: 5,
                }}
                resizeMode="contain"
              />
            </View>

            <View style={styles.ContentViewInside2}>
              <Text style={styles.ContentViewText}>Flights</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.ContentView}
            style={styles.ContentView}
            onPress={() => {
              this.props.navigation.navigate("MyBookings");
            }}
          >
            <View style={styles.ContentViewInside1}>
              <Image
                source={require("../Photos/Icons/about.png")}
                style={{
                  width: "40%",
                  height: "40%",
                  borderRadius: 0,
                  marginLeft: 5,
                }}
                resizeMode="contain"
              />
            </View>

            <View style={styles.ContentViewInside2}>
              <Text style={styles.ContentViewText}>My Booking </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.ContentView}
            style={styles.ContentView}
            // onPress={() => {
            //   this.props.navigation.navigate("Terms_Policy_About", {
            //     pageIndex: 1
            //   });
            // }}
          >
            <View style={styles.ContentViewInside1}>
              <Image
                source={require("../Photos/Icons/about.png")}
                style={{
                  width: "40%",
                  height: "40%",
                  borderRadius: 0,
                  marginLeft: 5,
                }}
                resizeMode="contain"
              />
            </View>

            <View style={styles.ContentViewInside2}>
              <Text style={styles.ContentViewText}>About</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.ContentView}
            style={styles.ContentView}
            // onPress={() => {
            //   this.props.navigation.navigate("Terms_Policy_About", {
            //     pageIndex: 0
            //   });
            // }}
          >
            <View style={styles.ContentViewInside1}>
              <Image
                source={require("../Photos/Icons/terms.png")}
                style={{
                  width: "40%",
                  height: "40%",
                  borderRadius: 0,
                  marginLeft: 5,
                }}
                resizeMode="contain"
              />
            </View>

            <View style={styles.ContentViewInside2}>
              <Text style={styles.ContentViewText}>Terms and Condition</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.ContentView}
            onPress={() => {
              this.props.navigation.navigate("login2");
            }}
          >
            <View style={styles.ContentViewInside1}>
              <Image
                source={require("../Photos/Icons/logout.png")}
                style={{
                  width: "40%",
                  height: "40%",
                  borderRadius: 0,
                  marginLeft: 5,
                }}
                resizeMode="contain"
              />
            </View>

            <View style={styles.ContentViewInside2}>
              <Text style={styles.ContentViewText}>Logout</Text>
            </View>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1eabff",
  },
  View1: {
    height: 170,
    width: "100%",
    flexDirection: "row",

    // backgroundColor: "#1eabff"
  },
  ProfilePic: {
    height: "100%",
    // borderRadius: 100,
    paddingRight: 5,

    borderWidth: 0,
    borderColor: "#575757",
    width: "45%",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  ContentView: {
    paddingLeft: 15,
    height: 50,
    flexDirection: "row",
    width: "100%",
  },
  ContentViewInside1: {
    width: "15%",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#f7c744",
  },
  ContentViewInside2: {
    paddingLeft: 0,
    width: "85%",
    borderBottomWidth: 1,
    borderBottomColor: "#f7c744",
    justifyContent: "center",
  },
  ContentViewText: {
    color: "#ffff",
    fontSize: 12,
  },
  Notification: {
    paddingLeft: 15,
    height: 50,
    flexDirection: "row",
    width: "100%",
  },
  NotificationInside1: {
    width: "15%",
    justifyContent: "center",
    borderBottomWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#f7c744",
  },
  NotificationInside2: {
    paddingLeft: 0,
    width: "60%",
    borderBottomWidth: 1,
    borderBottomColor: "#f7c744",
    justifyContent: "center",
  },
  NotificationInside3: {
    width: "25%",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#f7c744",
  },
});
