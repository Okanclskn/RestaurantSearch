import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgraoundStyle}>
      <Feather name="search" size={30} style={styles.searchicon}></Feather>
      <TextInput
        maxLength={20}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search.."
        style={styles.inputStyle}
        value={term}
        onChangeText={(term) => onTermChange(term)}
        onEndEditing={() => onTermSubmit()}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  backgraoundStyle: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 10,
    flexDirection: "row",
  },
  searchicon: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
});

export default SearchBar;
