import { SafeAreaView } from "react-native-safe-area-context"
import { Text, View, StyleSheet, ScrollView, TouchableOpacity,FlatList, Switch, TextInput} from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useContext, useEffect, useState } from "react";
import MyContext from "../context/MyContext";
import { useRouter } from "expo-router";
import axios from "axios";


const InventoryList = () => {
    const router = useRouter()
    const [isChecked, setIsChecked] = useState(false)
    const [listInventory , setListInventory] = useState([])
    const {setSelectedEstablishment, setIsShowSecondPicker,groupSelected, login, typeBusinessNumber, company } = useContext(MyContext)
    
    const url = `http://makhom.sispro.com.br/ORC/WsDadosGrade.rule?sys=ORC&empresa=${company}&grupoNumero=${groupSelected.CD_MAT_GRUPO}&servico=${typeBusinessNumber}&usuario=${login}`

    const getListInventory = async() => {
        console.log(url)
        
        try{
            const response = await axios.get(url)
            
            const listResponse = response.data
            console.log(listResponse)
            setListInventory(listResponse)
            
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        if(listInventory.length == 0){
            getListInventory()
        }
    },[listInventory])

    const check = () =>{
        if(isChecked){
            setIsChecked(false)
        }else{
            setIsChecked(true)
        }
    }
    

    const backToHome = () => {
        setSelectedEstablishment('')
        setIsShowSecondPicker(false)
        router.push('/home')
    }

    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.buttonHeader} onPress={backToHome} >
                        <FontAwesome6 name="house-chimney" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonHeader} onPress={()=> router.back()}>
                        <AntDesign name="back" size={24} color="white"/>
                    </TouchableOpacity>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.textContainer}>
                    <Switch 
                            value={isChecked}
                            onValueChange={check}
                            style={{marginRight: 10}}
                        />
                        <Text>Somente produtos em estoque</Text>
                    </View>


                    <View style={styles.searchContainer}>
                        <TextInput
                            placeholder='Pesquise por nome do Produto'
                            style={styles.textSearch}
                        />
                    </View>

                    <View style={styles.tableContent}>
                        <View style={styles.headerTableContainer}>
                            <Text style={styles.headerTableText}>Código</Text>
                            <Text style={styles.headerTableText}>Produto</Text>
                            <Text style={styles.headerTableText}>UnMedida</Text>
                            <Text style={styles.headerTableText}>Aplicação</Text>
                        </View>
                        <FlatList
                            data={listInventory}
                            keyExtractor={(item => item.CD_ITEM_ID)}
                            renderItem={({item}) => (
                                
                                <View style={styles.row}>
                                    <TouchableOpacity style={styles.cell}>
                                        <Text>{item.CD_ITEM_ID}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.cell}>
                                        <Text>{item.DS_ITEM_ID}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.cell}>
                                        <Text>{item.CD_UNMED}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.cell}>
                                        <Text>{item.CD_APLICACAO}</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default InventoryList

const styles = StyleSheet.create({
    container: {
        
    },

    header: {
        width: '100%',
        backgroundColor: '#003aa0',
        height: 90, 
        justifyContent: 'space-between',
        flexDirection: 'row',     
        
    },
    
    buttonHeader:{
        padding: 20, 
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20

    },
    contentContainer :{
        padding: 10,
        marginBottom: 10,
    },

    textContainer: {
        flexDirection: 'row',
        padding: 5,
        marginBottom: 10
    },

    searchContainer:{
        marginBottom: 20,
        marginTop: 10
    },

    textSearch: {
        borderColor: '#000',
        padding: 10,
        borderWidth: .8
    },

    tableContent: {
        padding: 10,
        borderBlockColor: '#000',
        borderWidth: 1
    },

    headerTableContainer : {
        flexDirection: 'row',
        borderBottomWidth: 1,
    },

    headerTableText: {
        fontWeight: '600',
        flex: 1,
        padding: 10,
        
    },

    row: {
        flexDirection: 'row',
        borderBottomWidth: 1,

        borderColor: '#ccc',
    },
    cell: {
        padding: 10,
        flex: 1

    },



})