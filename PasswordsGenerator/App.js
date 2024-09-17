import { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Slider from "@react-native-community/slider";

const abc = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

function App() {
  const [numCaracteres, setNumCaracteres] = useState(10)
  const [showPassContent, setShowPassContent] = useState(false)
  const [passGenerated, setPassGenerated] = useState('')

  const generatePassword = () => {
    let pass = ''
    for (let i = 0; i < numCaracteres; i++) {
      const randomNumber = Math.floor(Math.random()*abc.length)
      pass += abc[randomNumber]
    }
    setPassGenerated(pass)
    setShowPassContent(true)
  }



  return (
    <View style={styles.container}>
      <Image
        source={require("./src/assets/logo.png")}
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

      {!showPassContent ? (
        <View/>
      ): (
        <View style={styles.passContentContainer}>
          <Text>Senha gerada</Text>
          <Text style={styles.passGeneratedText}>{passGenerated ? passGenerated : (
            <Text>Something went wrong</Text>
          )}</Text>
          <View>
            <Text>Back</Text>
            <Text style={styles.textSave}>Save pass</Text>
          </View>
        </View>
      )}

    </View>
  );
}

export default App

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
  passContentContainer:{
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#FFF",
    padding: 8,
  },
  passGeneratedText:{
    backgroundColor: '#000',
    color: "#FFF",

  },
  textSave: {
    backgroundColor: '#392de9',
    color: "#FFF",
    borderRadius: 8.
  },
  
})