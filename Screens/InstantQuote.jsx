import React from "react";
import { SafeAreaView } from "react-native";

import Header from "./Header";
import BackNavigation from "../Components/BackNavigation";
import AssistButton from "../Components/AssistButton";

export default function InstantQuote() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <BackNavigation title={"InstantRoofQuote"} />
      <AssistButton />
    </SafeAreaView>
  );
}
