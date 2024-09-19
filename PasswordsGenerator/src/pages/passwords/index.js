import { useState, useEffect } from "react";
import { Text, View, StyleSheet,FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useIsFocused } from '@react-navigation/native'
import useStorage from "../../hooks/useStorage";
import PasswordItem from "../../components/PasswordItem";

export function Passwords(){
    const [listPasswords, setListPasswords] = useState([])
    const focused = useIsFocused()
    const { getItem, removeItem} = useStorage()

    useEffect(()=> {
        async function loadPasswords(){
            const passwords = await getItem("@pass")
            setListPasswords(passwords)
        }

        loadPasswords()
    }, [focused])

    const handleDeletePassword = async (item) => {    
        const passwords = await removeItem("@pass", item);
        setListPasswords(passwords)
    }

    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Minhas senhas</Text>
            </View>
            <View style={styles.contentContainer}>
                <FlatList
                    style={styles.listPasswords}
                    data={listPasswords}
                    keyExtractor={(item)=> String(item)}
                    renderItem={({item})=> <PasswordItem data={item} removePassword={() => handleDeletePassword(item)}/>}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 0.3,
        backgroundColor: "#392de9",
        width: "100%",
        justifyContent: "flex-end",


    },
    headerTitle: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 30,
        marginLeft: 20
    },
    contentContainer: {
        flex: 0.7,
        marginLeft: 30,
        marginRight: 30,
        justifyContent: 'center',
        padding: 30
    },
    
})