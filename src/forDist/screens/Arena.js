import { Text, StyleSheet, View, Image } from "react-native";
import React, { Component, useEffect, useState } from "react";
//components
import CardPlayer from "../components/cardPlayer/CardPlayer";
//image
import shield from "../assets/shield.png";
import CustomButton from "../components/customButton/CustomButton";

import PropTypes from "prop-types";

const brandColor = "#232726";
const secondaryColor = "#77523B";

const Arena = (props) => {
  const [state, setState] = useState({
    lobby: props.lobby,
  });
  const ws = new WebSocket(
    "ws://7emezzo-dev.eba-uwfpyt28.eu-south-1.elasticbeanstalk.com/ws"
  );

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    let lobby = null;
    //web socket
    ws.onopen = () => {
      console.log("CONNECTED");
    };
    ws.onmessage = (event) => {
      const obj = JSON.parse(event.data);
      console.log(obj);
      if (obj.hasOwnProperty("idLobby")) {
        lobby = obj;
        setState({
          ...state,
          lobby: lobby,
        });
      }
    };
    if (lobby != null && ws != null) {
      const message = {
        user_id: lobby[0].users.id,
        method: "connectLobby",
      };
      sendMessage(message);
    }
  }

  //invio di messaggi in stringhe
  function sendMessage(message) {
    setTimeout(() => {
      ws.send(JSON.stringify(message));
    }, 200);
  }

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
    padding: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

Arena.protoType = {
  game: PropTypes.func,
};

export default Arena;
