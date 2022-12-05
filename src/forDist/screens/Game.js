import { View, Text, StyleSheet, Image, FlatList } from "react-native";

import React, { useEffect, useState } from "react";

//cards
import { CardsArray } from "../utils/GameRules";

import CustomButton from "../components/customButton/CustomButton";

import PropTypes from "prop-types";
//getStorage
import asyncLocalStorage from "../utils/async-local-storage";
//hook
import { useMediaQuery } from "react-responsive";
import ModalComponent from "../components/customModal/ModalComponent";
import knight from "../assets/knight.png";
// colori
const brandColor = "#232726";
const secondaryColor = "#77523B";
let ws = null;
let user = {};

//mokup
const mokupCards = [
  {
    figure: "NUMBER",
    seed: "DENARI",
    value: "2",
    url: "/static/media/axe2.715940f72c16388e4b63.png",
  },
  {
    figure: "NUMBER",
    seed: "DENARI",
    value: "7",
    url: "/static/media/axe5.3fccba33faecf06375ce.png",
  },
];

const Game = (props) => {
  const [state, setState] = useState({
    match: props.match,
    turn: false,
    endGame: false,
  });

  const isDesktop = useMediaQuery({ minWidth: 992 });

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (state.endGame) {
      const EndMessage = {
        user_id: user.id,
        method: "quitMatch",
      };
      sendMessage(EndMessage);
    }
  }, [state.endGame]);

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
        endGame: obj.ended,
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
    callbackEnd();
  };

  const disconnect = () => {
    ws.close();
  };

  const renderItem = ({ item }) => {
    return (
      <Image
        resizeMode="contain"
        source={item.url}
        style={{ height: isDesktop ? 100 : 50, width: isDesktop ? 100 : 50 }}
      />
    );
  };

  const callbackEnd = () => {
    console.log("torna alla lobby");
    if (!!props.callBackEndGame) {
      props.callBackEndGame();
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.buttonMenagement}>
        {state?.turn && (
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

        <CustomButton
          onClickCallback={quitMatch}
          label={"ESCI"}
          buttonTextStyle={[styles.btText, { color: secondaryColor }]}
          buttonContainerStyle={styles.btStop}
        ></CustomButton>
      </View>
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
            <FlatList
              contentContainerStyle={{
                justifyContent: "center",
                alignItems: "flex-start",
                height: "90%",
                width: "100%",
                marginTop: 10,
              }}
              horizontal={true}
              data={state?.match?.hands[1]?.cards}
              // data={mokupCards}
              renderItem={renderItem}
            />
            <Text
              style={{
                textAlign: "center",
                fontSize: 16,
                margin: 5,
                color: "#FFF",
              }}
            >
              {state?.match?.hands[1]?.cardValue}
            </Text>
          </View>
          <View style={styles.middleCardSection}>
            {/* carte del giocatore a DESTRA */}

            <View
              style={[
                styles.cardUserMiddle,
                {
                  transform: [{ rotate: "90deg" }],
                },
              ]}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  //height: isDesktop ? "100%" : "",
                  height: "100%",
                  marginTop: 40,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 16,
                    margin: 5,
                    color: "#FFF",
                  }}
                >
                  {state?.match?.hands[2]?.cardValue}
                </Text>
                <FlatList
                  contentContainerStyle={{
                    justifyContent: "center",
                    alignItems: "flex-end",
                    height: "90%",
                    width: "100%",
                  }}
                  horizontal={true}
                  //data={mokupCards}
                  data={state?.match?.hands[2]?.cards}
                  renderItem={renderItem}
                />
              </View>
            </View>
            {/* carte del giocatore a SINISTRA */}
            <View
              style={[
                styles.cardUserMiddle,
                { transform: [{ rotate: "-90deg" }] },
              ]}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  //height: isDesktop ? "100%" : "",
                  height: "100%",
                  marginTop: 40,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 16,
                    margin: 5,
                    color: "#FFF",
                  }}
                >
                  {state?.match?.hands[3]?.cardValue}
                </Text>
                <FlatList
                  contentContainerStyle={{
                    justifyContent: "center",
                    alignItems: "flex-end",
                    height: "90%",
                    width: "100%",
                  }}
                  horizontal={true}
                  data={state?.match?.hands[3]?.cards}
                  //data={mokupCards}
                  renderItem={renderItem}
                />
              </View>
            </View>
          </View>
          {/* carte del giocatore IN BASSO */}
          <View style={styles.cardUserTopBottom}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 16,
                margin: 5,
                color: "#FFF",
              }}
            >
              {state?.match?.hands[0]?.cardValue}
            </Text>
            <FlatList
              contentContainerStyle={{
                justifyContent: "center",
                alignItems: "flex-end",
                marginBottom: 10,
                height: "90%",
                width: "100%",
              }}
              horizontal={true}
              data={state?.match?.hands[0]?.cards}
              //data={mokupCards}
              renderItem={renderItem}
            />
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
        <Text style={styles.textUsers}>{state?.match?.users[0]?.username}</Text>
      </View>
      <ModalComponent isOpen={state.endGame}>
        <View
          style={{
            width: "80%",
            height: "80%",
            backgroundColor: brandColor,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Text style={{ color: secondaryColor, fontSize: 18 }}>
            {state.match?.winners?.length > 0
              ? `${state.match?.winners[0]?.username} ha vinto la partita`
              : "Non ha vinto nessuno"}
          </Text>
          <Image
            source={knight}
            style={{ width: 200, height: 200 }}
            resizeMode={"contain"}
          />
          <CustomButton
            onClickCallback={callbackEnd}
            buttonContainerStyle={{
              backgroundColor: secondaryColor,
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius: 5,
            }}
            label={"TORNA ALLA LOBBY"}
            buttonTextStyle={{ color: brandColor, fontWeight: "bold" }}
          />
        </View>
      </ModalComponent>
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
  buttonMenagement: {
    position: "absolute",
    top: "47%",
    left: "30%",
    right: "30%",
    zIndex: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
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
    display: "flex",
    justifyContent: "space-around",
    alignContent: "center",
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
    maxWidth: 300,
    marginVertical: 10,
  },
  btStop: {
    borderRadius: 10,
    backgroundColor: brandColor,
    paddingHorizontal: 20,
    paddingVertical: 10,
    maxWidth: 300,
  },
  btText: {
    fontSize: 16,
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
