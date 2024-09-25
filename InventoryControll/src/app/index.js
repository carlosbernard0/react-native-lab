import { useRouter, Link } from 'expo-router';
import { useContext, useEffect, useState } from 'react';
import {StyleSheet, Image, Text, TextInput, View, TouchableOpacity, Modal} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import imageSispro from '../../assets/sispro-letreiro.png'
import ModalForgotPass from './components/modals/ModalForgotPass.js';
import ModalFirstAcess from './components/modals/ModalFirstAcess.js';
import axios from 'axios';
import MyContext from './context/MyContext.js';

const Login = () => {
    const router = useRouter()
    const {login, setLogin} = useContext(MyContext)
    const [password, setPassword] = useState("")
    const [isShowModalForgot , setIsShowModalForgot] = useState(false)
    const [isShowModalFirstAcess , setIsShowModalFirstAcess] = useState(false)
    const [dataJson,setDataJson] = useState({"Login": `${login}`, "Senha": `${password}`})

    useEffect(()=>{
        setDataJson({"Login": `${login}`, "Senha": `${password}`})
    },[password,login])

    const url = 'http://makhom.sispro.com.br/ORC/WsLogin.rule?sys=ORC'
    
    const makeLogin = async () => {
        try {
            const response = await axios.post(url,dataJson);
            // const response = await axios.post(url, {
                //     "Login":"ABIMAEL",
                //     "Senha":"12345"  
                // });
                
                console.log(dataJson)
                
                console.log(response.data)
            
            const loginSuccess = response.data.LoginSuccess
            
            if(loginSuccess == 'true') {
                router.push('/home')
            }else{
                alert('Acesso negado! Usuário ou senha não conferem. Entre em contato com o administrador.')
            }
        } catch (error) {
            console.error("error" ,error);
        }
    };
    
    return(
        <SafeAreaView>

            <Text>{login}</Text>
            <Text>{password}</Text>
            <Text onPress={()=> {router.push('/home')}}>Passar tela</Text>

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
                        onChangeText={(value) => setLogin(value)}
                    />
                    <Text style={styles.text}>
                        Senha:
                    </Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Senha'
                        onChangeText={(value) => setPassword(value)}

                    />

                    <TouchableOpacity style={styles.buttonAcess} onPress={makeLogin}>
                        <Text style={styles.textAcess}>Acessar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonModal} onPress={()=> setIsShowModalForgot(true)}>
                        <Text style={{...styles.text, textAlign: 'center'}}>Esqueceu sua senha?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonModal} onPress={()=> setIsShowModalFirstAcess(true)}>
                        <Text style={{...styles.text, textAlign: 'center'}}>Primeiro acesso?</Text>
                    </TouchableOpacity>
                    
                    <View style={styles.footer}>
                        <Text>
                        Desenvolvido por SISPRO S/A Serviços e Tecnologia da Informação ©2023 Todos os direitos reservados
                        </Text>
                    </View>

                    <Modal
                        visible={isShowModalForgot}
                        animationType="fade"
                        transparent={true}
                    >
                        <ModalForgotPass setIsShowModal={setIsShowModalForgot}/>
                        
                    </Modal>
                    <Modal
                        visible={isShowModalFirstAcess}
                        animationType="fade"
                        transparent={true}
                    >
                        <ModalFirstAcess setIsShowModal={setIsShowModalFirstAcess}/>
                        
                    </Modal>

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
        width: '80%', 
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
       marginTop: 20,

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