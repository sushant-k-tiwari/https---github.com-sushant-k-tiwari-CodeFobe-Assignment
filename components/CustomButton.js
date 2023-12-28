import { View, Text, Pressable, StyleSheet } from "react-native";

// A custom button using Pressable
function CustomButton({ children, onPress }) { //object destructuring
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: "#72063c" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default CustomButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#FF6B00",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 4,
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },

  pressed: {
    opacity: 0.75,
  },
});
