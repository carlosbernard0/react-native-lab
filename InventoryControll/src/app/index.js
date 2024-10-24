import { useRouter } from 'expo-router';
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
    const {password, setPassword} = useContext(MyContext)
    const [isShowModalForgot , setIsShowModalForgot] = useState(false)
    const [isShowModalFirstAcess , setIsShowModalFirstAcess] = useState(false)
    const [dataJson,setDataJson] = useState({"usuario": `${login}`, "senha": `${password}`})    
    const {setSelectedEstablishment} = useContext(MyContext)
    const {setIsShowSecondPicker} = useContext(MyContext)
    const [errors, setErrors] = useState({
        login: '', password: ''
    })
    const [activateErrorLogin, setActivateErrorLogin] = useState(false)
    const [activateErrorPass, setActivateErrorPass] = useState(false)
    const {setToken} = useContext(MyContext);

    useEffect(()=>{
        if(login == ''){
            setIsShowSecondPicker(false)
            setSelectedEstablishment('')
        }
        setDataJson({"usuario": `${login.toUpperCase()}`, "senha": `${password}`})

    },[password,login])

    const url = 'https://siscandes2v6.sispro.com.br/SisproERPCloud/Service_Private/React/SpReact2AuthWS/api/Auth/Login'
    
    const makeLogin = async () => {
        searchErrors()
        try {
            const response = await axios.post(url, dataJson, {
                params: {
                  dominio: 'REACT_JAPURA'
                }}
            );
            console.log(response.data.Token)
            
            
            const Error = response.data.Error //boolean
            
            if(!Error) {
                setToken(response.data.Token)
                router.push('/home')
            }else{
                alert('Acesso negado! Usuário ou senha não conferem. Entre em contato com o administrador.')
            }
        } catch (error) {
            console.error("error" ,error);
            alert("Ocorreu um erro nao esperado...dentro do catch!")
        }
    };

    const searchErrors = () => {
        if(login == ''){
            setErrors(prevErrors => ({...prevErrors, login:'Preencha este campo para fazer login' }))
            setActivateErrorLogin(true)
        }else{
            setActivateErrorLogin(false)
            setErrors(prevErrors => ({...prevErrors, login:'' }))

        }
        if(password == ''){
            setErrors(prevErrors => ({...prevErrors, password:'Preencha este campo para fazer login' }))
            setActivateErrorPass(true)
        }else{
            setActivateErrorPass(false)
            setErrors(prevErrors => ({...prevErrors, password:'' }))
        }


    }
    
    return(
        <SafeAreaView style={{flex: 1}}>

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
                        value={login}
                        style={activateErrorLogin ? {...styles.textInput, borderColor: 'red'}: styles.textInput}
                        placeholder="Usuário"
                        onChangeText={(value) => setLogin(value)}
                        />
                    <Text style={styles.error}>{errors.login}</Text>
                    <Text style={styles.text}>
                        Senha:
                    </Text>
                    <TextInput
                        value={password}
                        style={activateErrorPass ? {...styles.textInput, borderColor: 'red'}: styles.textInput}
                        placeholder='Senha'
                        onChangeText={(value) => setPassword(value)}
                        secureTextEntry={true}
                    />
                    <Text style={styles.error}>{errors.password}</Text>

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
                        <Text style={styles.footerText}>
                            Desenvolvido por SISPRO S/A Serviços e Tecnologia da Informação ©2023 Todos os direitos reservados
                        </Text>
                    </View>

                    <Modal
                        visible={isShowModalForgot}
                        animationType="fade"
                    >
                        <ModalForgotPass setIsShowModal={setIsShowModalForgot}/>
                    </Modal>
                    <Modal
                        visible={isShowModalFirstAcess}
                        animationType="fade"
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
        justifyContent: "center",
        alignItems: "center",
    },

    contentContainer :{
        width: '80%', 
        padding: 5,
        flexGrow: 1
       
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
        color: 'black'

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

    error: {
        color: 'red',
        fontWeight: '600'
    },

    footer: {
        width: '100%',  
        marginTop: 30,
       
    },

    footerText: {
         textAlign: 'center'
    }


})