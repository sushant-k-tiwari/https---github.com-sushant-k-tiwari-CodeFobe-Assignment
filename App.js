import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import CustomText from "./components/CustomText";
import CustomButton from "./components/CustomButton";


export default function App() {
  const [userData, setUserData] = useState([]); //userData array will hold the fetched userData
  const [currentIndex, setCurrentIndex] = useState(0); //cuurentIndex is a number that keeps track of currentUSer

  useEffect(() => {
    fetch("https://random-data-api.com/api/users/random_user?size=80") // Setting the limit to 80 users
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error(error));
  }, []);

  function handleNext(){ //the function increments the currentIndex to show nextUser
    if (currentIndex < userData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  function handlePrevious() { //function to visit previous user with a conditional to stop invalid steps
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }

  return (
      <ImageBackground //setting a background image for the app screen
      source={require('./assets/images/codeFobe.png')}
      resizeMode="cover"
      style={styles.backgroundContainer}
      imageStyle={styles.background}>
    <View style={styles.container}>
      {userData.length > 0 && ( //validating whether the userData is empty or not and if not empty the details are displayed
        <View>
          <View style={styles.avatarContainer}> {/*setting the avatar container to style it*/}
            <Image
              source={{ uri: userData[currentIndex].avatar }}
              style={styles.avatar}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.nameText}>
            {userData[currentIndex].first_name}{" "}
            {userData[currentIndex].last_name}
          </Text>
          <CustomText fieldName="ID">{userData[currentIndex].id}</CustomText> {/*CustomText componet is used for modularity*/}
          <CustomText fieldName="UID">{userData[currentIndex].uid}</CustomText>
          <CustomText fieldName="Password">
            {userData[currentIndex].password}
          </CustomText>
          <CustomText fieldName="First Name">
            {userData[currentIndex].first_name}
          </CustomText>
          <CustomText fieldName="Last Name">
            {userData[currentIndex].last_name}
          </CustomText>
          <CustomText fieldName="Username">
            {userData[currentIndex].username}
          </CustomText>
          <CustomText fieldName="Email">
            {userData[currentIndex].email}
          </CustomText>
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <CustomButton title="Previous" onPress={handlePrevious}>{/*A custom button is created using Pressable*/}
                <MaterialCommunityIcons
                  name="page-previous-outline"
                  size={24}
                  color="white"
                />
              </CustomButton>
            </View>
            <View style={styles.buttonContainer}>
              <CustomButton title="Next" onPress={handleNext}>
                <MaterialCommunityIcons
                  name="page-next-outline"
                  size={24}
                  color="white"
                />
              </CustomButton>
            </View>
          </View>
        </View>
      )}
    </View>
    </ImageBackground>
  );
}

//styling the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    padding: 4,
  },

  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  nameText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  avatar: {
    width: "100%",
    height: "100%",
  },
  avatarContainer: {
    marginTop: 50,
    marginHorizontal: 120,
    borderWidth: 2,
    borderRadius: 50,
    height: 100,
    width: 100,
    overflow: "hidden",
  },
  backgroundContainer:{
    flex: 1,
  },
  background:{
    opacity: 0.5,
  },
}); 
