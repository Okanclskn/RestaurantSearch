import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

const ResultDetails = ({ result }) => {
  console.log(result);
  return (
    <View style={stylees.container}>
      <Image style={stylees.image} source={{ uri: result.image_url }}></Image>
      <Text>{result.name}</Text>
      <Text>
        {result.rating} Starts, {result.review_count}
      </Text>
    </View>
  );
};

const stylees = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginBottom: 10,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
  },
  name: {
    fontWeight: "bold",
  },
});

export default ResultDetails;
