import { Stack } from "expo-router";
import MyContext from "./context/MyContext";
import { useState } from "react";



const Layout = ()=> {
    const [login, setLogin] = useState('')

    return(
        <MyContext.Provider value={{login,setLogin}}>
            <Stack>
                <Stack.Screen name="index" options={{title: "Login"}}/>
                <Stack.Screen name="home/index" options={{title: "Home"}}/>
                <Stack.Screen name="products/index" options={{title: "Products"}}/>
            </Stack>
        </MyContext.Provider>
    )
}

export default Layout