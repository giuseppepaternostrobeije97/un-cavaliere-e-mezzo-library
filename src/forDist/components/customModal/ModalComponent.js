import React, {useState} from "react"
import PropTypes from "prop-types"
import { Animated, Modal, StyleSheet, Text, View, Pressable } from "react-native"

function ModalComponent(props) {
  const [modalVisible, setModalVisible] = useState(false);


  return(
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.isOpen}
        onRequestClose={() => {
          setModalVisible(!props.isOpen);
        }}>
        <View style={styles.centeredViewInner}>
            {props.children}
        </View>
      </Modal>
    </View>
  )
}

ModalComponent.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired
}

ModalComponent.defaultProps = {
  children: null,
  isOpen: false,
}

const styles = StyleSheet.create({
  centeredView: {
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  centeredViewInner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderColor: "orange",
    borderWidth: 4,
    borderRadius: 5,
    padding: 50,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5,
  }
})

export default ModalComponent
