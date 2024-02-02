import React, { useState } from "react";
import { ScrollView, TouchableOpacity, Alert } from "react-native";
import { View, Text, TextInput, Button, StyleSheet, Image } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import Icon from "@expo/vector-icons/Ionicons";
import * as ImagePicker from "expo-image-picker";
import ImageUploadIcon from "../assets/ImageUploadIcon.png";

export default function FormContact() {
  const data = [
    { label: "Residential Roofing", value: "ResidentialRoofing" },
    { label: "Commercial Roofing", value: "CommercialRoofing" },
    { label: "Siding", value: "Siding" },
    { label: "Gutters", value: "Gutters" },
    { label: "Windows", value: "Windows" },
    { label: "Others", value: "Others" },
  ];
  const [selectedImages, setSelectedImages] = useState(0);
  const [value, setValue] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    gmail: "",
    phoneNumber: "",
    service: "",
    city: "",
    zip: "",
    state: "",
    message: "",
    images: [],
  });

  const handleInputChange = (field, value) => {
    // Check if the field is the dropdown and update the formData accordingly
    if (field === "service") {
      setFormData({ ...formData, [field]: value });
    } else {
      setFormData({ ...formData, [field]: value });
    }
  };

  const handleSubmit = () => {
    console.log(formData);
    const isFormIncomplete = Object.values(formData).some(
      (value) => value === ""
    );

    if (isFormIncomplete) {
      // Show alert if any required field is empty
      Alert.alert("Error", "Please fill all required fields");
    } else {
      // Show alert if all required fields are filled
      Alert.alert("Success", "Form submitted successfully");
    }

    // You can perform other actions like sending the form data to a server here
  };

  const selectImages = async () => {
    try {
      const images = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsMultipleSelection: true,
      });

      // Extract image URIs from the selected images
      const selectedImageURIs = images.assets.map((image) => image.uri);

      setFormData({
        ...formData,
        images: [...formData.images, ...selectedImageURIs], // Concatenate the new images to the existing array
      });

      setSelectedImages(selectedImageURIs.length);
    } catch (e) {
      setSelectedImages(0);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={styles.fomeHead}>Reach Out to Us</Text>
        </View>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={[styles.formLable, { width: "48%", marginRight: "4%" }]}
            >
              First Name *
            </Text>
            <Text style={styles.formLable}>Last Name*</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TextInput
              style={[styles.input, { width: "48%", marginRight: "4%" }]}
              onChangeText={(text) => handleInputChange("firstName", text)}
              // passwordRules={true}
              secureTextEntry
            />
            <TextInput
              style={[styles.input, { width: "48%" }]}
              onChangeText={(text) => handleInputChange("lastName", text)}
            />
          </View>
        </View>

        <Text style={styles.formLable}>E-mail*</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleInputChange("gmail", text)}
        />

        <Text style={styles.formLable}>Phone Number*</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleInputChange("phoneNumber", text)}
          keyboardType="phone-pad"
        />

        <Text style={styles.formLable}>Choose a Service *</Text>
        <Dropdown
          style={[styles.dropdown, {}]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="  Select a service"
          value={formData.service} // Use formData.service directly as the value
          onChange={(item) => {
            handleInputChange("service", item.value); // Update the service field in form data
          }}
        />

        <Text style={styles.formLable}>Address *</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleInputChange("address", text)}
        />
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={[styles.formLable, { width: "48%", marginRight: "4%" }]}
            >
              City *
            </Text>
            <Text style={styles.formLable}>State *</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TextInput
              style={[styles.input, { width: "48%", marginRight: "4%" }]}
              onChangeText={(text) => handleInputChange("city", text)}
            />
            <TextInput
              style={[styles.input, { width: "48%", marginRight: "4%" }]}
              onChangeText={(text) => handleInputChange("state", text)}
            />
          </View>
        </View>
        <Text style={styles.formLable}>Zip *</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleInputChange("zip", text)}
          keyboardType="numeric"
        />

        <Text style={styles.formLable}>Message</Text>
        <TextInput
          style={[styles.textArea, { height: 88 }]}
          multiline
          numberOfLines={4}
          onChangeText={(text) => handleInputChange("message", text)}
          placeholder="Please share detailed information about your project to help us understand better."
        />
        <View style={{ width: "100%" }}>
          <View>
            <TouchableOpacity style={{}} onPress={selectImages}>
              <View style={{ flexDirection: "row" }}>
                <View style={{ alignContent: "center" }}>
                  <Image
                    style={{ width: 27, height: 27 }}
                    source={ImageUploadIcon}
                  />
                </View>
                <View style={{ alignContent: "center" }}>
                  <Text
                    style={{ marginLeft: 10, fontSize: 14, fontWeight: 400 }}
                  >
                    Attach Photos
                  </Text>
                  <Text style={{ marginLeft: 10 }}>
                    {selectedImages <= 4 && selectedImages != 0 ? (
                      <Text style={{ color: "green", fontWeight: "400" }}>
                        ( {selectedImages} photos selected)
                      </Text>
                    ) : (
                      <Text style={{ color: "#B22335" }}>
                        <Icon
                          name="alert-circle-outline"
                          color={"#B22335"}
                          size={13}
                        />{" "}
                        {selectedImages == 0
                          ? "Please Select Photos"
                          : "Please select less than 5 photos, You have selected " +
                            selectedImages +
                            " photos"}
                      </Text>
                    )}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
            <Text style={{ color: "#F9F9F9", fontSize: 14, fontWeight: "400" }}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ marginBottom: 50 }}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 30,
    padding: 5,
    borderRadius: 2,
  },
  dropdown: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 30,
    padding: 6,
    paddingBottom: 14,
    paddingTop: 12,
    paddingLeft: 10,
  },
  placeholderStyle: {
    fontSize: 14,
  },
  selectedTextStyle: {
    fontSize: 16,
  },

  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  fomeHead: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 30,
    marginTop: 19,
    color: "#181818",
  },
  formLable: {
    fontSize: 12,
    fontWeight: "400",
    marginBottom: 5,
    color: "#181818",
  },
  submitButton: {
    backgroundColor: "#B22335",
    width: 175,
    paddingHorizontal: 24,
    paddingTop: 10,
    paddingBottom: 13,
    alignItems: "center",
    // marginBottom: 50,
    marginTop: 10,
  },
  Contactbox: {
    width: "48%",
    height: 103,
    backgroundColor: "#F5CCD1",
    borderRadius: 4,
    padding: 20,
    paddingVertical: 20,
  },
  ContactboxTitle: {
    fontSize: 18,
    fontWeight: "500",
    letterSpacing: 0.36,
    // marginBottom: 15
    lineHeight: 50,
  },
  ContactboxText: {
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 0.28,
    color: "#323539",
  },
  textArea: {
    width: "100%",
    height: 150,
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    borderRadius: 3,
    textAlignVertical: "top",
    marginBottom: 15,
  },
});
