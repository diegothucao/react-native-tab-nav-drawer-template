import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image
} from "react-native";
import { StackHeaderProps } from '@react-navigation/stack';
import AppColor from "../resources/colors/AppColor";

export interface HomeScreenProp extends StackHeaderProps {
}

class HomeScreen extends React.Component <HomeScreenProp>{
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
  }
 
  render() { 
    return  (
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => this.props.navigation.goBack()}
        >
          <Text style={{ color: AppColor.lightYellow, alignSelf: "center", fontSize: 30 }}>
          Back
        </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default (HomeScreen);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "red"
  }
 
});
