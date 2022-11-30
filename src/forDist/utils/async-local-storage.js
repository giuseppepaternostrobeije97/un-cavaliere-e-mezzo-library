import { Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const getCurrentUser = async () => {
  if (Platform.OS === "web") {
    return JSON.parse(localStorage.getItem("currentUser"));
  } else {
    return JSON.parse(await AsyncStorage.getItem("@currentUser"));
  }
};
export default getCurrentUser;
