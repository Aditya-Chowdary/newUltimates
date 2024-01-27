import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import HauoraRegular from "../assets/Fonts/Hauora-Regular.ttf";
import A1 from "../assets/AboutPageImages/A1.jpeg";
import A2 from "../assets/AboutPageImages/A2.jpeg";
import Header from "../Screens/Header";
import ThreeCards from "../Components/ThreeCards";
import Trust from "../Components/Trust";
import { useNavigation } from "@react-navigation/native";
import BackNavigation from "../Components/BackNavigation";
import AssistButton from "../Components/AssistButton";

export default function AboutPage() {
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    Hauora: HauoraRegular,
  });

  return (
    <SafeAreaView>
      <Header button={true} />
      <AssistButton />

      <ScrollView>
        <BackNavigation title={"About"} />
        <Text style={styles.mainText}>
          Ultimates Roofing LLC, established in [Year], proudly serves
          [Location] and surrounding areas, specializing in top-tier roofing
          solutions. With nearly a decade of dedicated expertise, our seasoned
          roofing contractor ensures excellence in every project, offering
          comprehensive installation, replacement, and meticulous long-term
          repairs. Your peace of mind is our commitment to excellence.
        </Text>
        <View style={styles.imageContainer}>
          <Image source={A1} style={styles.image} />
        </View>

        <ThreeCards />
        <View style={styles.secondImageContainer}>
          <Image source={A2} style={styles.secondImage} />
          <Text style={styles.secondText}>
            Ultimates Roofing LLC embodies a decade of passion and expertise in
            redefining roofing. Beyond industry norms, we're not just a business
            but a dedicated team committed to excellence and integrity.
            Synonymous with quality and innovation, Ultimates Roofing strives to
            make a lasting impact on our community with each project.
          </Text>
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>15+</Text>
            <Text style={styles.statText}>Years of{"\n"}Experience</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>20 - 25</Text>
            <Text style={styles.statText}>Years of{"\n"}Warranty</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>100%</Text>
            <Text style={styles.statText}>Quality{"\n"}Products</Text>
          </View>
        </View>
        <Trust />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainText: {
    fontSize: 14,
    marginHorizontal: "5%",
    marginVertical: "4%",
    fontWeight: "400",
    letterSpacing: 0.28,
    fontFamily: "Hauora",
    color: "#323539",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    resizeMode: "cover",
    height: 131,
    width: 362,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },
  secondImageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  secondImage: {
    marginHorizontal: "1%",
    height: 312,
    width: 362,
  },
  secondText: {
    fontFamily: "Hauora",
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 0.28,
    color: "#323539",
    marginTop: 10,
    marginHorizontal: "5%",
  },
  statsContainer: {
    flexDirection: "row",
    gap: 70,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  statBox: {
    flexDirection: "column",
  },
  statNumber: {
    color: "#B22335",
    fontFamily: "Hauora",
    fontSize: 20,
    fontWeight: "500",
    letterSpacing: 0.4,
    textAlign: "center",
  },
  statText: {
    color: "#323539",
    fontSize: 12,
    fontFamily: "Hauora",
    fontWeight: "400",
    letterSpacing: 0.24,
    textAlign: "center",
  },
});
