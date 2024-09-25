import { TouchableOpacity, View, StyleSheet, Text, FlatList } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useRouter } from "expo-router";


const listFruits = ['apple', 'banana', 'melon', 'pineapple', 'grape']

const ProductsList = () => {
    const router = useRouter()

    return(
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.buttonHeader} onPress={router.back}>
                            <FontAwesome6 name="house-chimney" size={24} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonHeader} onPress={router.back}>
                            <AntDesign name="back" size={24} color="white" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.listButtonContainer}>
                        <FlatList
                            data={listFruits}
                            style={styles.flatlist}
                            renderItem={({item}) => (
                                <TouchableOpacity style={styles.touchButton}>
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
        flex: 1, 
        justifyContent: "center",
        alignItems: "center",
    },

    contentContainer :{
        width: '80%', 
        padding: 5,
       
    },

    header: {
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

    listButtonContainer: {
        padding: 12

    },

    flatlist: {
        marginTop: 20,
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