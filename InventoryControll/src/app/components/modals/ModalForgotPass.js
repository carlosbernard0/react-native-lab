import { View, TextInput, Text, StyleSheet, TouchableOpacity } from "react-native"


const ModalForgotPass = ({setIsShowModal}) => {
    
    
    return(
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={styles.text}>
                        Email:
                </Text>
                    <TextInput
                        style={styles.textInput}
                      
                    />
            

                <TouchableOpacity style={styles.buttonToken} >
                            <Text style={styles.textToken}>Enviar token</Text>
                </TouchableOpacity>

            
                <Text style={styles.text}>
                        Token:
                </Text>
                    <TextInput
                        style={styles.textInput}
                      
                    />
            </View>


            <TouchableOpacity >
                <Text onPress={()=> setIsShowModal(false)}>Fechar modal</Text>
            </TouchableOpacity>

        </View>
    )

}

export default ModalForgotPass

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    contentContainer: {
        padding: 20
    },

    text: {
        fontSize: 15, 
        marginTop: 20
 
     },
     textInput :{
         borderRadius: 5,
         borderColor: 'gray',
         padding: 8,
         marginTop: 5,
         marginBottom: 15,
         borderWidth: 1, 
 
     },
 
     buttonToken:{
         marginTop: 40,
         width: "100%",
         backgroundColor: '#003aa0',
         paddingVertical: 10,
         borderRadius: 5
         
     },
 
     textToken: {
         textAlign: 'center',
         color: '#FFF',
         fontWeight: '600'
     },
})