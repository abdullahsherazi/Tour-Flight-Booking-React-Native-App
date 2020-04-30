import React, { Component } from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
  View,
  FlatList,
  Dimensions,
} from "react-native";
import { Container, Content, Form, Item, Input, CardItem } from "native-base";
import search from "../Photos/Icons/serch.png";
import set from "../Photos/Icons/sety.png";
import GloabalHeader from "../Components/GlobalHeader";
import { List, ListItem, CheckBox } from "native-base";
import LinearGradient from "react-native-linear-gradient";

export default class Search extends Component {
  state = {
    selectedUpperFilter: 0,
    selectedFilters: [],
    filters: [],
    applyFilters: false,
    filterApplied: false,
    upperFilters: [
      {
        checked: true,
        name: "Filter by Cuisine",
        filters: [
          {
            checked: false,
            name: "Seafood",
          },
          {
            checked: false,
            name: "Shawema & Donor",
          },
          {
            checked: false,
            name: "Spanish",
          },
          {
            checked: false,
            name: "Specialty Coffee",
          },
          {
            checked: false,
            name: "Steak house",
          },
          {
            checked: false,
            name: "Sushi",
          },
          {
            checked: false,
            name: "Thai",
          },
          {
            checked: false,
            name: "Turkish",
          },
          {
            checked: false,
            name: "Specialty Coffee",
          },
          {
            checked: false,
            name: "Steak house",
          },
          {
            checked: false,
            name: "Sushi",
          },
          {
            checked: false,
            name: "Thai",
          },
          {
            checked: false,
            name: "Turkish",
          },
        ],
      },
      {
        checked: false,
        name: "Filter by Top Deals",
        filters: [
          {
            checked: false,
            name: "Seafood",
          },
          {
            checked: false,
            name: "Shawema & Donor",
          },
          {
            checked: false,
            name: "Spanish",
          },
          {
            checked: false,
            name: "Specialty Coffee",
          },
          {
            checked: false,
            name: "Steak house",
          },
          {
            checked: false,
            name: "Sushi",
          },
          {
            checked: false,
            name: "Thai",
          },
          {
            checked: false,
            name: "Turkish",
          },
          {
            checked: false,
            name: "Specialty Coffee",
          },
          {
            checked: false,
            name: "Steak house",
          },
          {
            checked: false,
            name: "Sushi",
          },
          {
            checked: false,
            name: "Thai",
          },
          {
            checked: false,
            name: "Turkish",
          },
        ],
      },
      {
        checked: false,
        name: "Filter by Menu",
        filters: [
          {
            checked: false,
            name: "Seafood",
          },
          {
            checked: false,
            name: "Shawema & Donor",
          },
          {
            checked: false,
            name: "Spanish",
          },
          {
            checked: false,
            name: "Specialty Coffee",
          },
          {
            checked: false,
            name: "Steak house",
          },
          {
            checked: false,
            name: "Sushi",
          },
          {
            checked: false,
            name: "Thai",
          },
          {
            checked: false,
            name: "Turkish",
          },
          {
            checked: false,
            name: "Specialty Coffee",
          },
          {
            checked: false,
            name: "Steak house",
          },
          {
            checked: false,
            name: "Sushi",
          },
          {
            checked: false,
            name: "Thai",
          },
          {
            checked: false,
            name: "Turkish",
          },
        ],
      },
    ],
  };
  render() {
    const { checkboxArray } = this.state;
    return (
      <View style={{ height: "100%" }}>
        <GloabalHeader
          backgroundColor={"white"}
          elevation={0}
          styledArrow={true}
          styledArrowColor={"black"}
          navigation={this.props.navigation}
          headingText={"Searchh"}
        />
        <View style={styles.searchView}>
          <View style={styles.searchViewInner}>
            <Image
              source={require("../Photos/Icons/search1.png")}
              style={{ width: 20, height: 20 }}
              resizeMode="contain"
            />
            <Input
              placeholder="Search Restaurants"
              placeholderTextColor="#aaa"
              style={{ fontSize: 12 }}
            />
            <TouchableOpacity
              onPress={() => {
                this.setState({ applyFilters: !this.state.applyFilters });
              }}
            >
              <Image
                source={set}
                style={{
                  resizeMode: "contain",
                  height: 20,
                  tintColor: "#1daace",
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        {!this.state.filterApplied && this.state.applyFilters ? (
          <View>
            <ScrollView
              onScroll={() => {}}
              style={{ backgroundColor: "#FFF", marginBottom: 110 }}
            >
              <List style={{ backgroundColor: "#FFF" }}>
                {this.state.upperFilters.map((text, index) => {
                  return (
                    <View style={styles.ViewListItem}>
                      <ListItem
                        itemDivider
                        key={index}
                        style={styles.ListStyle}
                      >
                        <Text style={{ color: "grey" }}> {text.name}</Text>
                        <CheckBox
                          onPress={() =>
                            this.checkedFunctionUpperFilters(text, index)
                          }
                          color={text.checked ? "#1daace" : "lightgrey"}
                          style={
                            text.checked
                              ? styles.CheckBoxStyle
                              : styles.unCheckBoxStyle
                          }
                          checked={text.checked}
                        />
                      </ListItem>
                    </View>
                  );
                })}
              </List>
            </ScrollView>
            <View
              style={{
                position: "absolute",

                bottom: 0,
                width: "100%",
                height: 100,
                justifyContent: "center",
                backgroundColor: "white",
              }}
            >
              <TouchableOpacity
                onPress={() => this.setState({ filterApplied: true })}
              >
                <LinearGradient
                  start={{ x: 0, y: 3 }}
                  end={{ x: 0, y: 0 }}
                  colors={["black", "#1caace"]}
                  style={{
                    backgroundColor: "black",

                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",

                    height: 50,
                    width: "90%",
                    alignSelf: "center",
                    marginTop: 20,
                    marginBottom: 20,
                  }}
                >
                  <Text style={{ color: "white" }}>Next</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
        {this.state.filterApplied && this.state.applyFilters ? (
          <View style={{ height: "100%", flex: 1 }}>
            <ScrollView
              onScroll={() => {}}
              style={{ backgroundColor: "#FFF", marginBottom: 110 }}
            >
              <List style={{ backgroundColor: "#FFF" }}>
                <View style={styles.ViewListItem}>
                  <ListItem
                    itemDivider
                    key={Math.random()}
                    style={styles.ListStyle}
                  >
                    <Text style={{ color: "grey" }}>
                      {
                        this.state.upperFilters[this.state.selectedUpperFilter]
                          .name
                      }
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        let upperFilters = this.state.upperFilters;
                        upperFilters.forEach((upperFilter) => {
                          upperFilter.filters.forEach((filter) => {
                            filter.checked = false;
                          });
                        });
                        this.setState({ filterApplied: false, upperFilters });
                      }}
                    >
                      <Text style={{ textAlign: "left" }}>Clear All</Text>
                    </TouchableOpacity>
                  </ListItem>
                </View>
                {this.state.upperFilters[
                  this.state.selectedUpperFilter
                ].filters.map((text, index) => {
                  return (
                    <View style={styles.ViewListItem}>
                      <ListItem
                        itemDivider
                        key={index}
                        style={styles.ListStyle}
                      >
                        <Text style={{ color: "grey" }}> {text.name}</Text>
                        <CheckBox
                          onPress={() =>
                            this.checkedFunctionFilters(text, index)
                          }
                          color={text.checked ? "#1daace" : "lightgrey"}
                          style={
                            text.checked
                              ? styles.CheckBoxStyle
                              : styles.unCheckBoxStyle
                          }
                          checked={text.checked}
                        />
                      </ListItem>
                    </View>
                  );
                })}
              </List>
            </ScrollView>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("DrawerNavigator")}
            >
              <LinearGradient
                start={{ x: 0, y: 3 }}
                end={{ x: 0, y: 0 }}
                colors={["black", "#1caace"]}
                style={{
                  backgroundColor: "black",

                  borderRadius: 10,
                  justifyContent: "center",
                  alignItems: "center",

                  height: 50,
                  width: "90%",
                  alignSelf: "center",
                  marginTop: 20,
                  marginBottom: 20,
                }}
              >
                <Text style={{ color: "white" }}>Next</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    );
  }

  checkedFunctionUpperFilters(text, index) {
    const checkboxes = this.state.upperFilters;
    checkboxes.map((txt, ind) => {
      txt.checked = false;
      if (ind === index) {
        txt.checked = true;
        this.setState({ selectedUpperFilter: index });
      }
    });
    this.setState({ upperFilters: checkboxes, filters: text.filters });
  }

  checkedFunctionFilters(text, index) {
    const checkboxes = this.state.upperFilters[this.state.selectedUpperFilter]
      .filters;
    let selectedFilters = this.state.selectedFilters;
    checkboxes.map((txt, ind) => {
      if (ind === index) {
        selectedFilters.push(txt);
        txt.checked = !txt.checked;
      }
    });
    this.setState({ filters: checkboxes, selectedFilters });
  }
}

const styles = StyleSheet.create({
  item: {
    width: "90%",
    paddingHorizontal: 8,
    backgroundColor: "#f8f6f7",
    alignSelf: "center",
    marginTop: 10,
    borderRadius: 5,
    borderBottomWidth: 0,
    height: 40,
  },

  ViewListItem: {
    borderBottomColor: "#f8f8f8",
    borderBottomWidth: 1,
  },

  ListStyle: {
    display: "flex",
    justifyContent: "space-between",
    borderWidth: 0,
    backgroundColor: "#FFF",
    paddingBottom: 20,
    paddingTop: 20,
  },

  CheckBoxStyle: {
    backgroundColor: "#1daace",
    borderRadius: 10,
  },
  unCheckBoxStyle: {
    backgroundColor: "lightgrey",
    borderRadius: 10,
  },
  searchView: {
    height: 50,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#f8f6f7"
  },
  searchViewInner: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red",
    borderRadius: 8,
    paddingLeft: 10,
    paddingRight: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 1,
  },
});
