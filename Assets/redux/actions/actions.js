import * as actionTypes from "./types";
import AsyncStorage from "@react-native-community/async-storage";
import { NavigationActions, StackActions } from "react-navigation";
import { server, flightsApi } from "../../constants/server";
import NetInfo from "@react-native-community/netinfo";
import { Platform } from "react-native";
import axios from "axios";

export const selectTheme = (theme) => async (dispatch) => {
  AsyncStorage.setItem("theme", JSON.stringify(theme)).then((asyncResponse) => {
    dispatch({
      type: actionTypes.SET_THEME,
      payload: theme,
    });
  });
};

export const checkAsyncTheme = () => async (dispatch) => {
  AsyncStorage.getItem("theme").then((theme) => {
    var theme = JSON.parse(theme);
    if (theme) {
      dispatch({
        type: actionTypes.SET_THEME,
        payload: theme,
      });
    } else
      dispatch({
        type: actionTypes.SET_THEME,
        payload: theming[0],
      });
  });
};

export const signup = (navigation, userdata, toast) => async (dispatch) => {
  dispatch({ type: actionTypes.START_LOADING });
  firebase
    .auth()
    .createUserWithEmailAndPassword(userdata.emailAddress, userdata.password)
    .then(async (res) => {
      const ref = firebase
        .firestore()
        .collection(firestoreCollections.users)
        .doc(res.user.uid);
      if (userdata.type === "FREELANCER") {
        await ref.set({
          emailAddress: userdata.emailAddress,
          mobileNumber: userdata.mobileNumber,
          gender: userdata.gender,
          fullName: userdata.fullName,
          serviceOffered: userdata.serviceOffered,
          type: userdata.type,
          avatar: userdata.avatar,
          noOfPeopleReviewed: 0,
          reviewRating: 0,
          currentBooking: [],
          totalEarning: 0,
        });
      } else if (userdata.type === "CLIENT") {
        await ref.set({
          emailAddress: userdata.emailAddress,
          mobileNumber: userdata.mobileNumber,
          avatar: userdata.avatar,
          gender: userdata.gender,
          fullName: userdata.fullName,
          type: userdata.type,
        });
      }

      dispatch({
        type: actionTypes.SET_USER_DATA,
        payload: { ...userdata, uid: res.user.uid },
      });

      dispatch({ type: actionTypes.NOT_LOADING });
      {
        userdata.type === "CLIENT"
          ? navigation.dispatch(
              StackActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({
                    routeName: "ClientHomeScreen",
                  }),
                ],
              })
            )
          : navigation.dispatch(
              StackActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({
                    routeName: "FreelancerHomeScreen",
                  }),
                ],
              })
            );
      }
    })
    .catch((err) => {
      dispatch({ type: actionTypes.NOT_LOADING });
      toast.show(err.message, 2500);
    });
};

export const signin = (navigation, userdata, toast) => async (dispatch) => {
  dispatch({ type: actionTypes.START_LOADING });
  firebase
    .auth()
    .signInWithEmailAndPassword(userdata.emailAddress, userdata.password)
    .then((res) => {
      const loginRef = firebase
        .firestore()
        .collection(firestoreCollections.users)
        .doc(res.user.uid);

      loginRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            dispatch({
              type: actionTypes.SET_USER_DATA,
              payload: { ...doc.data(), uid: res.user.uid },
            });

            dispatch({ type: actionTypes.NOT_LOADING });

            {
              doc.data().type === "CLIENT"
                ? navigation.dispatch(
                    StackActions.reset({
                      index: 0,
                      actions: [
                        NavigationActions.navigate({
                          routeName: "ClientHomeScreen",
                        }),
                      ],
                    })
                  )
                : navigation.dispatch(
                    StackActions.reset({
                      index: 0,
                      actions: [
                        NavigationActions.navigate({
                          routeName: "FreelancerHomeScreen",
                        }),
                      ],
                    })
                  );
            }
          } else {
            dispatch({ type: actionTypes.NOT_LOADING });
            toast.show(
              "Your Inforamtion Has Been Deleted Kindly Create Another Account",
              2500
            );
          }
        })
        .catch((error) => {
          dispatch({ type: actionTypes.NOT_LOADING });
          toast.show(error.message, 2500);
        });
    })
    .catch((err) => {
      dispatch({ type: actionTypes.NOT_LOADING });
      toast.show(err.message, 2500);
    });
};

export const signout = (navigation) => async (dispatch) => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({
            routeName: "Signin",
          }),
        ],
      });
      navigation.dispatch(resetAction);
      dispatch({ type: actionTypes.CLEAR_ALL_DATA });
    })
    .catch((err) => {
      alert(err.message);
    });
};

export const checkUser = (navigation, toast) => async (dispatch) => {
  dispatch({ type: actionTypes.START_LOADING });
  var user = firebase.auth().currentUser;
  if (user) {
    const loginRef = firebase
      .firestore()
      .collection(firestoreCollections.users)
      .doc(user._user.uid);

    loginRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          dispatch({
            type: actionTypes.SET_USER_DATA,
            payload: { ...doc.data(), uid: user._user.uid },
          });
          {
            doc.data().type === "CLIENT"
              ? navigation.dispatch(
                  StackActions.reset({
                    index: 0,
                    actions: [
                      NavigationActions.navigate({
                        routeName: "ClientHomeScreen",
                      }),
                    ],
                  })
                )
              : navigation.dispatch(
                  StackActions.reset({
                    index: 0,
                    actions: [
                      NavigationActions.navigate({
                        routeName: "FreelancerHomeScreen",
                      }),
                    ],
                  })
                );
          }
          dispatch({ type: actionTypes.NOT_LOADING });
        } else {
          dispatch({ type: actionTypes.NOT_LOADING });
          toast.show(
            "Your Inforamtion Has Been Deleted Kindly Create Another Account",
            2500
          );
        }
      })
      .catch((error) => {
        dispatch({ type: actionTypes.NOT_LOADING });
        toast.show("Some Problem Occured While Making You Login", 2500);
      });
  } else {
    dispatch({ type: actionTypes.NOT_LOADING });
  }
};

export const internetListener = (navigation, checkUser) => async (dispatch) => {
  NetInfo.isConnected.fetch().then((isConnected) => {
    if (!isConnected) {
      navigation.dispatch(
        StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({
              routeName: "NoInternetErrorScreen",
            }),
          ],
        })
      );
    } else {
      checkUser();
    }
  });
  NetInfo.isConnected.addEventListener(
    "connectionChange",
    async (isNetworkConnected) => {
      connected = isNetworkConnected;
      if (!connected) {
        navigation.dispatch(
          StackActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({
                routeName: "NoInternetErrorScreen",
              }),
            ],
          })
        );
      }
    }
  );
};

export const searchFlights = (navigation, toast, flightSearchData) => async (
  dispatch
) => {
  dispatch({ type: actionTypes.START_LOADING });
  let formData = new FormData();
  formData.append("class", flightSearchData.class);
  formData.append("source", flightSearchData.source);
  formData.append("destination", flightSearchData.destination);
  formData.append("departure_date", flightSearchData.departureDate);
  formData.append("noofadults", flightSearchData.adults);
  formData.append("noofchildrens", flightSearchData.children);
  formData.append("noofinfants", flightSearchData.infants);
  formData.append("route_type", flightSearchData.routeType);

  axios
    .post(flightsApi, formData)
    .then((response) => {
      if (response.status == 200) {
        if (Object.values(response.data).length > 0) {
          dispatch({ type: actionTypes.NOT_LOADING });
          dispatch({
            type: actionTypes.SET_FLIGHTS,
            payload: Object.values(response.data),
          });
          navigation.navigate("Flights");
        } else {
          dispatch({ type: actionTypes.NOT_LOADING });
          toast.show("No Flights Available", 1500);
        }
      } else {
        dispatch({ type: actionTypes.NOT_LOADING });
        toast.show(
          "Sorry Some Problem Occured Or No Data According To Your Searched Attributes",
          1500
        );
      }
    })
    .catch(() => {
      dispatch({ type: actionTypes.NOT_LOADING });
      toast.show(
        "Sorry Some Problem Occured Or No Data According To Your Searched Attributes",
        1500
      );
    });
};
