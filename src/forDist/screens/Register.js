import { StyleSheet, Text, View, Image } from "react-native";
import React, { useRef } from "react";
import CustomButton from "../components/customButton/CustomButton";
import CustomInput from "../components/customInput/CustomInput";

import { Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
//image
import loginImage from "../assets/knight2.png";
//api
import { registrationApi } from "../services/api/registrationAPI";
import { signinApi } from "../services/api/loginAPI";
//function
import checkEmptyText from "../utils/checkEmptyText";
import checkEmailValidation from "../utils/checkEmailValidation";

import PropTypes from "prop-types";

const brandColor = "#232726";
const secondaryColor = "#77523B";

const Register = (props) => {
  const refEmail = useRef(null);
  const refName = useRef(null);
  const refPassword = useRef(null);
  const refConfirmPassword = useRef(null);

  async function onClickRegister() {
    let email = refEmail.current.value;
    let name = refName.current.value;
    let password = refPassword.current.value;
    let confirmPassword = refConfirmPassword.current.value;

    //controllo campi vuoti
    let emptyEmail = checkEmptyText(email);
    let emptyName = checkEmptyText(name);
    let emptyPassword = checkEmptyText(password);

    let validEmail = checkEmailValidation(email);

    if (
      !emptyEmail &&
      validEmail &&
      !emptyName &&
      !emptyPassword &&
      password === confirmPassword
    ) {
      //creazione oggetto da inviare
      let user = {
        email: email,
        userName: name,
        password: password,
      };

      //api
      const response = await registrationApi(user);

      // //controllo response
      if (response.status === 200) {
        const responseLogin = await signinApi(user);

        if (responseLogin.status === 200) {
          if (Platform.OS === "web") {
            // salvo l'utente attualmente loggato
            localStorage.setItem(
              "currentUser",
              JSON.stringify(responseLogin.data)
            );
          } else {
            try {
              const JSONnewUsers = JSON.stringify(responseLogin.data);
              // salvo l'utente corrente
              await AsyncStorage.setItem("@currentUser", JSONnewUsers);
            } catch (e) {
              console.log(e);
            }
          }
          if (!!props.callbackRegister) {
            props.callbackRegister();
          }
        }
      }
    }

    console.log("Register");
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerLogin}>
        <Text style={styles.title}>REGISTRA CAVALIERE</Text>
        <CustomInput
          refCustom={refEmail}
          styleCss={styles.login}
          placeholderColor={"white"}
          placeholder={"Email"}
        />
        <CustomInput
          refCustom={refName}
          styleCss={styles.login}
          placeholderColor={"white"}
          placeholder={"Username"}
        />
        <CustomInput
          refCustom={refPassword}
          styleCss={styles.login}
          placeholderColor={"white"}
          placeholder={"Password"}
        />
        <CustomInput
          refCustom={refConfirmPassword}
          styleCss={styles.login}
          placeholderColor={"white"}
          placeholder={"Conferma Password"}
        />
        <CustomButton
          onClickCallback={onClickRegister}
          label={"REGISTRATI"}
          buttonContainerStyle={styles.button}
          buttonTextStyle={styles.textBtLogin}
        />
      </View>
      <View style={styles.containerImage}>
        <Image
          source={loginImage}
          resizeMode={"contain"}
          style={styles.image}
        />
      </View>
      <View style={styles.uiSquare}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: "100%",
    width: "100%",
    backgroundColor: brandColor,
  },
  containerLogin: {
    zIndex: 2,
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
  containerImage: {
    zIndex: 1,
    position: "absolute",
    bottom: 0,
    left: 0,
    height: "70%",
    width: "100%",
    display: "flex",
  },
  image: {
    height: "100%",
    width: "100%",
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

Register.protoType = {
  onClickLogin: PropTypes.func,
  onClickRegister: PropTypes.func,
};

export default Register;
