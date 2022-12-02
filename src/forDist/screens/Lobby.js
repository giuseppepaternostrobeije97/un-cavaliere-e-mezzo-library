// react native
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import PropTypes from "prop-types";
// react
import React, { useEffect, useRef, useState } from "react";
// media
import BG from "../assets/bg.png";
import CASTLE from "../assets/castle.png";
import trophy from "../assets/trophy.png";
import rankList from "../assets/rank-list.png";

// import
import ModalComponent from "../components/customModal/ModalComponent";
import CustomButton from "../components/customButton/CustomButton";
//api
import { getUserApi } from "../services/api/userApi";
import { createLobby, putLobby } from "../services/api/lobbyAPI";
//getStorage
import asyncLocalStorage from "../utils/async-local-storage";
// colori
const brandColor = "#232726";
const secondaryColor = "#77523B";

const Lobby = (props) => {
  const [state, setState] = useState({
    areanasModalList: false,
    createArenasModal: false,
    user: {
      name: "",
      score: 0,
    },
    idLobby: -1,
  });

  const inputRef = useRef(null);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const user = await asyncLocalStorage();
    const response = await getUserApi(user.id);

    console.log("USER", response);
    if (response.status === 200) {
      setState({
        ...state,
        user: {
          name: response.data.username,
          score: response.data.score,
        },
      });
    }
  };

  const menageModalNew = () => {
    setState({
      ...state,
      createArenasModal: !state.createArenasModal,
    });
  };

  async function searhArena() {
    // const idLobby = inputRef.current.value;
    const idLobby = state.idLobby;
    const response = await putLobby(idLobby);
    if (response.status === 200) {
      let lobby = response.data;
      props.goLobby(lobby);
    } else {
      console.error("SEARCH LOBBY", response);
    }
  }

  async function createArena() {
    const response = await createLobby();
    if (response.status === 200) {
      let lobby = response.data;
      props.goLobby(lobby);
    } else {
      console.error("CREATE ARENA", response);
    }
  }
  function handleIdLobby(idLobby) {
    setState({
      ...state,
      idLobby: idLobby,
    });
  }

  const callbackRanking = () => {
    if (!!props.callbackRankingNav) {
      props.callbackRankingNav();
    }
  }

  return (
    <View style={styles.container}>
      {/* bgImage */}
      <ImageBackground
        source={BG}
        resizeMode={"cover"}
        style={styles.bgImage}
      />
      {/* titleSection */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>ARENE</Text>
      </View>
      {/* userSection */}
      <View className="userSection" style={styles.userSection}>
        <View style={styles.userName}>
          <Text style={styles.normalText}>{state?.user.name}</Text>
        </View>
        <View style={styles.score}>
          {/* <Text style={styles.normalText}>SCORE</Text> */}
          <Image
            source={trophy}
            resizeMode={"contain"}
            style={{
              height: "50%",
              width: "100%",
              zIndex: 3,
              marginVertical: 5,
            }}
          />
          <View style={styles.uiLine}></View>
          <Text style={styles.normalText}>{state?.user.score}</Text>
        </View>
        <TouchableOpacity onPress={callbackRanking} style={styles.ranking}>
          <Image
            source={rankList}
            resizeMode={"contain"}
            style={{
              height: "80%",
              width: "80%",
              zIndex: 3,
              marginVertical: 5,
            }}
          />
        </TouchableOpacity>
      </View>
      {/* arenaListSection */}
      <View style={styles.searchArenaContainer}>
        <TextInput
          onChangeText={handleIdLobby}
          ref={inputRef}
          style={styles.InputCss}
          placeholderTextColor={"white"}
          placeholder={"Numero arena"}
        />
        <TouchableOpacity onPress={searhArena} style={styles.searcArenasBtn}>
          <Text style={styles.sectionTitleSearch}>CERCA ARENA</Text>
        </TouchableOpacity>
      </View>
      {/* create new arena */}
      <TouchableOpacity
        onPress={createArena}
        style={styles.arenasListConainter}
      >
        <View style={styles.arenasList}>
          <Text style={styles.sectionTitle}>CREA ARENA</Text>
        </View>
      </TouchableOpacity>
      {/* image castle */}
      <Image source={CASTLE} resizeMode={"cover"} style={styles.imageCastle} />
      {/* modale crea nuova arena */}
      <ModalComponent isOpen={state.createArenasModal}>
        <View style={styles.modalList}>
          <Text style={styles.titleModal}>CREA ARENA</Text>
          <CustomButton
            onClickCallback={menageModalNew}
            label={"CHIUDI"}
            buttonContainerStyle={styles.buttonCSModal}
            buttonTextStyle={styles.buttonTSModal}
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
    alignItems: "center",
  },
  bgImage: {
    height: "100%",
    width: "100%",
    position: "absolute",
    zIndex: 1,
  },
  InputCss: {
    width: "48%",
    height: "100%",
    backgroundColor: secondaryColor,
    padding: 20,
    fontSize: 25,
    borderRadius: 5,
    color: "#fff",
  },
  titleContainer: {
    width: "100%",
    height: "10%",
    zIndex: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    color: "#fff",
    fontWeight: "bold",
  },
  imageCastle: {
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: 4,
    width: "100%",
    maxWidth: 700,
    height: "40%",
    shadowColor: brandColor,
    shadowRadius: 10,
    shadowOffset: {
      height: 5,
      width: 5,
    },
  },
  userSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "20%",
    width: "100%",
    zIndex: 3,
    padding: 20,
    maxWidth: 800,
  },
  userName: {
    position: "relative",
    width: "60%",
    height: "100%",
    backgroundColor: secondaryColor,
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  score: {
    width: "20%",
    height: "100%",
    backgroundColor: secondaryColor,
    borderRadius: 5,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  ranking: {
    width: "15%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    borderRadius: 5,
    alignItems: "center",
    backgroundColor: secondaryColor,
  },
  arenasListConainter: {
    height: "20%",
    zIndex: 3,
    padding: 20,
    width: "100%",
    maxWidth: 800,
  },
  searchArenaContainer: {
    height: "20%",
    zIndex: 3,
    padding: 20,
    width: "100%",
    maxWidth: 800,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  arenasList: {
    backgroundColor: secondaryColor,
    height: "100%",
    width: "100%",
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  normalText: {
    color: "#fff",
    fontSize: 20,
    textTransform: "uppercase",
    zIndex: 5,
  },
  uiLine: {
    backgroundColor: brandColor,
    height: 8,
    width: "100%",
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  sectionTitleSearch: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalList: {
    width: "80%",
    height: "80%",
    backgroundColor: brandColor,
    borderRadius: 5,
  },
  titleModal: {
    fontSize: 20,
    textAlign: "center",
    color: secondaryColor,
    fontWeight: "bold",
    marginVertical: 10,
  },
  searcArenasBtn: {
    width: "48%",
    height: "100%",
    backgroundColor: secondaryColor,
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonCSModal: {
    padding: 10,
    display: "flex",
    justifyContent: "center",
    margin: "auto",
  },
  buttonTSModal: {
    color: secondaryColor,
    fontWeight: "bold",
    fontSize: 18,
  },
});

Lobby.protoType = {
  goLobby: PropTypes.func,
};

export default Lobby;
