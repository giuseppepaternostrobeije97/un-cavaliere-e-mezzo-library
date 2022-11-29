import { Text, StyleSheet, View, Image } from "react-native";
import React, { Component } from "react";
//components
import CardPlayer from "../components/cardPlayer/CardPlayer";
//image
import shield from "../assets/shield.png";
import CustomButton from "../components/customButton/CustomButton";

import PropTypes from "prop-types";

const brandColor = "#232726";
const secondaryColor = "#77523B";

const Arena = (props) => {
  //web socket
  const ws = new WebSocket(
    "wss://socketsbay.com/wss/v2/1/7f110bf7a02974b4295c97425c7827ee/"
  );
  ws.onopen = (event) => {
    console.log("Connessione");
  };
  ws.onmessage = function (event) {
    console.log(event);
  };

  const play = () => {
    ws.send("play");
    console.log("play");
    props.game();
  };

  return (
    <View style={styles.container}>
      {/* titleSection */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>ARENA</Text>
        <View style={{ padding: 10 }}>
          <Text style={styles.normalText}>
            Lo scontro potra' partire con un minimo di 2 cavalieri e un massimo
            di 4
          </Text>
        </View>
      </View>
      <View style={styles.containerCard}>
        <CardPlayer />
        <CardPlayer />
      </View>

      <CustomButton
        onClickCallback={play}
        buttonContainerStyle={styles.btImage}
      >
        <Image resizeMode={"contain"} style={styles.image} source={shield} />
      </CustomButton>

      <View style={styles.containerCard}>
        <CardPlayer />
        <CardPlayer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: brandColor,
  },
  titleContainer: {
    backgroundColor: secondaryColor,
    width: "100%",
    height: "10%",
    zIndex: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
  },
  normalText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 15,
    textTransform: "uppercase",
  },
  btImage: {
    width: "100%",
    height: "45%",
  },
  image: {
    width: "100%",
    height: "100%",
    shadowColor: brandColor,
    shadowRadius: 10,
    shadowOffset: {
      height: 5,
      width: 5,
    },
  },
  containerCard: {
    height: "20%",
    margin: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

Arena.protoType = {
  game: PropTypes.func,
};

export default Arena;
