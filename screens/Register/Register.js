import React from "react";
import { Text, View, Image, TextInput } from "react-native";
import Icon from "@expo/vector-icons/AntDesign";

export default class Register extends React.Component {
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
          source={require("../Login/image.jpg")}
          style={{ width: "100%", height: "30%" }}
        />

        <Text
          style={{
            fontSize: 30,
            alignSelf: "center",
          }}
        >
          Save the world
        </Text>

        <Text
          style={{
            marginHorizontal: 55,
            textAlign: "center",
            marginTop: 5,
            opacity: 0.4,
          }}
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
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
            placeholder="Confirm Password"
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
            style={{
              color: "white",
              fontSize: 18,
            }}
          >
            Register
          </Text>
        </View>
        <Text
          onPress={() => navigate("Home")}
          style={{
            alignSelf: "center",
            color: "#00716F",
            paddingVertical: 20,
          }}
        >
          "Already have an account? Login here."
        </Text>
      </View>
    );
  }
}