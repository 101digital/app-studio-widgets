import React, { useState } from "react";
import { View, StyleSheet, Platform } from "react-native";

const ASOverlay: React.FC<{}> = () => {
  // Apply hover effect with border color change
  return <View style={styles.overlay} />;
};

// Styles for the Overlay component
const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "transparent", // Fully transparent overlay
    borderWidth: 2, // Add a border to track hover effect
    borderColor: "transparent", // Default transparent border
    zIndex: 1, // Ensure it sits on top
  },
});

export default ASOverlay;
