import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";

import Feather from "react-native-vector-icons/Feather";
import { Header, Body, Left, Right } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import Card from "../Components/Card";
import LinearGradient from "react-native-linear-gradient";
const ScreenWidth = Dimensions.get("window").width;
const ScreenHeight = Dimensions.get("window").height;
const drawerWidth = ScreenWidth * 0.73;
import RadioForm from "react-native-simple-radio-button";

export default class Home extends Component {
  state = {
    drawerOpen: false,
    searchAttribute: "days",
    tours: [
      {
        name: "Nuorthen tour",
        city: "karachi",
        days: "10",
        price: "1000",
        pic: require("../Photos/Icons/gilgit1.jpg"),
      },
      {
        name: "MURREE TOUR",
        city: "karachi",
        days: "10",
        price: "1000",
        pic: require("../Photos/Icons/gilgit2.jpg"),
      },
      {
        name: "Hunza tour",
        city: "karachi",
        days: "10",
        price: "1000",
        pic: require("../Photos/Icons/murree1.jpg"),
      },
    ],
    radioProps: [
      { label: "Days", value: "days" },
      { label: "Price", value: "price" },
      { label: "Tour Name", value: "name" },
      { label: "City", value: "city" },
    ],
    check: false,
    searchedText: "",
    filteredData: [],
  };

  componentDidMount() {
    this.setState({
      check: true,
      filteredData: this.state.tours,
    });
  }
  handleTextChange = (searchedText) => {
    this.setState({ searchedText });
    const lowercasedFilter = searchedText.toLowerCase();
    const filteredData = this.state.tours.filter((item) => {
      if (
        item.days.toLowerCase().includes(lowercasedFilter) &&
        this.state.searchAttribute === "days"
      ) {
        return Object.keys(item);
      } else if (
        item.price.toLowerCase().includes(lowercasedFilter) &&
        this.state.searchAttribute === "price"
      ) {
        return Object.keys(item);
      } else if (
        item.city.toLowerCase().includes(lowercasedFilter) &&
        this.state.searchAttribute === "city"
      ) {
        return Object.keys(item);
      } else if (
        item.name.toLowerCase().includes(lowercasedFilter) &&
        this.state.searchAttribute === "name"
      ) {
        return Object.keys(item);
      }
    });
    this.setState({ filteredData });
  };

  render() {
    return (
      <View style={{ flexDirection: "row", width: "auto" }}>
        <View style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <LinearGradient
              start={{ x: 0, y: 2 }}
              end={{ x: 0, y: 0 }}
              colors={["#203546", "#203546"]}
              style={{
                flexDirection: "row",

                height: 100,
                width: "100%",
                flex: 1,
              }}
            >
              <Left style={{ flex: 1 }}>
                <TouchableOpacity
                  style={{
                    width: "20%",
                    height: "100%",
                    justifyContent: "center",
                  }}
                  onPress={() => this.props.navigation.toggleDrawer()}
                >
                  <View
                    style={{
                      width: 40,
                      height: 40,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Feather name={"align-justify"} size={25} color={"white"} />
                  </View>
                </TouchableOpacity>
              </Left>

              <Body
                style={{
                  flex: 1,
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "white", fontSize: 18 }}> TOURS </Text>
              </Body>

              <Right
                style={{
                  flex: 1,
                  justifyContent: "center",
                  backgroundColor: "red",
                }}
              >
                <View
                  style={{
                    width: 35,
                    height: 35,
                    borderRadius: 35,
                    backgroundColor: "#31516a",
                    position: "absolute",
                    alignItems: "center",
                    justifyContent: "center",
                    right: 5,
                    top: -18,
                  }}
                >
                  <Feather name={"heart"} size={17} color={"white"} />
                </View>
              </Right>
            </LinearGradient>

            <View
              style={{
                height: 42,
                position: "absolute",
                top: 80,
                width: "90%",
                backgroundColor: "white",
                alignSelf: "center",
                borderWidth: 1,
                flexDirection: "row",
                borderRadius: 5,
                elevation: 1,
                alignItems: "center",
                borderColor: "#dfdfdf",

                zIndex: 10000,
              }}
              //   onPress={() => this.props.navigation.navigate("Search")}
            >
              <View
                style={{
                  width: 60,
                  borderRightWidth: 1,
                  //  height: 30,
                  alignItems: "center",
                  justifyContent: "center",
                  borderColor: "#dfdfdf",
                }}
              >
                {/* <Feather name={"search"} size={17} color={"#7d7d7d"} /> */}
                <Image
                  source={require("../Photos/Icons/search1.png")}
                  style={{ width: 20, height: 20 }}
                  resizeMode="contain"
                />
              </View>
              <TextInput
                style={{ marginLeft: 5, fontSize: 13 }}
                placeholder="Search Tours By"
                value={this.state.searchedText}
                onChangeText={this.handleTextChange}
              />
            </View>
            {this.state.check ? (
              <RadioForm
                buttonColor="#074777"
                selectedButtonColor="black"
                buttonSize={12}
                buttonOuterSize={15}
                formHorizontal={true}
                // labelHorizontal={true}
                radio_props={this.state.radioProps}
                style={{
                  marginTop: 40,
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
                initial={0}
                onPress={(label) => {
                  this.setState({ searchAttribute: label });
                  this.handleTextChange("");
                }}
                labelStyle={{ marginRight: 40, fontSize: 18, color: "black" }}
              />
            ) : null}
            <View style={styles.Card}>
              {this.state.filteredData.map((item, i) => {
                return (
                  <Card
                    key={i}
                    borderTopWidth={1}
                    navigation={this.props.navigation}
                    navigateTo="DetailsPage"
                    ResturantName={item.name}
                    ResturantDetails={item.days}
                    DeliveryTime="1 day"
                    RidercIcon={true}
                    fullStarColor="#0facbe"
                    emptyStarColor="#0facbe"
                    //starsvisible={true}
                    starSize={16}
                    StarsQuantity={5}
                    giveRating={2}
                    CardImage={item.pic}
                  />
                );
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  radioView: {
    width: "100%",
    height: 30,
    borderWidth: 0,
    padding: 5,
    marginTop: 25,
    marginBottom: 5,
  },
  container: {
    width: ScreenWidth,
    backgroundColor: "#f3f3f3",
  },
  topView: {
    flexDirection: "row",
    width: "100%",
    height: 60,
    backgroundColor: "white",
  },
  topViewContent: {
    marginLeft: 10,
    width: "75%",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ebebeb",
  },
  SearchIcon: {
    paddingTop: 15,
    backgroundColor: "white",
    width: "20%",
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 5,
  },
  topViewContentText: {
    justifyContent: "center",
    width: "80%",
    backgroundColor: "white",
  },
  MainSearchFood: {
    borderBottomWidth: 1,
    borderBottomColor: "#e9e9e9",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingLeft: 7,
  },
  ShapeIcon: {
    width: "10%",
    height: 40,
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 5,
  },
  TextInput: {
    backgroundColor: "white",
    width: "100%",
    height: 40,
    justifyContent: "center",
  },
  specialOffers: {
    backgroundColor: "white",
    paddingLeft: 15,
    height: 40,
    justifyContent: "center",
    paddingVertical: 40,
  },
  MainViewSpecialOffers: {
    height: 160,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#e9e9e9",
    paddingLeft: 5,
    paddingTop: 0,
    paddingRight: 5,
  },
  Card: {
    width: "100%",
    backgroundColor: "white",
    marginTop: 10,
  },
  MainViewTrendingBrands: {
    backgroundColor: "#f7f7f7",
    height: 150,
    justifyContent: "center",
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 5,
  },
  bestBurgerTecom: {
    backgroundColor: "white",
    paddingLeft: 15,
    height: 55,
    justifyContent: "center",
  },
  BurgerTecomContent: {
    width: 160,
    height: "100%",
    marginLeft: 15,
    borderWidth: 1,
    borderColor: "#e6e6e6",
    borderRadius: 10,
  },
  specialOffersContent: {
    width: 100,
    height: "100%",
    marginLeft: 10,
  },
  TrendingBrandsContent: {
    marginLeft: 10,
    flexDirection: "row",
    width: 95,
    height: 85,
    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "white",
  },
});
