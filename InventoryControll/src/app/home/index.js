import { useRouter } from 'expo-router';
import {Text, View, StyleSheet, TouchableOpacity, FlatList, Pressable} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Picker} from '@react-native-picker/picker';
import { useContext, useEffect, useState } from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import axios from 'axios'
import MyContext from '../context/MyContext';


const Home = () => {
    const {login, setLogin, setPassword, selectedEstablishment , setSelectedEstablishment
        ,   selectedTypeOfBusiness, setSelectedTypeOfBusiness
        ,isShowSecondPicker, setIsShowSecondPicker,
        setCompany, setTypeBusinessNumber, company, typeBusinessNumber,token
    } = useContext(MyContext);
    const router = useRouter();
    const [listEstablishment, setListEstablishment] = useState([])
    const [listTypeBusiness, setListTypeBusiness] = useState([])

    const urlEstablishment = `https://siscandes2v6.sispro.com.br/SisproERPCloud/Service_Private/React/SpReact2JapuraWS/api/Get/GetEstabelecimento` 

    // const urlTypeOfBusiness = `https://siscandes2v6.sispro.com.br/SisproERPCloud/Service_Private/React/SpReact2JapuraWS/api/Get/GetEstabelecimento`
    const urlTypeOfBusiness = `https://siscandes2v6.sispro.com.br/SisproERPCloud/Service_Private/React/SpReact2JapuraWS/api/depositos/tiponegocio?Usuario=${login}&CDEstab=${selectedEstablishment.CD_ESTAB}`

    const getListEstablishment = async () => {
        try{
            const response = await axios.get(urlEstablishment, {
                headers: {
                    Authorization: token
                },
                params: {
                    user: login
                }
            });
    
            console.log(response)
            const listResponse = response.data.EstabelecimentoList;
            setListEstablishment(['',...listResponse])
            console.log(listResponse)

        }catch(error){
            console.log("Erro no getListEstablishment ", error)
        }


    }

    const getListTypeBusiness = async() => {
        try{
            const response = await axios.get(urlTypeOfBusiness,{
                headers: {
                    Authorization: token
                }
            });
            
            
            const listResponse = response.data.TipoNegocioList;
            console.log(listResponse);
            if(listResponse && listResponse.msgError){
                console.log("Erro de requisicao : A lista nao é iteravel")
            }else{
                setListTypeBusiness(['',...listResponse])
            }

        }catch(error){
            console.log(error);
        }


    }

    useEffect(()=> {
        if(selectedEstablishment != ''){
            setIsShowSecondPicker(true)
        }

        if(listEstablishment.length == 0){
            getListEstablishment()
        }

        if(selectedEstablishment != ''){
            getListTypeBusiness()
        }

    },[selectedEstablishment])

    const changeSelectedEstablishment = (item) => {
        for (let i = 0; i < listEstablishment.length; i++) {
            if(listEstablishment[i].SC_ESTAB == item){
                setSelectedEstablishment(listEstablishment[i])
            }
        }
    }
    const changeSelectedTypeOfBusiness = (item) => {
        for (let i = 0; i < listTypeBusiness.length; i++) {
            if(listTypeBusiness[i].DS_NEGOC_TIPO == item){
                setCompany(listTypeBusiness[i].CD_EMPRESA)
                setTypeBusinessNumber(listTypeBusiness[i].CD_NEGOC_TIPO)
                setSelectedTypeOfBusiness(listTypeBusiness[i])
            }                    
        }
                       
    }

    const searchGroup = () => {
        router.push('/groups')
    }

    const logout = () => {
        setLogin('')
        setPassword('')
        router.back()
    }

    return(
        <SafeAreaView style={{flex: 1}}>  
            <View style={ styles.container}>
                <View style={styles.header}>
                        <Text style={ styles.textHeader}>.</Text>
                </View>
                <View style={styles.contentContainer}>

                    {selectedEstablishment == '' ?(
                        <View style={styles.firstViewPicker}>
                            <Text style={styles.text}>Estabelecimento</Text>
                            <Picker
                                selectedValue={selectedEstablishment.SC_ESTAB}
                                onValueChange={(itemValue) => changeSelectedEstablishment(itemValue)}
                                style={styles.picker}
                            >
                                {listEstablishment.map((item) => (
                                    <Picker.Item key={item.CD_ESTAB} label={item.SC_ESTAB} value={item.SC_ESTAB}/>
                                ))}
                            </Picker>

                        </View>
                    ):(
                        <View style={styles.firstViewPicker}>
                            <Text style={ styles.textBold}>{selectedEstablishment.SC_ESTAB}</Text>
                        </View>
                    )}

                    {isShowSecondPicker ? (
                        <View style={styles.firstViewPicker}>
                            <Text style={styles.text}>Tipo de negócio</Text>
                            <Picker
                                selectedValue={selectedTypeOfBusiness.DS_NEGOC_TIPO}
                                onValueChange={(itemValue) => changeSelectedTypeOfBusiness(itemValue)}
                                style={styles.picker}
                            >
                                {listTypeBusiness.map((item) => (
                                    <Picker.Item key={item.CD_NEGOC_TIPO} label={item.DS_NEGOC_TIPO} value={item.DS_NEGOC_TIPO}/>
                                ))}
                            </Picker>

                            <TouchableOpacity style={styles.buttonProduct} onPress={searchGroup}>
                                <Text style={styles.textButton}>Produto</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.buttonLogout} onPress={logout}>
                                <MaterialCommunityIcons name="logout" size={24} color="black" />
                                <Text style={styles.textLogout}>Logout</Text>
                            </TouchableOpacity>
                        </View>
                    ): (
                        <View/>
                    )}


                </View>
            </View>
        
        </SafeAreaView>
    )
}

export default Home;


const styles = StyleSheet.create({
    container:  {
    },

    contentContainer :{
        padding: 5
    },

    header: {
        backgroundColor: '#003aa0',
        height: 90,

        
        
    },

    textHeader : {
        color: '#355c7d',
        fontSize: 1,
    },

    firstViewPicker: {
        marginTop: 10,
        padding: 20,

    },

    text: {
        fontSize: 15,
        marginBottom: 8

    },

    picker: {
        padding: 10,
        borderRadius: 7
    },

    textBold: { 
        fontWeight: '600',
        fontSize: 22,
        paddingLeft: 10
    },

    buttonProduct:{
        justifyContent: 'center',
        marginTop: 30,
        backgroundColor: '#003aa0',
        padding: 30,
        borderRadius: 7,
    },

    textButton:{
        textAlign: 'center',
        color: '#FFF',
        fontSize: 20,
        fontWeight: "500"
    },

    buttonLogout:{
        textAlign: 'center',
        padding: 10,
        marginTop: 10,
        flexDirection: 'row'
    },

    textLogout: {
        textAlign: 'center'
    }


})