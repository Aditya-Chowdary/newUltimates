import React from "react";

import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import Header from "./Header";
import BackNavigation from "../Components/BackNavigation";
import Reviews from "../Components/Reviews";
import Trust from "../Components/Trust";
import ReviewSenderForm from "../Components/ReviewSenderForm";
import AssistButton from "../Components/AssistButton";

// create a component
const ReviewsPage = () => {
  return (
    <SafeAreaView>
      <Header button={true} />
      <AssistButton />
      <ScrollView style={styles.ScrollbodyBackground}>
        <BackNavigation title={"Reviews"} />
        <SafeAreaView style={{ paddingHorizontal: "5%" }}>
          <View>
            <Text style={styles.descriptionHeadingText}>
              Hear it from Our Clients
            </Text>
          </View>
          <View>
            <Text style={styles.descriptionText}>
              Discover why homeowners love Ultimates Roofing! Read brief
              testimonials highlighting our excellence in processes, materials,
              and meticulous cleanups.
            </Text>
          </View>
        </SafeAreaView>
        <SafeAreaView style={{ paddingHorizontal: "2%" }}>
          <Reviews />
        </SafeAreaView>
        <SafeAreaView style={{ paddingHorizontal: "5%", marginTop: "6%" }}>
          <View>
            <Text style={styles.descriptionHeadingText}>
              Share Your Experience
            </Text>
          </View>
          <View>
            <Text style={styles.descriptionText}>
              Please take a moment to share your experience with Ultimates
              Roofing LLC. Your feedback helps us continually improve our
              services and assists future customers in making informed
              decisions. Thank you for being a part of our journey.
            </Text>
          </View>
          <View style={{ marginTop: "10%" }}>
            <ReviewSenderForm />
          </View>
          <Trust />
        </SafeAreaView>
      </ScrollView>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  ScrollbodyBackground: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  descriptionText: {
    fontSize: 16,
    fontWeight: "300",
    lineHeight: 21,
    letterSpacing: 0.28,
    color: "#323539",
    width: "100%",
  },
  descriptionHeadingText: {
    fontSize: 19,
    fontWeight: "400",
    color: "#323539",
    marginBottom: 10,
  },
});

//make this component available to the app
export default ReviewsPage;
