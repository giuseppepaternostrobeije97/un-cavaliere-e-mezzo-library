// react native
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import PropTypes from "prop-types";
// react
import React, { useEffect, useState } from "react";
// media
import BG from "../assets/bg.png";
import CASTLE from "../assets/castle.png";
// import
import ModalComponent from "../components/customModal/ModalComponent";
import CustomButton from "../components/customButton/CustomButton";

//api
import { getUserApi } from "../services/api/userApi";
//getStorage
import asyncLocalStorage from "../utils/async-local-storage";
// colori
const brandColor = "#232726";
const secondaryColor = "#77523B";
// mokup
const arenasList = [
  "arena1",
  "arena2",
  "arena3",
  "arena1",
  "arena2",
  "arena3",
  "arena1",
  "arena2",
  "arena3",
];

const Lobby = (props) => {
  const [state, setState] = useState({
    areanasModalList: false,
    createArenasModal: false,
    user: {
      name: "",
      score: 0,
    },
  });
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const user = await asyncLocalStorage();
    const response = await getUserApi(user.id);

    console.log(response);
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

  const menageModalList = () => {
    setState({
      ...state,
      areanasModalList: !state.areanasModalList,
    });
  };

  const menageModalNew = () => {
    console.log("change state");
    setState({
      ...state,
      createArenasModal: !state.createArenasModal,
    });
  };
  const goLobby = () => {
    props.goLobby();
  };

  const keyExtractor = (item, idx) => {
    return item?.id?.toString() || idx?.toString();
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={goLobby}
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          width: "80%",
          padding: 10,
          backgroundColor: secondaryColor,
          marginVertical: 10,
          marginHorizontal: "auto",
          borderRadius: 5,
        }}
      >
        <Text
          style={{
            color: brandColor,
            fontSize: 18,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

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
          <Text style={styles.normalText}>SCORE</Text>
          <View style={styles.uiLine}></View>
          <Text style={styles.normalText}>{state?.user.score}</Text>
        </View>
      </View>
      {/* arenaListSection */}
      <TouchableOpacity
        onPress={menageModalList}
        style={styles.arenasListConainter}
      >
        <View style={styles.arenasList}>
          <Text style={styles.sectionTitle}>LISTA ARENE</Text>
        </View>
      </TouchableOpacity>
      {/* create new arena */}
      <TouchableOpacity
        onPress={menageModalNew}
        style={styles.arenasListConainter}
      >
        <View style={styles.arenasList}>
          <Text style={styles.sectionTitle}>CREA ARENA</Text>
        </View>
      </TouchableOpacity>
      {/* image castle */}
      <Image source={CASTLE} resizeMode={"cover"} style={styles.imageCastle} />
      {/* modale lista arene */}
      <ModalComponent isOpen={state.areanasModalList}>
        <View style={styles.modalList}>
          <Text style={styles.titleModal}>LISTA ARENE</Text>
          <FlatList
            style={{ height: "100%" }}
            data={arenasList}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
          />
          <CustomButton
            onClickCallback={menageModalList}
            label={"CHIUDI"}
            buttonContainerStyle={styles.buttonCSModal}
            buttonTextStyle={styles.buttonTSModal}
          />
        </View>
      </ModalComponent>
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
  },
  bgImage: {
    height: "100%",
    width: "100%",
    position: "absolute",
    zIndex: 1,
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
  imageCastle: {
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: 4,
    width: "100%",
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
    zIndex: 3,
    padding: 20,
  },
  userName: {
    width: "75%",
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
  arenasListConainter: {
    height: "20%",
    zIndex: 3,
    padding: 20,
    width: "100%",
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
  },
  uiLine: {
    backgroundColor: "#fff",
    height: 2,
    width: "100%",
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
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
