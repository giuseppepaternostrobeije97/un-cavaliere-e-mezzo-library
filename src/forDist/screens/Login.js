import { StyleSheet, Text, View, Image } from "react-native";
import React, { useRef, useState } from "react";
import CustomButton from "../components/customButton/CustomButton";
import CustomInput from "../components/customInput/CustomInput";

import { Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
//image
import loginImage from "../assets/knight4.png";
//api
import { signinApi } from "../services/api/loginAPI";
//function
import checkEmptyText from "../utils/checkEmptyText";
import checkEmailValidation from "../utils/checkEmailValidation";

import PropTypes from "prop-types";

const brandColor = "#232726";
const secondaryColor = "#77523B";

const Login = (props) => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const refEmail = useRef(null);
  const refPassword = useRef(null);

  async function onClickLogin() {
    // let email = refEmail.current.value;
    // let password = refPassword.current.value;
    let email = state.email;
    let password = state.password;
    console.log(refEmail);

    //controllo campi vuoti
    let emptyEmail = checkEmptyText(email);
    let emptyPassword = checkEmptyText(password);

    let validEmail = checkEmailValidation(email);

    //controllo campi email, password
    if (!emptyEmail && validEmail && !emptyPassword) {
      //creazione oggetto da inviare
      let user = {
        email: email,
        password: password,
      };

      //api
      const response = await signinApi(user);

      console.log(response);
      //controllo response
      if (response.status === 200) {
        if (Platform.OS === "web") {
          // salvo l'utente attualmente loggato
          localStorage.setItem("currentUser", JSON.stringify(response.data));
        } else {
          try {
            const JSONnewUsers = JSON.stringify(response.data);
            // salvo l'utente corrente
            await AsyncStorage.setItem("@currentUser", JSONnewUsers);
          } catch (e) {
            console.log(e);
          }
        }

        console.log("Login");
        if (!!props.callbackLogin) {
          props.callbackLogin();
        }
      }
    }
  }

  function handleEmail(email) {
    setState({
      ...state,
      email: email,
    });
  }

  function handlePassword(password) {
    setState({
      ...state,
      password: password,
    });
  }

  function onClickRegister(e) {
    console.log("Register");

    props.callbackRegister(e);
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerLogin}>
        <Text style={styles.title}>IDENTIFICA CAVALIERE</Text>
        <CustomInput
          callback={handleEmail}
          refCustom={refEmail}
          styleCss={styles.login}
          placeholderColor={"white"}
          placeholder={"Email"}
        />
        <CustomInput
          callback={handlePassword}
          refCustom={refPassword}
          styleCss={styles.login}
          placeholderColor={"white"}
          placeholder={"Password"}
        />
        <CustomButton
          onClickCallback={onClickLogin}
          label={"ACCEDI"}
          buttonContainerStyle={styles.button}
          buttonTextStyle={styles.textBtLogin}
        />
        <CustomButton
          onClickCallback={onClickRegister}
          label={"Non sei ancora registrato? Registrati"}
          buttonTextStyle={styles.textBtRegister}
          buttonContainerStyle={{ marginVertical: 10 }}
        />
      </View>

      <Image source={loginImage} resizeMode={"contain"} style={styles.image} />

      <View style={styles.uiSquare}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",

    backgroundColor: brandColor,
  },
  containerLogin: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "80%",
    width: "100%",
  },
  login: {
    borderWidth: 1,
    borderColor: "#FFF",
    width: 300,
    height: 50,
    marginVertical: 10,
    backgroundColor: "#77523BCF",
    paddingHorizontal: 10,
  },
  button: {
    marginTop: 10,
    width: 300,
    height: 50,
    backgroundColor: secondaryColor,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  textBtLogin: {
    fontSize: 24,
    color: "#FFF",
    fontWeight: "bold",
  },
  textBtRegister: {
    fontSize: 16,
    color: "#FFF",
    textDecorationLine: "underline",
  },
  title: {
    fontSize: 30,
    color: "#FFF",
    fontWeight: "bold",
    marginBottom: 20,
  },
  image: {
    zIndex: 1,
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "30%",
    display: "flex",
    shadowColor: brandColor,
    shadowRadius: 10,
    shadowOffset: {
      height: 5,
      width: 5,
    },
  },
  uiSquare: {
    height: "20%",
    width: "100%",
    backgroundColor: secondaryColor,
  },
});

Login.protoType = {
  onClickLogin: PropTypes.func,
  onClickRegister: PropTypes.func,
};

export default Login;
