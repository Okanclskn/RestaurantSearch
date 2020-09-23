import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../Components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../Components/ResultList";

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultByPrice = (price) => {
    return results.filter((results) => {
      return results.price === price;
    });
  };
  //console.log(results);
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      ></SearchBar>
      {errorMessage ? <Text>{errorMessage}</Text> : null}

      {
        //<Text>We have found {results.length} results</Text>}
      }
      <ScrollView>
        <ResultList
          navigation={navigation}
          results={filterResultByPrice("$")}
          title="Cost Effective"
        ></ResultList>
        <ResultList
          navigation={navigation}
          results={filterResultByPrice("$$")}
          title="Bit Pricer"
        ></ResultList>
        <ResultList
          navigation={navigation}
          results={filterResultByPrice("$$$")}
          title="Big Spender"
        ></ResultList>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
