import { TouchableOpacity, View, StyleSheet, FlatList } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useRouter } from "expo-router";


const ProductsList = () => {
    const router = useRouter()

    return(
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={router.back}>
                            <FontAwesome6 name="house-chimney" size={24} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={router.back}>
                            <AntDesign name="back" size={24} color="white" />
                        </TouchableOpacity>
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
        width: '30%', 
        padding: 5
       
    },

    header: {
        backgroundColor: '#003aa0',
        height: 90, 
        justifyContent: 'space-between',
        flexDirection: 'row',
        
        
        
    },

    buttonHeader:{
        padding: 10    
    },

    flatList: {

    }
})