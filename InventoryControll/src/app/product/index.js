import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Switch } from "react-native"
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { useRouter } from "expo-router";
import { useContext, useEffect, useState} from "react";
import MyContext from "../context/MyContext";
import { Picker} from '@react-native-picker/picker';


const Product = () => {
    const router = useRouter()
    const { setSelectedEstablishment, setIsShowSecondPicker } = useContext(MyContext)
    const [ countItem, setCountItem ] = useState(1)
    const [ listTypeValues, setListTypeValues] = useState([])
    const [typeValueSelected, setTypeValueSelected] = useState(listTypeValues[0])
    const [cashPriceItem, setCashPriceItem] = useState(300)
    const [creditPriceItem, setCreditPriceItem] = useState(400)
    const [allValueItem, setAllValueItem] = useState((cashPriceItem*countItem)+',0000')
    const [ availableCount, setAvailableCount] = useState(0)

    const backToHome = () => {
        setSelectedEstablishment('')
        setIsShowSecondPicker(false)
        router.push('/home')
    }

    const lessCountItem = () => {
         if(countItem <= 1) return

       setCountItem(countItem - 1);
    }
    const moreCountItem = () => {
        setCountItem(countItem + 1)
    }

    useEffect(()=>{
        setAllValueItem(cashPriceItem * countItem )
        setListTypeValues([
            `${cashPriceItem} Preço de Venda a Vista`, `${creditPriceItem} Preço de Venda a Prazo`
        ])

        

    },[countItem])

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
                    <View style={styles.contentInfoItem}>
                        <Text style={styles.textBold}>00007</Text> 
                        <Text style={styles.nameItem}>pneu</Text>
                    </View>
                    <View style={styles.contentRow}>
                        <Text>Disponivel</Text>
                        <Text>{availableCount}</Text>
                    </View>
                    <TouchableOpacity style={styles.buttonMoreEstablishment}>
                        <Text style={styles.textButton}>Demais estabelecimentos</Text>
                    </TouchableOpacity>
                    <View style={styles.contentRow}>
                        <Text style={styles.textBold}>Valor Unitário R$</Text>
                        <Text>{typeValueSelected == listTypeValues[0] ? cashPriceItem : creditPriceItem}</Text>
                    </View>
                    <View style={styles.contentRow}>
                        <Text style={styles.textBold}>Quantidade</Text>
                        <View style={{flexDirection: 'row', gap: 10}}>
                            <TouchableOpacity style={styles.buttonOperator} onPress={lessCountItem}>
                                <Feather name="minus" size={20} color="white" />          
                            </TouchableOpacity>
                            <Text>{countItem}</Text>
                            <TouchableOpacity style={styles.buttonOperator} onPress={moreCountItem}>
                            <Feather name="plus" size={20} color="white" />          

                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.contentRow}>
                        <Picker
                            selectedValue={typeValueSelected}
                            onValueChange={(value) => setTypeValueSelected(value)}
                            style={styles.picker}
                        >
                            {listTypeValues.length != 0 ? listTypeValues.map((item) => (
                                <Picker.Item  key={item} label={item} value={item}/>
                            )): 
                            
                            (<Picker.Item>Nao possui dados na lista de valores</Picker.Item>)}
                        </Picker>
                    </View>
                    <View style={styles.allValue}>
                        <Text style={{padding: 10}}>Valor Total Item R$</Text>
                        <Text style={{...styles.textBold, letterSpacing: 1}}>{allValueItem}</Text>
                    </View>
                </View>
            </View>
            
        </SafeAreaView>
    )


}

export default Product

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'

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
        marginLeft: 50,
        marginRight: 50,
        padding: 20,
        width: '100%'
    },

    contentInfoItem: {
        marginBottom: 30,
        marginLeft: 20,
        marginRight: 20,
        gap: 8,
    },

    textBold: {
        fontWeight: '600',
        marginBottom: 5
    },

    contentRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20
    },
    buttonMoreEstablishment:{
        backgroundColor: '#003aa0',
        borderRadius: 8,
        marginBottom: 15, 
        marginTop: 15, 
        marginLeft: 15, 
        marginRight: 15, 
    },

    textButton:{
        fontWeight: '600',
        color: '#FFF',
        padding: 10,
        textAlign :'center'
    },

    buttonOperator: {
        backgroundColor: '#003aa0',
        borderRadius: 5
    },

    textOperator: {
        color: '#FFF',
    },
    
    picker: {
        padding: 10,
        borderRadius: 7,
        width: '100%'
    },

    allValue: {
        alignItems: 'center',
        gap : 10,
        backgroundColor: '#b8daed',
        borderRadius: 5,
        marginLeft: 15,
        marginRight: 15,
    }

})