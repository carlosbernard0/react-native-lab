import { View, Text, StyleSheet,TouchableOpacity, Pressable } from "react-native"
import * as Clipboard from "expo-clipboard"


const ModalPassword = ({passGenerated,handleClose}) => {
    const copyToClipboard = async () => {
        await Clipboard.setStringAsync(passGenerated)
        alert('text copied!!')
        handleClose()
    }

    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Senha gerada</Text>

                <Pressable style={styles.innerPassword} onLongPress={copyToClipboard}>
                    <Text style={styles.text}>{passGenerated}</Text>
                </Pressable>

                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button} onPress={handleClose}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.buttonSave]}>
                        <Text style={styles.buttonSaveText}>Salvar senha</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>        
    )
}

export default ModalPassword

const styles = StyleSheet.create({
    container:  {
        backgroundColor: "rgba(24,24,24,0.6)",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        backgroundColor: '#FFF',
        width: '80%',
        height: 270,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 18
    },
    innerPassword: {
        backgroundColor: '#0e0e0e',
        width: "90%",   
        padding: 14,
    },
    text: {
        color: "#FFF",
        textAlign: 'center',
        fontWeight: 'bold'
    },
    buttonArea: {
        flexDirection: 'row',
        width: "90%",
        marginTop: 8,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    button: {
        flex: 1,   
        alignItems: 'center',
        marginTop: 14,
        marginBottom: 14,
        borderRadius: 10,
        padding: 8
        
    },
    buttonSave: {
        backgroundColor: '#392de9',
        borderRadius: 8
    },
    buttonSaveText: {
        color: '#FFF',
        fontWeight: 'bold'
    }

})