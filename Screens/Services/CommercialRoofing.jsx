import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { useFonts } from "expo-font";
import HauoraRegular from "../../assets/Fonts/Hauora-Regular.ttf";
import Header from "../Header";
import Trust from "../../Components/Trust";
import com1 from "../../assets/ServicePageImages/co1.png";
import com2 from "../../assets/ServicePageImages/co2.png";
import com3 from "../../assets/ServicePageImages/co3.png";
import { useNavigation } from "@react-navigation/native";
import BackNavigation from "../../Components/BackNavigation";

export default function CommercialRoofing() {
  let [fontsLoaded] = useFonts({
    Hauora: HauoraRegular,
  });
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Header button={true} />
      <ScrollView>
        <BackNavigation title={"Commercial Roofing"} />
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
            marginHorizontal: "5%",
          }}
        >
          <Image
            source={com1}
            style={{ height: 180, width: "100%", resizeMode: "cover" }}
          />
          <Text
            style={{
              fontFamily: "Hauora",
              letterSpacing: 0.28,
              fontWeight: "400",
              marginTop: 10,
              lineHeight: 20,
            }}
          >
            Explore top-tier commercial roofing excellence with Ultimates
            Roofing. Tailored to your business's unique needs, our services
            encompass precision installations and long-term maintenance,
            surpassing industry standards.
          </Text>
        </View>
        <View style={{ flex: 1, justifyContent: "flex-start" }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#B22335",
              paddingVertical: 12,
              paddingHorizontal: 8,
              marginTop: 15,
              marginHorizontal: "5%",
              width: "43%",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => navigation.navigate("Contact")}
          >
            <Text
              style={{
                color: "#F9F9F9",
                fontSize: 12,
                fontFamily: "Hauora",
                fontWeight: "400",
                letterSpacing: 0.24,
              }}
            >
              Get Your Free Estimate
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 25, marginHorizontal: "5%" }}>
          <Text
            style={{
              fontFamily: "Hauora",
              fontSize: 18,
              fontWeight: "500",
              letterSpacing: 0.36,
            }}
          >
            Flat and Metal Roof Options
          </Text>
          <Text
            style={{
              marginTop: 8,
              fontFamily: "Hauora",
              fontSize: 14,
              fontWeight: "400",
              letterSpacing: 0.28,
              lineHeight: 23,
            }}
          >
            Ultimates Roofing takes pride in presenting our customers with
            roofing products that have been honored with the prestigious ENERGY
            STAR label. Today, our Benchmark®, Rapid Roof III®, and PUMA® roof
            coatings continue to lead the industry in technology, performance,
            and environmental responsibility, setting the standard for
            excellence.
          </Text>
          <Text
            style={{
              fontFamily: "Hauora",
              fontSize: 18,
              fontWeight: "500",
              letterSpacing: 0.36,
              marginTop: 18,
            }}
          >
            1. Conklin Membrane Coating System
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 18,
          }}
        >
          <Image
            source={com2}
            style={{ width: 312, height: 160, resizeMode: "cover" }}
          />
        </View>
        <View style={{ marginTop: 15 }}>
          <Text
            style={{
              marginTop: 5,
              fontFamily: "Hauora",
              fontSize: 14,
              fontWeight: "400",
              letterSpacing: 0.28,
              marginHorizontal: "5%",
              lineHeight: 20,
            }}
          >
            Conklin's Membrane Coating system is the solution for weathered
            membranes, addressing issues like cracks and reduced efficiency.
            Pioneering acrylic roof coatings since 1977, our commitment to
            innovation now extends to a comprehensive waterproofing system for
            membranes. As TPO and other membranes weather, Conklin's elastomeric
            coatings provide a cost-effective solution, repairing and preserving
            approved membranes, enhancing energy savings, and ensuring the
            longevity of roofing systems.
          </Text>
          <Text
            style={{
              fontFamily: "Hauora",
              fontSize: 14,
              fontWeight: "500",
              letterSpacing: 0.28,
              marginTop: 10,
              marginHorizontal: "5%",
            }}
          >
            Process
          </Text>
          <Text
            style={{
              fontFamily: "Hauora",
              fontSize: 14,
              fontWeight: "500",
              letterSpacing: 0.28,
              marginTop: 10,
              marginHorizontal: "5%",
            }}
          >
            Step 1 - Inspection and Preparation{" "}
          </Text>
          <Text
            style={{
              fontFamily: "Hauora",
              fontSize: 14,
              fontWeight: "500",
              letterSpacing: 0.28,
              marginTop: 10,
              marginHorizontal: "5%",
            }}
          >
            Step 2 - Primer Application{" "}
          </Text>
          <Text
            style={{
              fontFamily: "Hauora",
              fontSize: 14,
              fontWeight: "500",
              letterSpacing: 0.28,
              marginTop: 10,
              marginHorizontal: "5%",
            }}
          >
            Step 3 - Membrane Coating Application
          </Text>
          <Text
            style={{
              fontFamily: "Hauora",
              fontSize: 14,
              fontWeight: "500",
              letterSpacing: 0.28,
              marginTop: 10,
              marginHorizontal: "5%",
            }}
          >
            Step 4 - Quality Inspection and Finalization{" "}
          </Text>
          <Text
            style={{
              fontFamily: "Hauora",
              fontSize: 18,
              fontWeight: "500",
              letterSpacing: 0.36,
              marginTop: 18,
              marginHorizontal: "5%",
            }}
          >
            2. Conklin Metal Roof Restoration System
          </Text>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 18,
            }}
          >
            <Image
              source={com3}
              style={{ width: 312, height: 160, resizeMode: "cover" }}
            />
          </View>
        </View>
        <Text
          style={{
            marginTop: 5,
            fontFamily: "Hauora",
            fontSize: 14,
            fontWeight: "400",
            letterSpacing: 0.28,
            marginHorizontal: "5%",
            lineHeight: 20,
          }}
        >
          Introducing a specialized waterproofing system for metal roofs,
          designed to prevent rust, eliminate leaks, and provide an
          energy-efficient, durable finish. Our approach reinforces seams with
          fabric embedded into our acrylic elastomeric roof coating, enhancing
          strength. Conklin's industry-leading roof coatings preserve entire
          roof surfaces, offering a cost-effective solution for existing metal
          roofs without the need for costly repairs.
        </Text>
        <Text
          style={{
            fontFamily: "Hauora",
            fontSize: 14,
            fontWeight: "500",
            letterSpacing: 0.28,
            marginTop: 10,
            marginHorizontal: "5%",
          }}
        >
          Process
        </Text>
        <Text
          style={{
            fontFamily: "Hauora",
            fontSize: 14,
            fontWeight: "500",
            letterSpacing: 0.28,
            marginTop: 10,
            marginHorizontal: "5%",
          }}
        >
          Step 1 - Inspection and Preparation{" "}
        </Text>
        <Text
          style={{
            fontFamily: "Hauora",
            fontSize: 14,
            fontWeight: "500",
            letterSpacing: 0.28,
            marginTop: 10,
            marginHorizontal: "5%",
          }}
        >
          Step 2 - Primer Application{" "}
        </Text>
        <Text
          style={{
            fontFamily: "Hauora",
            fontSize: 14,
            fontWeight: "500",
            letterSpacing: 0.28,
            marginTop: 10,
            marginHorizontal: "5%",
          }}
        >
          Step 3 - Membrane Coating Application
        </Text>
        <Text
          style={{
            fontFamily: "Hauora",
            fontSize: 14,
            fontWeight: "500",
            letterSpacing: 0.28,
            marginTop: 10,
            marginHorizontal: "5%",
          }}
        >
          Step 4 - Quality Inspection and Finalization{" "}
        </Text>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-start",
            marginTop: 24,
            marginBottom: 89,
          }}
        >
          {/* <TouchableOpacity
            style={{
              backgroundColor: "#B22335",
              paddingVertical: 12,
              paddingHorizontal: 8,
              marginHorizontal: "5%",
              width: "45%",
              marginBottom: 12,
              marginTop: 12,
              marginLeft: 14,
              marginRight: 14,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => navigation.navigate("FreeEstimate")}
          >
            <Text
              style={{
                color: "#F9F9F9",
                fontSize: 12,
                fontFamily: "Hauora",
                fontWeight: "400",
                letterSpacing: 0.24,
              }}
            >
              Get Your Free Estimate
            </Text>
          </TouchableOpacity> */}
          <Trust />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  roof: {
    height: 200,
    backgroundColor: "rgba(30, 30, 42, 0.57)",
  },
  textAboveImage: {
    position: "absolute",
    top: 10, // Adjust the top position as needed
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    zIndex: 1,
    marginTop: 50,
    marginLeft: 25,
  },
  textAboveImage2: {
    position: "absolute",
    top: 10, // Adjust the top position as needed
    fontSize: 25,
    textAlign: "justify",
    width: "100%",
    fontWeight: "bold",
    color: "white",
    zIndex: 1,
    marginTop: 75,
    marginLeft: 90,
  },
  listItem: {
    fontFamily: "Hauora",
    marginTop: 8,
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 0.28,
  },
});
