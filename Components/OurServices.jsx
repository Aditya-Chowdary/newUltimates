import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import HauoraRegular from "../assets/Fonts/Hauora-Regular.ttf";
import { useNavigation } from "@react-navigation/native";

export default function OurServices() {
    const navigation = useNavigation();
    let [fontsLoaded] = useFonts({
        Hauora: HauoraRegular,
      });
  return (
    <SafeAreaView>
      {/*Our Services*/}
      <View style={{ marginHorizontal: "5%" }}>
        {/*Our Services heading*/}
        <View>
          <Text
            style={[
              styles.headerText,
              {
                fontFamily: "Hauora",
                color: "black",
                fontWeight: 600,
                fontSize: 20,
                marginTop: 16.5,
              },
            ]}
          >
            Our Services
          </Text>
        </View>
        {/*Our Services descriptionText*/}
        <View>
          <Text style={[styles.descriptionText, { fontFamily: "Hauora" }]}>
            From Home and Commercial Roofing to Siding, Gutters, and Windows,
            our services redefine precision and style. Elevate your property
            with our commitment to unparalleled craftsmanship.
          </Text>
        </View>
      </View>
      {/*Our Services navigations*/}
      <View style={{ marginHorizontal: "5%" }}>
        <TouchableOpacity
          style={[
            styles.services,
            { borderBottomWidth: 1, borderBottomColor: "#A1A4AC" },
          ]}
          onPress={() => {
            navigation.navigate("Residential");
          }}
        >
          <View style={{ width: "80%" }}>
            <Text
              style={[
                styles.descriptionText,
                { fontWeight: "400", fontSize: 16, marginTop: 0 },
              ]}
            >
              Residential Roofing
            </Text>
          </View>
          <View
            style={{ width: "20%", alignItems: "flex-end", paddingRight: 10 }}
          >
            <Ionicons name="arrow-forward" size={24} color="crimson" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.services,
            { borderBottomWidth: 1, borderBottomColor: "#A1A4AC" },
          ]}
          onPress={() => {
            navigation.navigate("Commercial");
          }}
        >
          <View style={{ width: "80%" }}>
            <Text
              style={[
                styles.descriptionText,
                { fontWeight: "400", fontSize: 16, marginTop: 0 },
              ]}
            >
              Commercial Roofing
            </Text>
          </View>
          <View
            style={{ width: "20%", alignItems: "flex-end", paddingRight: 10 }}
          >
            <Ionicons name="arrow-forward" size={24} color="crimson" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.services,
            { borderBottomWidth: 1, borderBottomColor: "#A1A4AC" },
          ]}
          onPress={() => {
            navigation.navigate("Siding");
          }}
        >
          <View style={{ width: "80%" }}>
            <Text
              style={[
                styles.descriptionText,
                { fontWeight: "400", fontSize: 16, marginTop: 0 },
              ]}
            >
              Siding Enhancements
            </Text>
          </View>
          <View
            style={{ width: "20%", alignItems: "flex-end", paddingRight: 10 }}
          >
            <Ionicons name="arrow-forward" size={24} color="crimson" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.services,
            { borderBottomWidth: 1, borderBottomColor: "#A1A4AC" },
          ]}
          onPress={() => {
            navigation.navigate("Gutters");
          }}
        >
          <View style={{ width: "80%" }}>
            <Text
              style={[
                styles.descriptionText,
                { fontWeight: "400", fontSize: 16, marginTop: 0 },
              ]}
            >
              Gutter Systems
            </Text>
          </View>
          <View
            style={{ width: "20%", alignItems: "flex-end", paddingRight: 10 }}
          >
            <Ionicons name="arrow-forward" size={24} color="crimson" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.services,
            { borderBottomWidth: 1, borderBottomColor: "#A1A4AC" },
          ]}
          onPress={() => {
            navigation.navigate("Windows");
          }}
        >
          <View style={{ width: "80%" }}>
            <Text
              style={[
                styles.descriptionText,
                { fontWeight: "400", fontSize: 16, marginTop: 0 },
              ]}
            >
              Windows Services
            </Text>
          </View>
          <View
            style={{ width: "20%", alignItems: "flex-end", paddingRight: 10 }}
          >
            <Ionicons name="arrow-forward" size={24} color="crimson" />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  descriptionText: {
    fontSize: 15,
    fontWeight: "300",
    lineHeight: 21,
    letterSpacing: 0.28,
    color: "#323539",
    width: "100%",
    marginTop: "5%",
    fontFamily: "Hauora",
  },

  headerText: {
    fontSize: 20,
    fontWeight: "500",
    lineHeight: 30,
    letterSpacing: 0.4,
    color: "#ffffff",
    width: "100%",
    fontFamily: "Hauora",
  },

  services: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 6,
    borderBottomWidth: 0.5,
    marginTop: 10,
  },
});
