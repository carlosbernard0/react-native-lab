import { View, StyleSheet, Text, Pressable, Button, TouchableOpacity } from "react-native";
import { useState } from "react";

const PasswordItem = ({data, removePassword}) => {
    const [isVisible, setIsVisible] = useState(true)

    const handleVisible = ()=>{
        if(isVisible){
            setIsVisible(false)

        } else{
            setIsVisible(true)
        }
    }

    return(
        <Pressable style={styles.container} onLongPress={removePassword}>            
            <Text style={isVisible? styles.text : styles.textHidden }>
                {data}
            </Text>
            <TouchableOpacity onPress={handleVisible}>
                {isVisible ? (
                    <Text style={{color: '#FFF'}} >Ocultar</Text>

                ): (
                    <Text style={{ color: '#FFF'}}>Mostrar</Text>
                    
                )}

            </TouchableOpacity>
        </Pressable>
    )
    
}

export default PasswordItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        justifyContent: 'space-between',
        borderRadius: 8,
        padding: 20,
        marginBottom: 20,
        marginTop: 20,
        flexDirection: 'row'
        
    },
    text: {
        color: '#FFF',
        fontWeight: "bold", 
    }, 
    textHidden: {
        backgroundColor: '#FFF',
        color: '#FFF',
        borderRadius: 15,
    }
})