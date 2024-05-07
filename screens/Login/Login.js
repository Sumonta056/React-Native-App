import React from "react";
import { Text, View, Image, TextInput } from "react-native";
import Icon from "@expo/vector-icons/AntDesign";

export default class Login extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View
        style={{
          backgroundColor: "#FFF",
          height: "100%",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("./image.jpg")}
          style={{ width: "100%", height: "30%" }}
        />

        <Text
          style={{
            fontSize: 30,
            alignSelf: "center",
          }}
        >
          Eco-Sync
        </Text>

        <Text
          style={{
            marginHorizontal: 55,
            textAlign: "center",
            marginTop: 5,
            opacity: 0.4,
          }}
        >
          Waste Management System in DNCC
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 55,
            borderWidth: 2,
            marginTop: 20,
            paddingHorizontal: 10,
            borderColor: "#00716F",
            borderRadius: 4,
            paddingVertical: 10,
          }}
        >
          <Icon name="mail" color="#00716F" size={24} />
          <TextInput placeholder="Email" style={{ paddingHorizontal: 10 }} />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 55,
            borderWidth: 2,
            marginTop: 15,
            paddingHorizontal: 10,
            borderColor: "#00716F",
            borderRadius: 4,
            paddingVertical: 10,
          }}
        >
          <Icon name="lock" color="#00716F" size={24} />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={{ paddingHorizontal: 10 }}
          />
        </View>

        <View
          style={{
            marginHorizontal: 55,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
            backgroundColor: "#00716F",
            paddingVertical: 10,
            borderRadius: 4,
          }}
        >
          <Text
            onPress={() => navigate("OnboardingScreen")}
            style={{
              color: "white",
              fontSize: 18,
            }}
          >
            Login
          </Text>
        </View>
        <Text
          onPress={() => navigate("Register")}
          style={{
            alignSelf: "center",
            color: "#00716F",
            paddingVertical: 20,
          }}
        >
          "New to our app? Register here."
        </Text>
      </View>
    );
  }
}
