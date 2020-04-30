import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./Home";
import DrawerNavigator from "./Sidebar";
import MyBookings from "./MyBookings";
import Search from "./Search";
import PaymentOption from "./PaymentOption";
import login2 from "./Login2";
import register2 from "./Register2";
import DetailsPage from "./TourDetails";
import Bookingdetails from "./BookingDetails";
import Confirmpage from "./ConfirmBookings";
import NoInternetErrorScreen from "./NoInternetErrorScreen";
import Profile from "./Profile";
import Flights from "./Flights";
import SearchFlights from "./SearchFlights";

const AppNavigator = createStackNavigator(
  {
    SearchFlights: {
      screen: SearchFlights,
      navigationOptions: () => ({
        header: null,
      }),
    },

    Flights: {
      screen: Flights,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Profile: {
      screen: Profile,
      navigationOptions: () => ({
        header: null,
      }),
    },
    NoInternetErrorScreen: {
      screen: NoInternetErrorScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Confirmpage: {
      screen: Confirmpage,
      navigationOptions: () => ({
        header: null,
      }),
    },
    login2: {
      screen: login2,
      navigationOptions: () => ({
        header: null,
      }),
    },
    register2: {
      screen: register2,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Bookingdetails: {
      screen: Bookingdetails,
      navigationOptions: () => ({
        header: null,
      }),
    },

    DetailsPage: {
      screen: DetailsPage,
      navigationOptions: () => ({
        header: null,
      }),
    },

    PaymentOption: {
      screen: PaymentOption,
      navigationOptions: () => ({
        header: null,
      }),
    },

    MyBookings: {
      screen: MyBookings,
      navigationOptions: () => ({
        header: null,
      }),
    },

    Home: {
      screen: Home,
      navigationOptions: () => ({
        header: null,
      }),
    },

    Search: {
      screen: Search,
      navigationOptions: () => ({
        header: null,
      }),
    },

    DrawerNavigator: {
      screen: DrawerNavigator,
      navigationOptions: () => ({
        header: null,
      }),
    },
  },

  {
    initialRouteName: "login2",
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class StackNavigator extends Component {
  render() {
    return <AppContainer />;
  }
}
