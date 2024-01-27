import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  ScrollView,
  Linking,
} from "react-native";

import { WebView } from "react-native-webview";
import { useFonts } from "expo-font";
import HauoraRegular from "../../assets/Fonts/Hauora-Regular.ttf";
import Header from "../Header";
import owken from "../../assets/Pdf/owken.pdf";
import res1 from "../../assets/ServicePageImages/res1.jpeg";
import res2 from "../../assets/ServicePageImages/res2.jpeg";
import sh1 from "../../assets/ServicePageImages/sh1.png";
import sh2 from "../../assets/ServicePageImages/sh2.png";
import sh3 from "../../assets/ServicePageImages/sh3.png";
import sh4 from "../../assets/ServicePageImages/sh4.png";
import sh5 from "../../assets/ServicePageImages/sh5.png";
import sh6 from "../../assets/ServicePageImages/sh6.png";
import { useNavigation } from "@react-navigation/native";
import BackNavigation from "../../Components/BackNavigation";
import Trust from "../../Components/Trust";

export default function ResidentialRoofing() {
  let [fontsLoaded] = useFonts({
    Hauora: HauoraRegular,
  });

  const navigation = useNavigation();
  const [showPdf, setShowPdf] = useState(false);

  const togglePdf = () => {
    setShowPdf(!showPdf);
  };

  const openPdfViewer = () => {
    togglePdf();
  };

  const handleLinkPress = () => {
    Linking.openURL(
      "https://www.owenscorning.com/en-us/roofing/duration-series-shingles"
    );
  };

  return (
    <SafeAreaView>
      <Header button={true} />
      <ScrollView>
        <BackNavigation title={"Residential Roofing"} />
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
            source={res1}
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
            Strengthen home protection with durable, appealing residential
            roofing solutions.
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
            Your Style With Our Premium Shingles & Tiles
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
            Discover roofing excellence with our premium shingles and tiles
            marrying durability and aesthetics. Redefine your roof with
            architectural sophistication. Each shingle and tiles reflects our
            commitment to quality, ensuring your home stands strong and stylish.
            Find the perfect blend of functionality and elegance.
          </Text>
          <Text style={styles.listItem}>
            • Crafted from a 100% recyclable blend of natural limestone and
            virgin resins.
          </Text>
          <Text style={styles.listItem}>
            • Experience the true beauty of authentic slate with its natural
            textures and edges.
          </Text>
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            source={res2}
            style={{ width: 291, height: 233, resizeMode: "cover" }}
          />
        </View>
        <View style={{ marginTop: 15 }}>
          <Text
            style={{
              fontFamily: "Hauora",
              fontSize: 18,
              fontWeight: "500",
              letterSpacing: 0.36,
              marginHorizontal: "5%",
            }}
          >
            Your Roofing Experience with Owens Corning Products
          </Text>
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
            Owens Corning, a leader for over 75 years in building materials,
            ensures your new roof enhances and safeguards your home. Discover
            the enduring performance and beauty of Oakridge® Shingles – 'The
            Right Choice®.' Explore exclusive colors and vibrancy with Owens
            Corning TruDefinition® Duration® Designer Colors Collection
            Shingles.
          </Text>
        </View>
        <View
          style={{
            marginTop: 15,
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* First Row */}
          <View style={{ flexDirection: "row", marginBottom: 10 }}>
            <Image
              source={sh1}
              style={{
                resizeMode: "cover",
                height: 100,
                width: 160,
                marginRight: 10,
              }}
            />
            <Image
              source={sh2}
              style={{ resizeMode: "cover", height: 100, width: 160 }}
            />
          </View>
          <View style={{ flexDirection: "row", marginBottom: 10 }}>
            <Image
              source={sh3}
              style={{
                resizeMode: "cover",
                height: 100,
                width: 160,
                marginRight: 10,
              }}
            />
            <Image
              source={sh4}
              style={{ resizeMode: "cover", height: 100, width: 160 }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              marginBottom: 10,
            }}
          >
            <Image
              source={sh5}
              style={{
                resizeMode: "cover",
                height: 100,
                width: 160,
                marginRight: 10,
              }}
            />
            <Image
              source={sh6}
              style={{ resizeMode: "cover", height: 100, width: 160 }}
            />
          </View>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: "flex-start",
            marginTop: 24,
            marginBottom: 89,
            marginLeft: 25,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#B22335",
              paddingVertical: 12,
              paddingHorizontal: 8,
              width: "35%",
              marginBottom: 12,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={openPdfViewer}
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
              Learn More
            </Text>
          </TouchableOpacity>

          <Modal visible={showPdf} onRequestClose={togglePdf}>
            <View style={{ flex: 1 }}>
          
              <TouchableOpacity
                style={{
                  position: "absolute",
                  top: 20,
                  right: 20,
                  zIndex: 1,
                }}
                onPress={togglePdf}
              >
                <Text style={{ color: "white", fontSize: 18 }}>Close</Text>
              </TouchableOpacity>

              {/* PDF Viewer */}
              <WebView
                source={{
                  uri: `https://docs.google.com/gview?embedded=true&url=${owken}`,
                }}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                startInLoadingState={true}
                renderLoading={() => (
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* You can add a loading indicator here if needed */}
                    <Text>Loading PDF...</Text>
                  </View>
                )}
              />
            </View>
          </Modal>

          <View style={{ marginTop: 15 }}>
            <Text
              style={{
                fontFamily: "Hauora",
                fontSize: 18,
                fontWeight: "500",
                letterSpacing: 0.36,
              }}
            >
              Duration® Series Shingles by Owens Corning
            </Text>
            <Text
              style={{
                marginTop: 5,
                fontFamily: "Hauora",
                fontSize: 14,
                fontWeight: "400",
                letterSpacing: 0.28,
                lineHeight: 20,
              }}
            >
              The Duration® Series Shingles stand out among architectural
              shingles, thanks to our patented SureNail® Technology, a
              groundbreaking innovation in shingle design that sets them apart
              from the competition.
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "400",
                lineHeight: 21,
                letterSpacing: 0.28,
                marginTop: 6,
                fontFamily: "Hauora",
              }}
            >
              {" "}
              • Innovative Design
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "400",
                lineHeight: 21,
                letterSpacing: 0.28,
                marginTop: 6,
                fontFamily: "Hauora",
              }}
            >
              {" "}
              • Strong Adhesion
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "400",
                lineHeight: 21,
                letterSpacing: 0.28,
                marginTop: 6,
                fontFamily: "Hauora",
              }}
            >
              {" "}
              • Enhanced Grip
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "400",
                lineHeight: 21,
                letterSpacing: 0.28,
                marginTop: 6,
                fontFamily: "Hauora",
              }}
            >
              {" "}
              • SureNail® Technology
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "400",
                lineHeight: 21,
                letterSpacing: 0.28,
                marginTop: 6,
                fontFamily: "Hauora",
              }}
            >
              {" "}
              • Triple-Layer Reinforcement®
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "400",
                lineHeight: 21,
                letterSpacing: 0.28,
                marginTop: 6,
                fontFamily: "Hauora",
              }}
            >
              {" "}
              • High Wind Resistance
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#B22335",
              paddingVertical: 12,
              paddingHorizontal: 8,
              width: "35%",
              marginBottom: 12,
              marginTop: 25,
              marginRight: 14,
              justifyContent: "center",
              alignItems: "center",
            }}
            // onPress={() => navigation.navigate("FreeEstimate")}
          >
            <Text
              style={{
                color: "#F9F9F9",
                fontSize: 12,
                fontFamily: "Hauora",
                fontWeight: "400",
                letterSpacing: 0.24,
              }}
              onPress={handleLinkPress}
            >
              Learn More
            </Text>
          </TouchableOpacity>
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
