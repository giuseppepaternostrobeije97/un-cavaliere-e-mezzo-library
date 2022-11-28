// react native
import { StyleSheet, Text, View, ImageBackground, Image,TouchableOpacity } from "react-native";
// react
import React,{useState} from "react";
// media
import BG from "../assets/bg.png";
import CASTLE from "../assets/castle.png";
// import 
import ModalComponent from "../components/customModal/ModalComponent";

// colori
const brandColor = "#232726";
const secondaryColor = "#77523B";
// mokup
const userName = "pincopallo";
const score = 13;
const arenasList = ['arena1','arena2','arena3','arena1','arena2','arena3','arena1','arena2','arena3']

const Lobby = () => {

    const [stateModalList,setModal] = useState(false)

    const menageModalList = () => {
        setModal(!stateModalList)
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
          <Text style={styles.normalText}>{userName}</Text>
        </View>
        <View style={styles.score}>
          <Text style={styles.normalText}>SCORE</Text>
          <View style={styles.uiLine}></View>
          <Text style={styles.normalText}>{score}</Text>
        </View>
      </View>
      {/* arenaListSection */}
      <TouchableOpacity onPress={menageModalList} style={styles.arenasListConainter}>
        <View style={styles.arenasList}>
          <Text style={styles.sectionTitle}>
            LISTA ARENE
          </Text>
        </View>
      </TouchableOpacity>
      {/* create new arena */}
      <View style={styles.arenasListConainter}>
        <View style={styles.arenasList}>
          <Text style={styles.sectionTitle}>
            CREA ARENA
          </Text>
        </View>
      </View>
      {/* image castle */}
      <Image source={CASTLE} resizeMode={"cover"} style={styles.imageCastle} />
      <ModalComponent
      isOpen={stateModalList}
      >
        {/* DA CONTINUARE */}
      <View style={styles.modalList}>

      </View>
      </ModalComponent>
    </View>
  );
};

export default Lobby;

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
    zIndex: 2,
    width: "100%",
    height: "40%",
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
  sectionTitle:{
    color:'#fff',
    fontSize:30,
    fontWeight:'bold'
  }
});
