import { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from "react-native";
import Slider from "@react-native-community/slider";
import ModalPassword from "../../modal";

const abc = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']


export function Home() {
  const [numCaracteres, setNumCaracteres] = useState(10)
  const [showModal, setShowModal] = useState(false)
  const [passGenerated, setPassGenerated] = useState('')

  const generatePassword = () => {
    let pass = ''
    for (let i = 0; i < numCaracteres; i++) {
      const randomNumber = Math.floor(Math.random()*abc.length)
      pass += abc[randomNumber]
    }
    setPassGenerated(pass)
    setShowModal(true)
  }



  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/logo.png")}
        style={styles.logo}
      />

      <Text style={styles.title}>{numCaracteres} caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={{height: 50}}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor="#ff0000"
          minimumTrackTintColor="#000"
          thumbTintColor="#392de9"
          value={numCaracteres}
          onValueChange={(value)=> setNumCaracteres(parseInt(value))}
        />
      </View>

      <TouchableOpacity style={styles.button}
        onPress={generatePassword}
      >
        <Text style={styles.buttonText}>
          Gerar senha
        </Text>
      </TouchableOpacity>

      <Modal
        visible={showModal}
        animationType="fade"
        transparent={true}
      >
        <ModalPassword
          passGenerated={passGenerated}
          setShowModal={setShowModal}
          handleClose={() => setShowModal(false)}
          
        />
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3F3",
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    marginBottom: 60,
  },
  area: {
    marginBottom: 16,
    marginTop: 16,
    backgroundColor: '#FFF',
    width: "80%",
    borderRadius: 8,
    padding: 8,


  },
  title:{
    fontSize: 30,
    fontWeight: 'bold'
  },
  button: {
    width: "80%",
    height: 50,
    backgroundColor: '#392de9',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    borderRadius: 8,
    marginBottom: 18

  },

  buttonText: {
    color: '#FFF',
    fontSize: 20,
  },
  
})