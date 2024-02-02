import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Modal,
  TextInput,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function AssistButton() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [showContainer, setShowContainer] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isMessageForm, setIsMessageForm] = useState(false);

  const handleButtonPress = () => {
    setShowForm(false);
    setShowContainer(true);
  };

  const submitForm = () => {
    // Validate form fields
    if (!firstName || !lastName || !phoneNumber) {
      Alert.alert("Error", "Please fill in all required fields");
    } else {
      closeModal();
    }
  };

  const submitMessageForm = () => {
    // Validate message field
    if (!message) {
      Alert.alert("Error", "Please enter a message");
    } else {
      closeModal();
    }
  };

  const closeModal = () => {
    setShowForm(false);
    setShowContainer(false);
    setIsMessageForm(false);
  };

  return (
    <View style={styles.container}>
      <Modal visible={showContainer} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <MaterialCommunityIcons name="close-circle-outline" size={24} color="black" />
            </TouchableOpacity>
            {showForm ? (
              <>
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
            ) : isMessageForm ? (
              <>
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
                <TextInput
                  placeholder="Please enter your message"
                  style={styles.input}
                  multiline
                  value={message}
                  onChangeText={(text) => setMessage(text)}
                />
                <TouchableOpacity
                  onPress={submitMessageForm}
                  style={styles.modalButton}
                >
                  <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
              </>
            ) : (
              <View style={{ gap: 10 }}>
                {/* Texts */}
                <Text
                  style={{ color: "black" }}
                  onPress={() => {
                    setShowForm(true);
                    setIsMessageForm(false);
                  }}
                >
                  Request a call back
                </Text>
                <Text
                  style={{ color: "black" }}
                  onPress={() => {
                    setShowForm(false);
                    setIsMessageForm(true);
                  }}
                >
                  Leave a message
                </Text>
              </View>
            )}
          </View>
        </View>
      </Modal>

      <TouchableOpacity onPress={handleButtonPress} style={styles.button}>
        <Text style={styles.buttonText}>
          <MaterialCommunityIcons
            name="google-assistant"
            size={24}
            color="white"
          />
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: "60%",
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    zIndex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Set the background color to white
    height: windowHeight * 0.5, // Set the height to 50% of the screen height
  },
  button: {
    padding: 10,
    backgroundColor: "crimson",
    borderRadius: 55,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  buttonText: {
    color: "white",
  },
  closeButton: {
    position: "absolute",
    top: 5,
    right: 5,
    zIndex: 3,
  },
  input: {
    marginTop: 10,
    padding: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    width: "80%", // Adjust the width as needed
    backgroundColor: "white",
  },
  modalButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "crimson",
    color: "white",
    borderRadius: 5,
    textAlign: "center",
  },
  modalContent: {
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    width: "80%",
  },
});
