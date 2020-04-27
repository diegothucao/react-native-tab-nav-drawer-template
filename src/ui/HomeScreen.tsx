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
import { Routes } from "../App";
import ImagesFactory from "../resources/images/ImagesFactory";

export interface HomeScreenProp extends StackHeaderProps {
}

class HomeScreen extends React.Component<HomeScreenProp>{
  constructor(props: any) {
    super(props);
  }

  create = () => {
    this.props.navigation.navigate(Routes.createScreen)

  }
  componentDidMount() {
    
    this.props.navigation.setOptions({
      headerTitle: 'Home ',
      headerTitleAlign: 'center',
      headerTitleStyle: { color: 'white' },
      headerStyle: { backgroundColor: 'red' },
      headerRightContainerStyle: { marginRight: 14 },
      headerRight: () =>
        (<TouchableOpacity
          activeOpacity={0.5}
          onPress={() => this.create()}
        >
          <Image
            source={ImagesFactory.whiteAddBtn}
            style={styles.addButon}
          />
        </TouchableOpacity>),
      headerLeftContainerStyle: { marginLeft: 14 },
      headerLeft: () => (<TouchableOpacity
        activeOpacity={0.5}
        onPress={() => this.props.navigation.goBack()}
      >
        <Image
          source={ImagesFactory.whiteBackBtn}
        // style={styles.backButon}
        />
      </TouchableOpacity>)
    })

  }

  render() {
    return (
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
    backgroundColor: "white"
  },
  addButon: {
    alignItems: "center",
    marginLeft: 14,
    width: 30,
    justifyContent: "flex-start"
  }

});
