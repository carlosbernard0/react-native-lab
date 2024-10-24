import { View,Text, SafeAreaView,TouchableOpacity, StyleSheet, FlatList } from "react-native"
import FontAwesome6 from "@expo/vector-icons/FontAwesome6"
import AntDesign from "@expo/vector-icons/AntDesign"
import { useRouter } from "expo-router"
import { useContext, useEffect, useState } from "react"
import MyContext from "../context/MyContext"
import axios from "axios"


const Establishment = () => {
    const router = useRouter()
    const { setSelectedEstablishment, setIsShowSecondPicker, token, productSelected, company} = useContext(MyContext)
    const [listOthersEstab, setListOthersEstab] = useState([]) 
    const saldoEtqTipo = 'GERAL'

    const urlOtherEstablishment = `https://siscandes2v6.sispro.com.br/SisproERPCloud/Service_Private/React/SpReact2JapuraWS/api/OutroEstab/Get/?itemProd=${productSelected.CD_ITEM_ID}&saldoEtqTipo=${saldoEtqTipo}&empresa=${company}`

    const getOtherEstablishment = async () => {
        try{
            const response = await axios.get(urlOtherEstablishment,{
                headers: {
                    Authorization: token
                }
            })

            console.log(response.data.OutroEstab)
            setListOthersEstab(response.data.OutroEstab)

        }catch(error){
            console.log(error)
        }
    }

    const backToHome = () => {
        setSelectedEstablishment('')
        setIsShowSecondPicker(false)
        router.push('/home')
    }

    useEffect(()=>{
        if(listOthersEstab.length == 0){
            getOtherEstablishment()
        }
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
                    <View style={styles.titleContainer}>
                        <Text style={styles.textBalanceDeposit}>CONSULTA SALDO POR DEPÓSITO</Text>
                    </View>

                    <View style={styles.productInfoContainer}>
                        <Text style={styles.productDescTitle}>Descrição: {productSelected.DS_ITEM_ID}</Text>
                        <Text style={styles.productCodTitle}>COD: {productSelected.CD_ITEM_ID}</Text>
                    </View>

                    
                    <View style={styles.list}>
                        <View style={styles.row}>
                            <Text style={{...styles.itemList, fontWeight: '800'}}>Depósito</Text>
                            <Text style={{...styles.itemList, fontWeight: '800'}}>Quantidade</Text>
                        </View>
                        <FlatList
                            data={listOthersEstab}
                            keyExtractor={(item => item.OP_ITEM_PROD)}
                            renderItem={({item}) => (
                                <View style={styles.row}>
                                    <Text style={styles.itemList}>{item.DS_DEPOSITO}</Text>
                                    <Text style={styles.itemList}>{item.QT_SALDO_DISP}</Text>
                                </View>
                            )}
                        />
                    </View>

                </View>
            </View>
        </SafeAreaView>
    )
}

export default Establishment

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'

    },

    header:{
        width: '100%',
        backgroundColor: '#003aa0',
        height: 90, 
        justifyContent: 'space-between',
        flexDirection: 'row',     
    },

    buttonHeader: {
        padding: 20, 
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20
    },

    contentContainer: {
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
        width: '100%'
    },

    titleContainer:{ 
        marginBottom: 20,
        marginTop: 10,
        backgroundColor: 'lightblue'

    },

    productInfoContainer: {
        width: '100%',
        padding: 10, 
        justifyContent: 'space-around',
    },

    productCodTitle: {
        fontSize: 20,
        fontWeight: '600'
    },

    productDescTitle: {
        fontSize: 20,
        fontWeight: '600'
    },

    list: {
        padding: 10,
    },


    textBalanceDeposit: {
        color: '#000',
        textAlign: "center",
        fontWeight: '700',
        fontSize: 20,
        padding: 15
    },

    row: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginLeft: 10, 
        marginRight: 15, 
    },

    itemList: {
        backgroundColor: '#003aa0',
        color: '#FFF',
        textAlign: 'center',
        flex: .5,
        padding: 10,
        marginLeft: 5
    }


})