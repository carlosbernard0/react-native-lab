import { useRouter, Link } from 'expo-router';
import { useState } from 'react';
import {StyleSheet, Image, Text, TextInput, View, TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import imageSispro from '../../assets/sispro-letreiro.png'

const Login = () => {
    const router = useRouter()
    const [loginUser, setLoginUser] = useState({
        user: "", password: ""
    })

    const makeLogin = () => {
        router.push('/home')
    }
    
    return(
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <Image
                        style={styles.image}
                        source={imageSispro}
                        resizeMode='contain'
                    />
                    <Text style={styles.text}>
                        Usuário:
                    </Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Usuário"
                    />
                    <Text style={styles.text}>
                        Senha:
                    </Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Senha'
                    />

                    <TouchableOpacity style={styles.buttonAcess} onPress={makeLogin}>
                        <Text style={styles.textAcess}>Acessar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonModal}>
                        <Text style={{...styles.text, textAlign: 'center'}}>Esqueceu sua senha?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonModal}>
                        <Text style={{...styles.text, textAlign: 'center'}}>Primeiro acesso?</Text>
                    </TouchableOpacity>
                    
                    <View style={styles.footer}>
                        <Text>
                        Desenvolvido por SISPRO S/A Serviços e Tecnologia da Informação ©2023 Todos os direitos reservados
                        </Text>
                    </View>

                </View>
            </View>
        </SafeAreaView>
    )
}

export default Login;

const styles = StyleSheet.create({
    container:  {
        flex: 1, 
        justifyContent: "center",
        alignItems: "center",
    },

    contentContainer :{
        width: '30%', 
        padding: 5
       
    },
    image: {
      justifyContent: 'center',
      width: '100%',
      marginBottom: 20,
      marginTop: 20,
      padding: 10,

    },

    text: {
       fontSize: 15, 
       marginTop: 20

    },
    textInput :{
        borderRadius: 5,
        borderColor: 'gray',
        padding: 8,
        marginTop: 5,
        marginBottom: 15,
        borderWidth: 1, 

    },

    buttonAcess:{
        marginTop: 40,
        width: "100%",
        backgroundColor: '#333333',
        paddingVertical: 10,
        borderRadius: 5
        
    },

    textAcess: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: '600'
    },

    buttonModal: {
        marginTop: 10,
        width: "100%",
    
    },

    footer: {
        width: '100%',  
        marginTop: 30
    }


})