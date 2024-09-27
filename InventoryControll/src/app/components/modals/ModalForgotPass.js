import { View, TextInput, Text, StyleSheet, TouchableOpacity } from "react-native"


const ModalForgotPass = ({setIsShowModal}) => {
    
    
    return(
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                            Email:
                    </Text>
                </View>
                <TextInput
                    style={styles.textInput}
                
                />

                <TouchableOpacity style={styles.buttonToken} >
                            <Text style={styles.textToken}>Enviar token</Text>
                </TouchableOpacity>
                
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                            Token:
                    </Text>

                </View>
                <TextInput
                    style={styles.textInput}
                
                />

                <TouchableOpacity style={styles.buttonBack} onPress={() => setIsShowModal(false)}>
                    <Text>Voltar</Text>
                </TouchableOpacity>
                
            </View>
        </View>
    )
}

export default ModalForgotPass

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(24,24,24,0.6)",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    contentContainer: {
        backgroundColor: '#FFF',
        width: '80%',
        borderRadius: 8,
        
        justifyContent: 'center',
        alignItems: 'center',
    },


    text: {
        textAlign: 'left',
        fontSize: 15, 
        marginTop: 20
 
     },
     textInput :{
        marginBottom: 10,     
        borderRadius: 5,
        borderColor: 'gray',
        padding: 8,
        marginTop: 5,
        marginBottom: 15,
        borderWidth: 1, 
        width: '80%',
     },
 
     buttonToken:{
         marginTop: 40,
         backgroundColor: '#003aa0',
         paddingVertical: 10,
         borderRadius: 5,
         width: '80%'
         
     },
 
     textToken: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: '600'
     },

     buttonBack: {
        padding: 20
     }
})