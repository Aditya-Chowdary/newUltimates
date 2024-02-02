import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  SafeAreaView,
  Platform,
  View,
  TouchableNativeFeedback,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
  Alert, // Import Alert from React Native
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import logo from "../assets/UltimatesLogo.png";
import { useNavigation } from "@react-navigation/native";

export default function Header(props) {
  const nav = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [showForm, setShowForm] = useState(false);

  // State for form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setShowForm(false);
  };

  const emailUs = () => {
    // Add your logic for emailing through Gmail
    console.log("Email us through Gmail");
  };

  const requestCall = () => {
    setShowForm(true);
  };

  const submitForm = () => {
    // Validate form fields
    if (!firstName || !lastName || !phoneNumber) {
      Alert.alert("Error", "Please fill in all required fields");
    }
    // closeModal();
  };

  return (
    <SafeAreaView style={styles.view}>
      <View
        style={{ width: "60%", height: "100%", paddingLeft: 20, paddingTop: 9 }}
      >
        <Image style={{ width: "70%", height: "80%" }} source={logo} />
      </View>

      {props.button ? (
        <View style={{ width: "40%", height: "100%", alignItems: "center" }}>
          <View
            style={{
              width: "70%",
              height: "100%",
              paddingTop: 13,
              paddingLeft: "2%",
            }}
          >
            <TouchableNativeFeedback onPress={openModal}>
              <View
                style={{
                  paddingVertical: 10,
                  paddingHorizontal: 3,
                  alignItems: "center",
                  backgroundColor: "#B22335",
                  borderRadius: 3,
                  maxWidth: 650,
                }}
              >
                <Text
                  style={{ fontSize: 10, fontWeight: 400, color: "#F9F9F9" }}
                >
                  Instant Roof Quote
                </Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
      ) : (
        <View
          style={{ width: "40%", height: "100%", alignItems: "center" }}
        ></View>
      )}

      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Instant Roof Quote</Text>
            </View>

            {showForm ? (
              <>
                {/* Form */}
                <TouchableOpacity onPress={closeModal} style={styles.closeIcon}>
                  <MaterialCommunityIcons
                    name="close-circle-outline"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
                <TextInput
                  placeholder="First Name"
                  style={styles.input}
                  value={firstName}
                  onChangeText={(text) => setFirstName(text)}
                />
                <TextInput
                  placeholder="Last Name"
                  style={styles.input}
                  value={lastName}
                  onChangeText={(text) => setLastName(text)}
                />
                <TextInput
                  placeholder="Phone Number"
                  style={styles.input}
                  keyboardType="phone-pad"
                  value={phoneNumber}
                  onChangeText={(text) => setPhoneNumber(text)}
                />

                <TouchableOpacity
                  onPress={submitForm}
                  style={styles.modalButton}
                >
                  <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                {/* Texts */}
                <Text style={styles.modalText}>
                  Please email us with your details
                  <Text style={{ color: "blue" }}>
                    {" "}
                    roofs@ultimatesolutionsit.com
                  </Text>
                </Text>
                <Text>OR</Text>
                <Text style={styles.modalText}>
                  <Text onPress={requestCall} style={{ color: "blue" }}>
                    Request a call back{" "}
                  </Text>
                  for further assistance on accurate quotes.
                </Text>

                <TouchableOpacity onPress={closeModal} style={styles.closeIcon}>
                  <MaterialCommunityIcons
                    name="close-circle-outline"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {
    display: "flex",
    height: 63,
    backgroundColor: "white",
    marginVertical: Platform.OS === "ios" ? 15 : 0,
    flexDirection: "row",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    width: "80%",
  },
  modalButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "crimson",
    color: "white",
    borderRadius: 5,
    textAlign: "center",
  },
  closeIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  input: {
    marginTop: 10,
    padding: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    width: "100%",
  },
  buttonText: {
    color: "white",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  modalText: {
    marginTop: 10,
    fontSize: 16,
    textAlign: "center",
  },
});
