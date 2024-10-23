import { createContext,useState } from "react";


const MyContext = createContext()


export const MyContextProvider = ({children}) => {
    const [login, setLogin] = useState('')
    const [selectedEstablishment , setSelectedEstablishment] = useState('')
    const [password, setPassword] = useState("")
    const [isShowSecondPicker, setIsShowSecondPicker] = useState(false)
    const [groupSelected, setGroupSelected] = useState()
    const [selectedTypeOfBusiness, setSelectedTypeOfBusiness] = useState('')
    const [company, setCompany] = useState('')
    const [typeBusinessNumber, setTypeBusinessNumber] = useState('')
    const [token, setToken] = useState('');
    const [productSelected, setProductSelected] = useState('')
    

    return(
        <MyContext.Provider value={{
            login,setLogin,
            selectedEstablishment,setSelectedEstablishment,
            selectedTypeOfBusiness, setSelectedTypeOfBusiness,
            password, setPassword,
            isShowSecondPicker, setIsShowSecondPicker,
            groupSelected, setGroupSelected,
            company, setCompany,
            typeBusinessNumber, setTypeBusinessNumber,
            token, setToken,
            productSelected, setProductSelected
        }}>
            {children}
        </MyContext.Provider>

    )
}


export default MyContext;

