import { TouchableOpacity, View, StyleSheet, Text, FlatList, ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useRouter } from "expo-router";
import { useContext, useEffect } from "react";
import MyContext from "../context/MyContext";


const listFruits = ['apple', 'banana', 'melon', 'pineapple', 'grape','S']

const ProductsList = () => {
    const router = useRouter()
    const {setSelectedEstablishment} = useContext(MyContext)
    const {setIsShowSecondPicker} = useContext(MyContext)

    const backToHome = () => {
        setSelectedEstablishment('')
        setIsShowSecondPicker(false)
        router.push('/home')
    }


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
                            data={listFruits}
                            style={styles.flatlist}
                            renderItem={({item}) => (
                                <TouchableOpacity style={styles.touchButton} onPress={() => router.push('/inventory')}>                                    
                                    <Text style={styles.textButton}>{item}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>

                </View>
            </View>
        </SafeAreaView>
    )
}

export default ProductsList

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