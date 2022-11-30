import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import cards from "../assets/CARTE-NAPOLETANE.png";

import CustomButton from "../components/customButton/CustomButton";

import PropTypes from "prop-types";
//getStorage
import asyncLocalStorage from "../utils/async-local-storage";

// colori
const brandColor = "#232726";
const secondaryColor = "#77523B";

const Game = () => {
  const [state, setState] = useState({
    user: {
      id: null,
    },
  });
  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    const user = await asyncLocalStorage();

    setState({
      ...state,
      id: user.id,
    });
  }
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

  const stop = () => {
    ws.send("stop");

    console.log("stop");
  };

  const card = () => {
    ws.send("card");

    console.log("card");
  };

  return (
    <View style={styles.container}>
      <View style={styles.nameUserUp}>
        <Text style={[styles.textUsers, { textAlign: "center" }]}>
          Utente UP
        </Text>
      </View>
      <View style={styles.gameSection}>
        <View style={styles.nameUserLeft}>
          <Text
            style={[
              styles.textUsers,
              { transform: [{ rotate: "-90deg" }], width: "300%" },
            ]}
          >
            Utente LEFT
          </Text>
        </View>
        <View style={styles.tableGame}>
          <View style={styles.cardUserTopBottom}>
            <Image style={styles.imgeGame} source={cards} />
          </View>
          <View style={styles.middleCardSection}>
            <View style={styles.cardUserMiddle}></View>
            <View style={styles.cardUserMiddle}></View>
          </View>
          <View style={styles.cardUserTopBottom}></View>
        </View>
        <View style={styles.nameUserRigth}>
          <Text
            style={[
              styles.textUsers,
              { transform: [{ rotate: "90deg" }], width: "300%" },
            ]}
          >
            Utente RIGTH
          </Text>
        </View>
      </View>
      <View style={styles.nameUser}>
        <CustomButton
          onClickCallback={stop}
          label={"STAI"}
          buttonTextStyle={[styles.btText, { color: "#FFF" }]}
          buttonContainerStyle={styles.btStop}
        ></CustomButton>
        <Text style={styles.textUsers}>Utente</Text>
        <CustomButton
          onClickCallback={card}
          label={"CARTA"}
          buttonTextStyle={[styles.btText, { color: secondaryColor }]}
          buttonContainerStyle={styles.btCard}
        ></CustomButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    backgroundColor: brandColor,
  },
  nameUserUp: {
    height: "10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  nameUserLeft: {
    height: "100%",
    width: "10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  nameUserRigth: {
    height: "100%",
    width: "10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  tableGame: {
    height: "100%",
    width: "80%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: secondaryColor,
    borderRadius: 15,
  },
  cardUserTopBottom: {
    height: "30%",
    width: "100%",
  },
  middleCardSection: {
    height: "40%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  cardUserMiddle: {
    height: "100%",
    width: "50%",
  },
  gameSection: {
    height: "80%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  nameUser: {
    height: "10%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
  btCard: {
    backgroundColor: "#FFF",
    borderColor: secondaryColor,
    borderRadius: 10,
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  btStop: {
    borderRadius: 10,
    backgroundColor: secondaryColor,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  btText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  textUsers: {
    textAlign: "center",
    color: "#FFF",
    textTransform: "uppercase",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Game;
