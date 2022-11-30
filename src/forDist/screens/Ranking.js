import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import BG from "../assets/bg.png";

//api
import { getLeaderBoardApi } from "../services/api/leaderBoardAPI";

const brandColor = "#232726";
const secondaryColor = "#77523B";

const Ranking = () => {
  const [allUsers, setUsers] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await getLeaderBoardApi();

    if (response.status === 200) {
      let user = response.data.users;
      user.sort((a, b) => (a.score > b.score ? -1 : 1));
      setUsers(user);
    }
  };

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.itemCss}>
        <Text
          style={{
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          {index + 1}°
        </Text>
        <Text
          style={{
            color: brandColor,
            fontSize: 18,
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          {item.username}
        </Text>
        <Text style={{ color: brandColor, fontSize: 18, fontWeight: "bold" }}>
          {item.score}
        </Text>
      </View>
    );
  };

  const keyExtractor = (item, idx) => {
    return item?.id?.toString() || idx?.toString();
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={BG}
        resizeMode={"cover"}
        style={styles.bgImage}
      />
      {/* title section */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>CLASSIFICA</Text>
      </View>
      <View style={styles.rankingView}>
        <FlatList
            style={{ height: "100%" ,width:'90%'}}
            data={allUsers}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
        />
      </View>
    </View>
  );
};

export default Ranking;

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
  rankingView:{
    height:'90%',
    width:'100%',
    display:'flex',
    zIndex:3,
    alignItems:'center',
    marginHorizontal:'auto',
    paddingVertical:20,
    maxWidth:500
  },
  itemCss: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: '90%',
    padding: 10,
    backgroundColor: secondaryColor,
    marginVertical: 10,
    marginHorizontal: 15,
    shadowColor: "#0000009c",
    shadowRadius: 7,
    shadowOffset: {
      height: 7,
      width: 0,
    },
    borderRadius: 5,
  },
});
