import { TouchableOpacity, View, StyleSheet, Text, FlatList, ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useRouter } from "expo-router";
import { useContext, useEffect, useState } from "react";
import MyContext from "../context/MyContext";
import axios from "axios";


const GroupsList = () => {
    const router = useRouter()
    const {setSelectedEstablishment,setIsShowSecondPicker, setGroupSelected} = useContext(MyContext)
    const [ listGroups, setListGroups] = useState([])

    const getListGroups = async() => {
        try{
            const response = await axios.get('http://makhom.sispro.com.br/ORC/WsGrupos.rule?sys=ORC')

            const listResponse = response.data;
            console.log(listResponse)

            setListGroups(listResponse)
        }catch(error){
            console.log(error)
        }
    }

    const selectGroup = (itemValue) => {
        console.log(itemValue)
        setGroupSelected(itemValue)
        router.push('/inventory')
    }
    const backToHome = () => {
        setSelectedEstablishment('')
        setIsShowSecondPicker(false)
        router.push('/home')
    }

    useEffect(()=>{
        if(listGroups.length == 0) {
            getListGroups()
        }

    },[listGroups])



    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <View style={styles.header}>
                            <TouchableOpacity style={styles.buttonHeader} onPress={backToHome}>
                                <FontAwesome6 name="house-chimney" size={24} color="white" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonHeader} onPress={backToHome}>
                                <AntDesign name="back" size={24} color="white" />
                            </TouchableOpacity>
                </View>

                <View style={styles.contentContainer}>
                    <View style={styles.listButtonContainer}>
                        <FlatList
                            data={listGroups}
                            style={styles.flatlist}
                            renderItem={({item}) => (
                                <TouchableOpacity style={styles.touchButton}
                                onPress={()=>selectGroup(item)}>                             
                                    <Text style={styles.textButton}>{item.DS_MAT_GRUPO}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>

                </View>
            </View>
        </SafeAreaView>
    )
}

export default GroupsList

const styles = StyleSheet.create({
    container:  {
        
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
        padding: 5,
        marginBottom: 10,
    },

    listButtonContainer: {
        marginTop: 20,
        marginBottom: 50,
        
    },

    flatlist: {

        marginTop: 20,
        marginBottom: 50,
        paddingLeft: 20,
        paddingRight: 20
    },

    touchButton:{
        padding: 20,
        backgroundColor: '#003aa0',
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 10
    },
    textButton: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: '400'
    }

})