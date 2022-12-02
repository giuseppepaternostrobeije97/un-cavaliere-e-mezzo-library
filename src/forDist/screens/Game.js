import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";

//cards
import { CardsArray } from "../utils/GameRules";

import CustomButton from "../components/customButton/CustomButton";

import PropTypes from "prop-types";
//getStorage
import asyncLocalStorage from "../utils/async-local-storage";
import { FlatList } from "react-native-web";

// colori
const brandColor = "#232726";
const secondaryColor = "#77523B";
let ws = null;
let user = {};

const Game = (props) => {
  const [state, setState] = useState({
    match: props.match,
    turn: false,
  });

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    user = await asyncLocalStorage();
    //web socket
    ws = new WebSocket(
      "ws://7emezzo-dev.eba-uwfpyt28.eu-south-1.elasticbeanstalk.com/ws"
    );

    ws.onopen = () => {
      console.log("CONNECTED");
    };

    ws.onmessage = function (event) {
      const obj = JSON.parse(event.data);

      console.log("ONMESSAGE", obj);

      let turn = setUpHands(obj);

      setState({
        ...state,
        match: obj,
        turn: turn,
      });
    };

    setTimeout(() => {
      console.log("PRIMA CARTA");
      requestCard();
    }, 1000);
  }

  function setUpHands(obj) {
    let turn = false;
    let hands = obj.hands;

    for (let i = 0; i < obj.hands.length; i++) {
      //vedere se è il tuo turno
      if (obj.hands[i].user.id === user.id) {
        turn = obj.hands[i].turn;
      }
      //filtrare le carte che ci arrivano con le nostre per avere l'immagine
      let hand = CardsArray.filter((el) => {
        return obj.hands[i].cards.some((f) => {
          return (
            f.figure === el.figure && f.seed === el.seed && f.value === el.value
          );
        });
      });

      hands[i].cards = hand;
    }

    return turn;
  }

  //invio di messaggi in stringhe
  function sendMessage(message) {
    setTimeout(() => {
      ws.send(JSON.stringify(message));
    }, 200);
  }

  //controllo ad ogni azione se la partita è finita
  function checkEndMatch() {
    console.log("check end match...");
    const message = {
      user_id: user.id,
      method: "checkEndMatch",
    };
    sendMessage(message);
  }

  //richiesta di passare e stare bene con le carte
  const stop = () => {
    console.log("STO, PASSO TURNO");
    const message = {
      user_id: user.id,
      method: "stopPlaying",
    };
    sendMessage(message);

    setTimeout(() => {
      checkEndMatch();
    }, 100);
  };

  //richiesta di un' altra carta
  const requestCard = () => {
    console.log("chiedo carta");
    const message = {
      user_id: user.id,
      method: "requestCard",
    };

    sendMessage(message);

    setTimeout(() => {
      checkEndMatch();
    }, 100);
  };

  //utente x esce dalla partita
  const quitMatch = () => {
    const message = {
      user_id: user.id,
      method: "quitMatch",
    };
    sendMessage(message);
    setTimeout(() => {
      checkEndMatch();
      disconnect();
    }, 100);
  };

  const disconnect = () => {
    ws.close();
  };

  const renderItem = ({ item }) => {
    return (
      <Image
        resizeMode="contain"
        source={item.url}
        style={{ width: "100%", height: "100%" }}
      />
    );
  };

  return (
    <View style={styles.container}>
      {/*giocatore in ALTO */}
      <View style={styles.nameUserUp}>
        <Text style={[styles.textUsers, { textAlign: "center" }]}>
          {state?.match?.users[1]?.username}
        </Text>
      </View>

      <View style={styles.gameSection}>
        {/*giocatore a SINISTRA */}
        <View style={styles.nameUserLeft}>
          <Text
            style={[
              styles.textUsers,
              { transform: [{ rotate: "-90deg" }], width: "300%" },
            ]}
          >
            {state?.match?.users[2]?.username}
          </Text>
        </View>
        <View style={styles.tableGame}>
          {/* carte del giocatore in ALTO */}
          <View style={styles.cardUserTopBottom}>
            <Text>{state?.match[1]?.value} </Text>
            <FlatList data={state?.match[1]?.cards} renderItem={renderItem} />
          </View>
          <View style={styles.middleCardSection}>
            {/* carte del giocatore a SINISTRA */}
            <View style={styles.cardUserMiddle}>
              <Text>{state?.match[2]?.value} </Text>
              <FlatList data={state?.match[2]?.cards} renderItem={renderItem} />
            </View>
            {/* carte del giocatore a DESTRA */}
            <View style={styles.cardUserMiddle}>
              <Text>{state?.match[3]?.value} </Text>
              <FlatList data={state?.match[3]?.cards} renderItem={renderItem} />
            </View>
          </View>
          {/* carte del giocatore IN BASSO */}
          <View style={styles.cardUserTopBottom}>
            <Text>{state?.match[0]?.value} </Text>
            <FlatList data={state?.match[0]?.cards} renderItem={renderItem} />
          </View>
        </View>
        {/*giocatore a DESTRA */}
        <View style={styles.nameUserRigth}>
          <Text
            style={[
              styles.textUsers,
              { transform: [{ rotate: "90deg" }], width: "300%" },
            ]}
          >
            {state?.match?.users[3]?.username}
          </Text>
        </View>
      </View>
      <View style={styles.nameUser}>
        {state.turn && (
          <>
            <CustomButton
              onClickCallback={stop}
              label={"STAI"}
              buttonTextStyle={[styles.btText, { color: "#FFF" }]}
              buttonContainerStyle={styles.btStop}
            ></CustomButton>

            <CustomButton
              onClickCallback={requestCard}
              label={"CARTA"}
              buttonTextStyle={[styles.btText, { color: secondaryColor }]}
              buttonContainerStyle={styles.btCard}
            ></CustomButton>
          </>
        )}
        {/*giocatore IN BASSO */}
        <Text style={styles.textUsers}>{state?.match?.users[0]?.username}</Text>
        <CustomButton
          onClickCallback={quitMatch}
          label={"quitMatch"}
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
