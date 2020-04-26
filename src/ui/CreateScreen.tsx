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

export interface CreateScreenProp extends StackHeaderProps {
}

class CreateScreen extends React.Component<CreateScreenProp>{
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.props.navigation.setOptions({
            headerTitle: 'Create Screen ',
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: 'red' },
            headerLeft: () => (<TouchableOpacity
                activeOpacity={0.5}
            // onPress={() => this.create()}
            >
                <Image
                    source={ImagesFactory.flashBtn}
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
                        Create
        </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default (CreateScreen);

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
