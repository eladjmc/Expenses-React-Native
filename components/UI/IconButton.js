import React from "react";
import { View, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ icon, color, size, onPress }) => {
  return (
    <Pressable onPress={onPress} style={({pressed})=>pressed ? styles.pressed: null}>
      <View style={styles.buttonContainer}> 
        <Ionicons color={color} size={size} name={icon} />
      </View>
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius:24,
        padding:6,
        marginHorizontal:8,
        marginVertical:2,
    },
    pressed: {
        opacity:0.75,
    }
});
