import { useContext } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import MyContext from '../../context/MyContext'


const ModalFirstAcess = ({setIsShowModal}) => {
    const {setPassword, password, setLogin} = useContext(MyContext) 


    return(
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={styles.text}>
                        Nome:
                </Text>
                <TextInput
                    style={styles.textInput}
                
                />
                <Text style={styles.text}>
                        Email:
                </Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Email para recuperação de senha'
                />


                <Text style={styles.text}>
                        Senha:
                </Text>
                <TextInput
                    style={styles.textInput}
                    secureTextEntry={true}

                />
                <Text style={styles.text}>
                        Confirme a sua senha:
                </Text>
                <TextInput
                    style={styles.textInput}
                    secureTextEntry={true}

                />
                <TouchableOpacity style={styles.buttonSave} >
                            <Text style={styles.textSave}>Salvar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> setIsShowModal(false)}>
                    <Text>Voltar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ModalFirstAcess

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(24,24,24,0.6)",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    contentContainer: {
        padding: 20,
        backgroundColor: '#FFF',
        width: '80%',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        fontSize: 15, 
        marginTop: 20
 
     },
     textInput :{
        width: '80%',
         borderRadius: 5,
         borderColor: 'gray',
         padding: 8,
         marginTop: 5,
         marginBottom: 10,
         borderWidth: 1, 
 
     },
 
     buttonSave:{
        marginTop: 20,
         marginBottom: 20,
         width: "80%",
         backgroundColor: '#003aa0',
         paddingVertical: 10,
         borderRadius: 5
         
     },
 
     textSave: {
         textAlign: 'center',
         color: '#FFF',
         fontWeight: '600'
     },
})