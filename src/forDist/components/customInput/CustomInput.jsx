//react functionalities
import React, { useState } from "react";
import propTypes from "prop-types";

//Native components
import { TextInput, View } from "react-native";

const CustomInput = (props) => {
  const [value, setValue] = useState("");
  const typing = (e) => {
    setValue(e);
    if (!!props?.callback) {
      props?.callback(e);
    }
  };
  return (
    <View>
      <TextInput
        ref={props.refCustom}
        value={value}
        secureTextEntry={props.password}
        style={props.styleCss}
        onChangeText={typing}
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderColor}
      />
    </View>
  );
};

CustomInput.propTypes = {
  refCustom: propTypes.any,
  callback: propTypes.func,
  styleCss: propTypes.object,
  placeholder: propTypes.string,
  password: propTypes.bool,
  placeholderColor: propTypes.any,
};
export default CustomInput;
