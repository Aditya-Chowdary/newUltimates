import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Linking,
  TouchableOpacity,
} from "react-native";

import Icon from "@expo/vector-icons/Ionicons";

import FormContact from "../Components/FormContact";
import Header from "../Screens/Header";
import BackNavigation from "../Components/BackNavigation";
import AssistButton from "../Components/AssistButton";

const ContactCard = ({ icon, title, subtitle, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.ContactBox}>
      <View style={styles.textContainer}>
        <Icon name={icon} size={24} color="white" />
      </View>
      <View style={styles.iconContainer}>
        <Text style={styles.ContactBoxTitle}>{title}</Text>
        {subtitle && <Text style={styles.ContactBoxTitle}>{subtitle}</Text>}
      </View>
    </View>
  </TouchableOpacity>
);
const handleCardClick = () => {
  const phoneUrl = `tel:${"614-602-7980"}`;
  Linking.openURL(phoneUrl).catch((err) =>
    console.error("Error opening dial pad:", err)
  );
};

const ContactPage = () => {
  return (
    <SafeAreaView>
      <Header button={true} />
      <AssistButton />
      <ScrollView>
        <BackNavigation title={"Contact Us"} />
        <View style={styles.contactContainer}>
          <ContactCard
            icon="call-outline"
            title="614-602-7980"
            onPress={handleCardClick}
          />
          <ContactCard
            icon="mail-outline"
            title="admin - hrroofs@ultimatesolutionsit.com"
            subtitle="sales - roofs@ultimatesolutionsit.com"
          />
          <ContactCard
            icon="location"
            title="Ultimates Roofing LLC,"
            subtitle="Columbus, Ohio"
          />
        </View>

        <View style={{ alignItems: "center" }}>
          <Text
            style={{ fontSize: 16, fontWeight: "500", letterSpacing: 0.32 }}
          >
            Business Hours:
          </Text>
          <Text
            style={{ fontSize: 14, fontWeight: "400", letterSpacing: 0.28 }}
          >
            Monday to Friday - 9:00 AM to 5:00 PM
          </Text>
        </View>

        <View>
          <FormContact />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contactContainer: {
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: "5%",
    paddingHorizontal: "5%",
  },
  ContactBox: {
    flexDirection: "row",
    width: "100%",
    height: 80,
    backgroundColor: "#3D3B6D",
    borderRadius: 4,
    alignItems: "center",
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  iconContainer: {
    width: "100",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "space-around",
  },
  ContactBoxTitle: {
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 0.28,
    color: "#F9F9F9",
  },
  formContainer: {
    paddingHorizontal: "5%",
  },
});

export default ContactPage;
