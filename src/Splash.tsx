import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ImagesFactory from "./resources/images/ImagesFactory";
import AppColor from "./resources/colors/AppColor";
import { StackHeaderProps } from '@react-navigation/stack';
import SplashStore from "./stores/SplashStore";
import { observer, inject } from "mobx-react";
import { Routes } from "./App";

export interface Props extends StackHeaderProps {
  splashStore: SplashStore;
}

@inject("splashStore")
@observer
export default class Splash extends Component<Props> {

  async componentDidMount() {

  }

  gotoHomeScreen = () => {
    this.props.navigation.navigate(Routes.tabHome)
  }

  render() {
    return (
      <View
        style={styles.mainArea}
      >
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => this.gotoHomeScreen()}
        >
          <Text style={{ color: AppColor.lightYellow, alignSelf: "center", fontSize: 30 }}>
          Go to Home
        </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainArea: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "red"
  },
  indicator: {
    color: AppColor.lightYellow
  }
});
