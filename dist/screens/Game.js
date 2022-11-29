"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
var _react = _interopRequireDefault(require("react"));
var _CARTENAPOLETANE = _interopRequireDefault(require("../assets/CARTE-NAPOLETANE.png"));
var _CustomButton = _interopRequireDefault(require("../components/customButton/CustomButton"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// colori
var brandColor = "#232726";
var secondaryColor = "#77523B";
var Game = function Game() {
  //web socket
  var ws = new WebSocket("wss://socketsbay.com/wss/v2/1/7f110bf7a02974b4295c97425c7827ee/");
  ws.onopen = function (event) {
    console.log("Connessione");
  };
  ws.onmessage = function (event) {
    console.log(event);
  };
  var stop = function stop() {
    ws.send("stop");
    console.log("stop");
  };
  var card = function card() {
    ws.send("card");
    console.log("card");
  };
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.container
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.nameUserUp
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [styles.textUsers, {
      textAlign: "center"
    }]
  }, "Utente UP")), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.gameSection
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.nameUserLeft
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [styles.textUsers, {
      transform: [{
        rotate: "-90deg"
      }],
      width: "300%"
    }]
  }, "Utente LEFT")), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.tableGame
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.cardUserTopBottom
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    style: styles.imgeGame,
    source: _CARTENAPOLETANE.default
  })), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.middleCardSection
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.cardUserMiddle
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.cardUserMiddle
  })), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.cardUserTopBottom
  })), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.nameUserRigth
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [styles.textUsers, {
      transform: [{
        rotate: "90deg"
      }],
      width: "300%"
    }]
  }, "Utente RIGTH"))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.nameUser
  }, /*#__PURE__*/_react.default.createElement(_CustomButton.default, {
    onClickCallback: stop,
    label: "STAI",
    buttonTextStyle: [styles.btText, {
      color: "#FFF"
    }],
    buttonContainerStyle: styles.btStop
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.textUsers
  }, "Utente"), /*#__PURE__*/_react.default.createElement(_CustomButton.default, {
    onClickCallback: card,
    label: "CARTA",
    buttonTextStyle: [styles.btText, {
      color: secondaryColor
    }],
    buttonContainerStyle: styles.btCard
  })));
};
var styles = _reactNative.StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    backgroundColor: brandColor
  },
  nameUserUp: {
    height: "10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  nameUserLeft: {
    height: "100%",
    width: "10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  nameUserRigth: {
    height: "100%",
    width: "10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  tableGame: {
    height: "100%",
    width: "80%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: secondaryColor,
    borderRadius: 15
  },
  cardUserTopBottom: {
    height: "30%",
    width: "100%"
  },
  middleCardSection: {
    height: "40%",
    width: "100%",
    display: "flex",
    flexDirection: "row"
  },
  cardUserMiddle: {
    height: "100%",
    width: "50%"
  },
  gameSection: {
    height: "80%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%"
  },
  nameUser: {
    height: "10%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%"
  },
  btCard: {
    backgroundColor: "#FFF",
    borderColor: secondaryColor,
    borderRadius: 10,
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  btStop: {
    borderRadius: 10,
    backgroundColor: secondaryColor,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  btText: {
    fontSize: 24,
    fontWeight: "bold"
  },
  textUsers: {
    textAlign: "center",
    color: "#FFF",
    textTransform: "uppercase",
    fontSize: 24,
    fontWeight: "bold"
  }
});
var _default = Game;
exports.default = _default;