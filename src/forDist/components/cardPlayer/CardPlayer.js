import { View, Text, Image, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";

import knight0 from "../../assets/knight.png";
import knight1 from "../../assets/knight2.png";
import knight2 from "../../assets/knight3.png";
import knight3 from "../../assets/knight5.png";
import knight4 from "../../assets/knight6.png";
import knight5 from "../../assets/knight7.png";
import knight6 from "../../assets/knight8.png";

const brandColor = "#232726";
const secondaryColor = "#77523B";

const CardPlayer = (props) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    let allImage = [
      knight0,
      knight1,
      knight2,
      knight3,
      knight4,
      knight5,
      knight6,
    ];
    let imageRandom = allImage[Math.floor(Math.random() * 7)];
    console.log(imageRandom);

    setState(imageRandom);
  }, []);

  return (
    <View style={styles.continer}>
      <Text style={styles.text}>{props.playerName}</Text>
      <Image resizeMode={"contain"} style={styles.image} source={state} />
    </View>
  );
};

const styles = StyleSheet.create({
  continer: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    position: "relative",
    width: "35%",
  },
  image: {
    zIndex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
    shadowColor: brandColor,
    shadowRadius: 10,
    shadowOffset: {
      height: 5,
      width: 5,
    },
  },
  text: {
    fontSize: 20,
    backgroundColor: secondaryColor,
    padding: 10,
    textAlign: "center",
    zIndex: 2,
  },
});

export default CardPlayer;
