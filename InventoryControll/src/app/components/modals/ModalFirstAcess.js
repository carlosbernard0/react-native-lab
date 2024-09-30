import { useContext, useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import MyContext from '../../context/MyContext'


const ModalFirstAcess = ({setIsShowModal}) => {
    
    // const {setPassword, password, setLogin} = useContext(MyContext) 
    const [data, setData] = useState({
        name: '', mail: '', password:'', passwordConfirm: ''
    })

    const handleChange = (field,value) => {
        setData(prevData => ({...prevData,[field]: value}))
    }

    const save = () => {
        if(data.passwordConfirm != data.password){
            alert('As senhas devem se coincidirem!')
        }

        if(data.name == '' || data.mail == '' || data.password == '' || data.passwordConfirm == '' ) console.log('Você deve preencher todos os campos!')

        console.log(data)
    }

    return(
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={styles.text}>
                        Nome:
                </Text>
                <TextInput
                    value={data.name}
                    onChangeText={(value) => handleChange('name', value)}
                    style={styles.textInput}
                
                />
                <Text style={styles.text}>
                        Email:
                </Text>
                <TextInput
                    value={data.mail}
                    onChangeText={(value) => handleChange('mail',value)}
                    style={styles.textInput}
                    placeholder='Email para recuperação de senha'
                />


                <Text style={styles.text}>
                        Senha:
                </Text>
                <TextInput
                    value={data.password}
                    onChangeText={(value)=> handleChange('password',value)}
                    style={styles.textInput}
                    secureTextEntry={true}

                />
                <Text style={styles.text}>
                        Confirme a sua senha:
                </Text>
                <TextInput
                    value={data.passwordConfirm}
                    onChangeText={(value)=> handleChange('passwordConfirm', value)}
                    style={styles.textInput}
                    secureTextEntry={true}

                />
                <TouchableOpacity style={styles.buttonSave} onPress={save} >
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