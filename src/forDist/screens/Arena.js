import { Text, StyleSheet, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
//components
import CardPlayer from "../components/cardPlayer/CardPlayer";
//image
import shield from "../assets/shield.png";
import CustomButton from "../components/customButton/CustomButton";

//getStorage
import asyncLocalStorage from "../utils/async-local-storage";
//api
import { deleteLobbyApi } from "../services/api/lobbyAPI";

import PropTypes from "prop-types";

const brandColor = "#232726";
const secondaryColor = "#77523B";
let ws = null;
let user = {};

const Arena = (props) => {
  const [state, setState] = useState({
    lobby: props.lobby,
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let lobby = props.lobby;
    user = await asyncLocalStorage();
    //web socket
    ws = new WebSocket(
      "ws://7emezzo-dev.eba-uwfpyt28.eu-south-1.elasticbeanstalk.com/ws"
    );

    ws.onopen = () => {
      console.log("CONNECTED");
    };

    ws.onclose = () => {
      console.log("EXIT CONNECTION");
    };

    ws.onmessage = function (event) {
      const obj = JSON.parse(event.data);
      console.log(obj);
      if (obj.hasOwnProperty("idLobby")) {
        let lobby = obj;
        setState({
          ...state,
          lobby: lobby,
        });
      } else {
        console.log("vado a game");
        ws.close();
        props.game(obj);
      }
    };

    ws.onerror = (event) => {
      console.log(event);
    };

    setTimeout(() => {
      if (lobby != null && ws != null) {
        console.log("connectLobby");
        const message = {
          user_id: user.id,
          method: "connectLobby",
        };
        sendMessage(message);
      }
    }, 1000);
  };

  //invio di messaggi in stringhe
  const sendMessage = (message) => {
    setTimeout(() => {
      ws.send(JSON.stringify(message));
    }, 200);
  };

  const exitLobby = async () => {
    const response = await deleteLobbyApi();
    console.log("EXIT LOBBY", response);
    if (response.status === 200) {
      if (response.data.esito) {
        if (state.lobby != null && ws != null) {
          console.log("QUITTO");
          const message = {
            method: "quitLobby",
            idLobby: state.lobby.idLobby,
          };
          console.log("MESSAGE", message);
          sendMessage(message);
        }
        setTimeout(() => {
          ws.close();
        }, 1000);
        props.exitLobby();
      } else {
        console.log("Cannot disconnect");
      }
    }
  };

  const play = () => {
    console.log("play");
    const message = {
      user_id: user.id,
      method: "startMatch",
    };
    sendMessage(message);
    console.log("startMatch");
  };

  return (
    <View style={styles.container}>
      {/* titleSection */}
      <View style={styles.titleContainer}>
      <CustomButton
        onClickCallback={exitLobby}
        buttonContainerStyle={styles.exitButton}
      >
        <Text style={{color:secondaryColor,fontWeight:'bold'}}>Esci</Text>
      </CustomButton>
        <Text style={styles.title}>{`ARENA ${state?.lobby?.idLobby}`}</Text>
        <View style={{ padding: 10 }}>
          <Text style={styles.normalText}>
            Lo scontro potra' partire con un minimo di 2 cavalieri e un massimo
            di 4
          </Text>
        </View>
      </View>
      <View style={styles.containerCard}>
        {!!state?.lobby?.users[0] && (
          <CardPlayer playerName={state?.lobby?.users[0].username} />
        )}
        {!!state?.lobby?.users[1] && (
          <CardPlayer playerName={state?.lobby?.users[1].username} />
        )}
      </View>

      <CustomButton
        onClickCallback={play}
        buttonContainerStyle={styles.btImage}
      >
        <Image resizeMode={"contain"} style={styles.image} source={shield} />
      </CustomButton>

      <View style={styles.containerCard}>
        {!!state?.lobby?.users[2] && (
          <CardPlayer playerName={state?.lobby?.users[2].username} />
        )}
        {!!state?.lobby?.users[3] && (
          <CardPlayer playerName={state?.lobby?.users[3].username} />
        )}
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
    position:'relative',
    backgroundColor: secondaryColor,
    width: "100%",
    height: "10%",
    zIndex: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  exitButton:{
    position:'absolute',
    zIndex:10,
    left:'2%',
    backgroundColor:brandColor,
    paddingHorizontal:20,
    paddingVertical:10,
    borderRadius:5
  },
  title: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
  },
  normalText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 12,
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
