import { Stack } from "expo-router";
import MyContext from "./context/MyContext";
import { useState } from "react";



const Layout = ()=> {
    const [login, setLogin] = useState('')
    const [selectedEstablishment , setSelectedEstablishment] = useState('')
    const [password, setPassword] = useState("")
    const [isShowSecondPicker, setIsShowSecondPicker] = useState(false)
    const [productSelected, setProductSelected] = useState()
    const [selectedTypeOfBusiness, setSelectedTypeOfBusiness] = useState('')
    const [company, setCompany] = useState('')
    const [typeBusinessNumber, setTypeBusinessNumber] = useState('')


    return(
        <MyContext.Provider value={{
            login,setLogin, selectedEstablishment,
            setSelectedEstablishment,
            selectedTypeOfBusiness, setSelectedTypeOfBusiness,
            password, setPassword,
            isShowSecondPicker, setIsShowSecondPicker,
            productSelected, setProductSelected,
            company, setCompany,
            typeBusinessNumber, setTypeBusinessNumber

            }}>
            <Stack>
                <Stack.Screen name="index" options={{title: "Login"}}/>
                <Stack.Screen name="home/index" options={{title: "Home"}}/>
                <Stack.Screen name="products/index" options={{title: "Products"}}/>
                <Stack.Screen name="inventory/index" options={{title: "Inventory"}} />
            </Stack>
        </MyContext.Provider>
    )
}

export default Layout