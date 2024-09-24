import { useRouter } from 'expo-router';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Picker} from '@react-native-picker/picker';
import { useEffect, useState } from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import axios from 'axios'



const listBusiness = ['Work', 'Negocio 2', 'Negocio 3']

const Home = () => {
    let listEstablishment = Array()
    const router = useRouter();
    const [selectedEstablishment , setSelectedEstablishment] = useState('')
    const [ typeOfBusiness, setTypeOfBusiness] = useState('')
    const [isShowSecondPicker, setIsShowSecondPicker] = useState(false) 


    const getList = async () => {
        const response = await axios.get('http://makhom.sispro.com.br/ORC/WsObterDepositos.rule?sys=ORC&Login=ABIMAEL')

        // console.log(response.data)
        const listResponse = response.data;

        for (let i = 0; i < listResponse.length; i++) {
            listEstablishment[i] = listResponse[i].SC_ESTAB
        }
        console.log(listEstablishment)
    }

    useEffect(()=> {
        if(selectedEstablishment != ''){
            setIsShowSecondPicker(true)
        }

        if(listEstablishment.length == 0){
            getList()
        }



    },[selectedEstablishment])

    const searchProduct = () => {
        router.push('/products')
    }

    const logout = () => {
        router.push('/')
    }

    return(
        <SafeAreaView>
            <TouchableOpacity onPress={getList}><Text>Teste</Text></TouchableOpacity>

            <View style={ styles.container}>
                <View style={styles.contentContainer}>
                    <View style={styles.header}>
                        <Text style={ styles.textHeader}>.</Text>
                    </View>

                    {selectedEstablishment == '' ?(
                        <View style={styles.firstViewPicker}>
                            <Text style={styles.text}>Estabelecimento</Text>
                            <Picker
                                selectedValue={selectedEstablishment}
                                onValueChange={(itemValue) => setSelectedEstablishment(itemValue)}
                                style={styles.picker}
                            >
                                {listEstablishment.map((item) => (
                                    <Picker.Item label={item} value={item}/>
                                ))}
                            </Picker>

                        </View>
                    ):(
                        <View style={styles.firstViewPicker}>
                            <Text style={ styles.textBold}>{selectedEstablishment}</Text>
                        </View>
                    )}

                    {isShowSecondPicker ? (
                        <View style={styles.firstViewPicker}>
                            <Text style={styles.text}>Tipo de negócio</Text>
                            <Picker
                                selectedValue={typeOfBusiness}
                                onValueChange={(itemValue) => setTypeOfBusiness(itemValue)}
                                style={styles.picker}
                            >
                                {listBusiness.map((item) => (
                                    <Picker.Item label={item} value={item}/>
                                ))}
                            </Picker>

                            <TouchableOpacity style={styles.buttonProduct} onPress={searchProduct}>
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
        flex: 1, 
        justifyContent: "center",
        alignItems: "center",
    },

    contentContainer :{
        width: '30%', 
        padding: 5
       
    },

    header: {
        backgroundColor: '#003aa0',
        height: 90
        
        
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