import React from "react";
import { Text, StyleSheet, View } from "react-native";

// A CustomText component used for all the field texts that are used
function CustomText({ children, fieldName }) { //object destructuring
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.fieldText}>{fieldName} </Text>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: 'column', 
    alignItems: 'flex-start', 
    marginBottom: 10,
  },
  text: {
    borderRadius: 24,
    borderWidth: 1,
    padding: 14,
    fontSize: 16,
    width: 300, 
    height: 50, 
    backgroundColor: '#f0f0f0', 
    color: '#333', 
  },
  fieldText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CustomText;
