import React, { Component } from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from "react-native";

import StarRating from "react-native-star-rating";
import home from "../Photos/burger.jpg";
import rider from "../Photos/Icons/rider3.png";

import Feather from "react-native-vector-icons/Feather";

export default class ItemCard extends Component {
  render() {
    return (
      // ALL CARDS PROPS YOU CAN USE

      //   <Card
      //   borderTopWidth={1}
      //   navigation={this.props.navigation}
      //   navigateTo="ScrollableTabsPage"
      //   ResturantName="Gourmet Kitchen"
      //   ResturantDetails={"Lebanese ,Medetarian and healthy Food"}
      //   DeliveryTime="30-40 min"
      //   RidercIcon={true}
      //   fullStarColor="#ffbf00"
      //   emptyStarColor="#ffbf00"
      //   starsvisible={true}
      //   starSize={16}
      //   StarsQuantity={6}
      //   giveRating={4}

      //   // backgroundImage="../Photos/burger.jpg"

      // />

      <TouchableOpacity
        style={[
          styles.container,
          { borderTopWidth: this.props.borderBottomWidth },
        ]}
        onPress={() => this.props.navigation.navigate(this.props.navigateTo)}
      >
        <View
          style={{
            width: "90%",
            height: "100%",
            alignSelf: "center",
            borderRadius: 10,
          }}
        >
          <View style={styles.image}>
            <Image source={this.props.CardImage} style={styles.image} />
          </View>
          <View style={styles.subCon}>
            <View style={styles.mainH}>
              {this.props.ResturantName !== "" ? (
                <Text
                  style={{
                    color: "white",
                    alignSelf: "center",
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                >
                  {this.props.ResturantName}
                </Text>
              ) : null}
              {this.props.starsvisible == true ? (
                <StarRating
                  maxStars={this.props.StarsQuantity}
                  rating={this.props.giveRating}
                  // fullStarColor="#ffbf00"
                  fullStarColor={this.props.fullStarColor}
                  emptyStarColor={this.props.emptyStarColor}
                  // emptyStarColor="#ffbf00"
                  starSize={this.props.starSize}
                  containerStyle={{ alignSelf: "center", marginLeft: 8 }}
                />
              ) : null}
            </View>

            <View style={styles.subH}>
              {this.props.ResturantDetails !== "" ? (
                <Text style={{ color: "white", fontSize: 10 }}>
                  {this.props.ResturantDetails} days tour
                </Text>
              ) : null}
              <View style={{ flexDirection: "row" }}>
                {this.props.RidercIcon == true ? (
                  <Image
                    source={rider}
                    style={{
                      height: "60%",
                      resizeMode: "contain",
                      alignSelf: "center",
                    }}
                  />
                ) : null}
                {this.props.DeliveryTime !== "" ? (
                  <Text
                    style={{
                      color: "white",
                      alignSelf: "center",
                      fontSize: 12,
                    }}
                  >
                    {/* 30-40 mins */}
                    {this.props.DeliveryTime}
                  </Text>
                ) : null}
              </View>
            </View>
          </View>

          <View
            style={{
              width: 35,
              height: 35,
              borderRadius: 35,
              //  backgroundColor: "#31516a",
              position: "absolute",
              alignItems: "center",
              justifyContent: "center",
              right: 10,
              top: 10,
            }}
          >
            <Feather name={"heart"} size={17} color={"white"} />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 250,
    alignSelf: "center",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#e8e8e8",
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
    borderRadius: 10,
  },
  subCon: {
    width: "100%",
    padding: 10,
    borderRadius: 10,
    position: "absolute",
    bottom: 0,
  },
  mainH: { flexDirection: "row", backgroundColor: "rgba(0,0,0,0)" },
  subH: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "rgba(0,0,0,0)",
    justifyContent: "space-between",
  },
});
