import { SafeAreaView } from "react-native-safe-area-context"
import { Text, View, StyleSheet, ScrollView, TouchableOpacity,FlatList, Switch} from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useContext, useEffect, useState } from "react";
import MyContext from "../context/MyContext";
import { useRouter } from "expo-router";


const InventoryList = () => {
    const {setSelectedEstablishment, setIsShowSecondPicker } = useContext(MyContext)
    const router = useRouter()
    const [isChecked, setIsChecked] = useState(false)


    const data = [
        { id: '1', col1: 'Alice', col2: 25, col3: 'A', col4: 'e'},
        { id: '2', col1: 'Bob', col2: 30, col3: 'B', col4: 'f' },
        { id: '3', col1: 'Charlie', col2: 35, col3: 'C', col4: 'g' },
        { id: '4', col1: 'David', col2: 40, col3: 'A', col4: 'h' },
        { id: '5', col1: 'Eve', col2: 28, col3: 'B', col4: 'i' },
    ];

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

    useEffect(()=>{
        console.log(data)
    },[])

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

                    <View style={styles.tableContent}>
                        <View style={styles.headerTableContainer}>
                            <Text style={styles.headerTableText}>Código</Text>
                            <Text style={styles.headerTableText}>Produto</Text>
                            <Text style={styles.headerTableText}>UnMedida</Text>
                            <Text style={styles.headerTableText}>Aplicação</Text>
                        </View>
                        <FlatList
                            data={data}
                            keyExtractor={(item => item.id)}
                            renderItem={({item}) => (
                                
                                <View style={styles.row}>
                                    <TouchableOpacity style={styles.cell}>
                                        <Text>{item.col1}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.cell}>
                                        <Text>{item.col2}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.cell}>
                                        <Text>{item.col3}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.cell}>
                                        <Text>{item.col4}</Text>
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