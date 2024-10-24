import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { useCopilot } from "react-native-copilot";

export const Tooltip = () => {

  const {
    isFirstStep,
    isLastStep,
    goToNext,
    goToNth,
    goToPrev,
    stop,
    currentStep,
  } = useCopilot()

  return (
    <View>
      <Text style={styles.tooltipText}>{currentStep.text}</Text>

      <View style={styles.buttonContainer}>
        {!isFirstStep && (
          <TouchableOpacity onPress={goToPrev}>
            <Text style={styles.buttonText}>Previous</Text>
          </TouchableOpacity>
        )}

        {!isLastStep && (
          <TouchableOpacity onPress={goToNext}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        )}

        {isLastStep && (
          <TouchableOpacity onPress={stop}>
            <Text style={styles.buttonText}>Finish</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tooltipText: {
    fontSize: 20,
    marginTop: -10,
    marginBottom: 10,
    textAlign: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 200
  },
  buttonText: {
    color: "green",
    fontSize: 16,
    width: 72,
    textAlign: "center",
    marginBottom: 10
  },
});