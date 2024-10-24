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

  console.log("CurrentStep>>", currentStep);
  
  

  return (
    <View style={styles.tooltipContainer}>
      <Text style={styles.tooltipText}>{currentStep.text}</Text>

      <View style={styles.buttonContainer}>
        {!isFirstStep && (
          <TouchableOpacity onPress={goToPrev} style={styles.button}>
            <Text style={styles.buttonText}>Previous</Text>
          </TouchableOpacity>
        )}

        {!isLastStep && (
          <TouchableOpacity onPress={goToNext} style={styles.button}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        )}

        {isLastStep && (
          <TouchableOpacity onPress={stop} style={styles.button}>
            <Text style={styles.buttonText}>Finish</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tooltipContainer: {
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 16,
  },
  title: {
    color: "green",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  tooltipText: {
    fontSize: 20,
    marginBottom: 12,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 200
  },
  button: {
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "green",
    fontSize: 16,
  },
});