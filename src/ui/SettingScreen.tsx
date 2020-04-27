import React from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image
} from "react-native";
import { StackHeaderProps } from '@react-navigation/stack';
import AppColor from "../resources/colors/AppColor";
import ImagesFactory from "../resources/images/ImagesFactory";

export interface SettingScreenProp extends StackHeaderProps {
}

class SettingScreen extends React.Component<SettingScreenProp> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
    
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    activeOpacity={0.5}
                onPress={() => this.props.navigation.goBack()}
                >
                    <Text style={{ color: AppColor.lightYellow, alignSelf: "center", fontSize: 30 }}>
                        Setting
                     </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default (SettingScreen);

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "white"
    },

});
